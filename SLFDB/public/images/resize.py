from PIL import Image
import os

def resize_images(folder_path, output_folder=None, resize_to=(2048, 2048)):
  """Resizes images in the specified folder to the given dimensions.

  Args:
      folder_path (str): Path to the folder containing the images to resize.
      output_folder (str, optional): Path to the folder where resized images will be saved. Defaults to None, which saves them in the original folder with "_resized" appended to the filename.
      resize_to (tuple, optional): Desired dimensions (width, height) for the resized images. Defaults to (256, 512).
  """

  if not os.path.exists(folder_path):
    raise FileNotFoundError(f"Folder '{folder_path}' does not exist.")

  # Create output folder if not specified
  if not output_folder:
    output_folder = os.path.join(folder_path, "resized_images")
    if not os.path.exists(output_folder):
      os.makedirs(output_folder)

  for filename in os.listdir(folder_path):
    if not filename.lower().endswith(('.jpg', '.jpeg', '.png')):
      continue  # Skip non-image files

    filepath = os.path.join(folder_path, filename)
    try:
      image = Image.open(filepath)
      resized_image = image.resize(resize_to, Image.ANTIALIAS)  # Use ANTIALIAS for smoother scaling

      # Create filename with "_resized" suffix
      output_filename, _ = os.path.splitext(filename)
      output_filename = f"{output_filename}.png"  # Preserve extension

      output_filepath = os.path.join(output_folder, output_filename)
      resized_image.save(output_filepath)
      print(f"Resized '{filename}' to '{output_filename}'")
    except (IOError, OSError) as e:
      print(f"Error resizing '{filename}': {e}")

# Example usage
folder_path = "./fika_12K/"
resize_images(folder_path)  # Resize to default 256x512, save in original folder with "_resized" suffix

# Optional: Specify output folder and resize dimensions
# resize_images(folder_path, output_folder="./resized_images", resize_to=(300, 400))
