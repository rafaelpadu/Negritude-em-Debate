import React, { useState } from "react";
import { Button, Paper, Dialog } from "@mui/material";
import UploadFiles from "./UploadFiles";
import Objetivos from "./textComponents/objetivos";
import Regras from "./textComponents/regras";
import styles from "./ImageForm.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../utils/api";
const ImageForm = () => {
  const [token] = useState(localStorage.getItem("token") || "");
  const [dialogObjetivos, setDialogObjetivos] = useState(false);
  const [dialogRegras, setDialogRegras] = useState(false);
  const [obj, setObj] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(obj).forEach((key) => {
      let images = Array.from(obj.images[0]);
      if (key === "images") {
        for (let i = 0; i < images.length; i++) {
          formData.append("images", images[i]);
        }
      } else {
        formData.append(key, obj[key]);
      }
    });
    console.log(obj);
    const data = await api
      .post("/images/register", formData, {
        Authorizarion: `Bearer ${JSON.parse(token)}`,
        "Content-Type": "multipart/form-data",
      })
      .then((response) => {
        toast.success(response.data.message);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response.data.message);
      });

    return;
  };
  return (
    <Paper
      elevation={8}
      className={styles.imageForm}
      style={{ backgroundColor: "#ffffffe0" }}
    >
      <h2 className="tituloCadastro">Upload de Imagem</h2>
      <UploadFiles imagemData={(imagemData) => setObj(imagemData)} />
      <div className={styles.regrasObjetivos}>
        <Button variant="outlined" onClick={() => setDialogObjetivos(true)}>
          Objetivos
        </Button>
        <Button variant="outlined" onClick={() => setDialogRegras(true)}>
          Regras
        </Button>
      </div>
      <Dialog open={dialogObjetivos} onClose={() => setDialogObjetivos(false)}>
        <Objetivos />
      </Dialog>
      <Dialog open={dialogRegras} onClose={() => setDialogRegras(false)}>
        <Regras />
      </Dialog>
      <Button variant="contained" onClick={handleSubmit}>
        Enviar
      </Button>
    </Paper>
  );
};

export default ImageForm;
