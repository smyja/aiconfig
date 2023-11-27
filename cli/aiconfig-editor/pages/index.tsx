import { EditorFile } from "@/src/shared/types";
import { Button, Container, Group, Table } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { ufetch } from "ufetch";

export default function Home() {
  // Get list of files in the currect directory; this should also use a path from the router to become a nested file tree that can be navigated
  const router = useRouter();

  const [files, setFiles] = useState<EditorFile[]>([]);

  const getFiles = useCallback(async () => {
    const res = await ufetch.post("/api/files", { path: router.query.path });

    const newFiles = res.files.map((file: EditorFile) => {
      const disabled = !file.isDirectory && file.extension !== ".json";

      return {
        ...file,
        disabled,
      };
    });

    setFiles(newFiles);
  }, [router.query.path]);

  useEffect(() => {
    // Get files from current directory (will be whatever is passed as root directory when undefined, but needs to be handled server side
    getFiles();
  }, [getFiles]);

  const navigate = useCallback(
    (file: EditorFile) => {
      // If directory, then change path & also update the url route to add to history
      // If random file, should not be able to select
      // If aiconfig.json file, then open editor - can't actually detect yet, so will just try to parse
      // load_json
      console.log("navigate", file);
      console.log(file.isDirectory);

      if (file.isDirectory) {
        const newPath = `${file.path}/${file.name}`;

        router.push(`?path=${encodeURIComponent(newPath)}`);
      } else {
        // Try to open editor (new tab?)
      }
    },
    [router]
  );

  const back = useCallback(() => {}, []);

  return (
    <>
      <Head>
        <title>AIConfig Editor</title>
        <meta name="description" content="AIConfig editor and utilities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Group>
            <Button
              m="sm"
              disabled={!router.query.path}
              onClick={() => {
                if (!router.query.path) {
                  return;
                } else {
                  router.back();
                }
              }}
            >
              Back
            </Button>
          </Group>
          <Table withBorder>
            <thead>
              <tr>
                <th>File</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, i) => (
                <tr key={i}>
                  <td>{file.name}</td>
                  <td>
                    <Button
                      disabled={file.disabled}
                      onClick={() => navigate(file)}
                    >
                      Open
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        <Link href="/editor?path=/Users/suyogsonwalkar/Projects">Editor</Link>
      </main>
    </>
  );
}
