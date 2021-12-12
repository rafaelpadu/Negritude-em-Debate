import React, { useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
import styles from "./ImageForm.module.css";
const initialValues = {
  title: "",
  author: "",
  images: "",
};
const FileUpload = ({ imagemData }) => {
  const filesElement = useRef(null);
  const [preview, setPreview] = useState([]);
  const [values, setValues] = useState(initialValues);

  const sendFile = (e) => {
    setPreview(e.target.files);
    setValues({ ...values, images: [e.target.files] });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    imagemData(values);
  };
  return (
    <div className={styles.uploadFiles}>
      <div className={styles.imagesContainer}>
        {preview.length > 0 ? (
          <img src={URL.createObjectURL(preview[0])} alt="Imagem" />
        ) : (
          ""
        )}
      </div>
      <Button component="label" variant="contained" color="success">
        <input
          accept="image/*"
          id="contained-button-file"
          hidden
          type="file"
          ref={filesElement}
          onChange={sendFile}
        />
        Carregar Imagem
      </Button>
      <div className={styles.uploadFilesInputs}>
        <TextField
          label="Título da Foto"
          onChange={handleChange}
          name="title"
          value={values.title}
          type="string"
          required
        />
        <TextField
          label="Nome da(o) Fotógrafa(o)"
          variant="outlined"
          name="author"
          value={values.author}
          type="string"
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};
export default FileUpload;
