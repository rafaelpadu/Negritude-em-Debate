import React, { useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
import AXIOS from "../configs/axios";
const FileUpload = (props) => {
  const filesElement = useRef(null);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const sendFile = async () => {
    const dataForm = new FormData();
    for (const file of filesElement.current.files) {
      dataForm.append("file", file);
    }
    console.log(dataForm);
    const res = await AXIOS.post("/images/upload", dataForm);
    const data = await res.status;
    console.log(data);
  };
  return (
    <label>
      <TextField
        label="Título da Foto"
        variant="outlined"
        onChange={(e) => setAuthor()}
        name="title"
        value={title}
        type="string"
        required
      />
      <TextField
        label="Nome da(o) Fotógrafa(o)"
        variant="outlined"
        name="author"
        value={author}
        type="string"
        required
      />
      <Button component="label" variant="contained">
        <input
          accept="image/*"
          id="contained-button-file"
          hidden
          multiple
          type="file"
          ref={filesElement}
          onChange={sendFile}
        />
        Upload File
      </Button>
    </label>
  );
};
export default FileUpload;
