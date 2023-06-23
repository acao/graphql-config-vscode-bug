# Setup

npm install

# Reproducing the bug

0. open this project in vscode
1. Run `F5` or manually navigate to debugger tab, and choose 'Run Extension' green arrow next to 'Run and Debug'
2. Open the provided `example-project` directory
3. Observe that:

- the node filesystem can load and print the file
- the graphql config `rootDir` is set properly, and can load the config programattically (see projectConfig serialized to string)
- the schema file, and relative files specified in `documents` are not found when calling `getSchema()` (similar for `getDocuments()`)
-  Note: I have seen some users be able to get around this by specifying the absolute paths to individual files

![Example of the bug](assets/image.png)
