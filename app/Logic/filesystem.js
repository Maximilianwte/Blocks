function createFile(filename) {
    const documents = fileSystemModule.knownFolders.documents();
    const folder = documents.getFolder(vm.get("folderName") || "testFolder");
    const file = folder.getFile(`${(vm.get("fileName") || "testFile")}`.txt);

    file.writeText(vm.get("fileTextContent") || "some random content")
    .then((result) => {
        file.readText()
            .then((res) => {
                vm.set("successMessage", `Successfully saved in${file.path}`);
                vm.set("writtenContent", res);
                vm.set("isItemVisible", true);
            });
    }).catch((err) => {
        console.log(err);
    });
}

function updateFile(filename) {
    const fileName = vm.get("fileName");
    file.rename(`${fileName}.txt`)
    .then((res) => {
        // File Successfully Renamed.
        vm.set("fileSuccessMessage", `File renamed to:  ${fileName}.txt`);
        vm.set("isItemVisible", true);
    }).catch((err) => {
        // Error!
        console.log("Error: ");
        console.log(err);
        dialogs.alert(err)
        .then(() => {
            console.log("Dialog closed!");
        });
    });
}

export { createFile, updateFile}