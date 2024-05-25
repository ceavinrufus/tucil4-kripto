function ReaderFile({ setFile, setFileName }) {
  function onChange(event) {
    var file = event.target.files[0];
    if (!file) return; // Ensure a file is selected

    const reader = new FileReader();
    setFileName(file.name);
    reader.readAsArrayBuffer(file); // Read file as array buffer to handle binary data

    reader.onload = (event) => {
      const fileContent = new Uint8Array(event.target.result); // File content as Uint8Array
      setFile(fileContent);
    };

    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };
  }

  return (
    <div className="input-group">
      <label htmlFor="fileUpload">Upload File</label>
      <input
        id="fileUpload"
        onClick={(e) => (e.target.value = null)}
        onChange={(e) => onChange(e)}
        type="file"
      />
    </div>
  );
}

export default ReaderFile;
