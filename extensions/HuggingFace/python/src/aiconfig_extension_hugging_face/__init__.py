from .local_inference.text_2_image import HuggingFaceText2ImageDiffusor
from .local_inference.text_generation import HuggingFaceTextGenerationTransformer
from .remote_inference_client.text_generation import HuggingFaceTextGenerationClient

LOCAL_INFERENCE_CLASSES = ["HuggingFaceText2ImageDiffusor", "HuggingFaceTextGenerationTransformer"]
REMOTE_INFERENCE_CLASSES = ["HuggingFaceTextGenerationClient"]
__ALL__ = LOCAL_INFERENCE_CLASSES + REMOTE_INFERENCE_CLASSES
