import os
import json

def generate_file_paths(directory):
    # Initialize a dictionary to store paths by folder
    paths = {}

    # Walk through the directory structure
    for root, dirs, files in os.walk(directory):
        folder_name = os.path.basename(root)
        if folder_name:  # Exclude the root directory itself
            # Add an entry for the folder
            paths[folder_name] = []
            # Add all file paths in this folder to the dictionary
            for file in files:
                # Replace backslashes with forward slashes
                file_path = os.path.join(root, file).replace('\\', '/')
                paths[folder_name].append(file_path)
    
    return paths

def save_paths_to_json(directory, output_file="file_paths.json"):
    # Get the file paths
    paths = generate_file_paths(directory)
    
    # Save the dictionary as a JSON file
    with open(output_file, "w") as f:
        json.dump(paths, f, indent=4)
    
    print(f"File paths saved to {output_file}")

# Example usage
directory = "public/assets"  # Replace with the actual path to your folder
save_paths_to_json(directory)

