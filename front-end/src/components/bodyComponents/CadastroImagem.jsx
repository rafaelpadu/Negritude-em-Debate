import React, { useState } from "react";
import { Grid, TextField, Button, Dialog } from "@mui/material";
import Objetivos from "./textComponents/objetivos";
import Regras from "./textComponents/regras";
import FileUpload from "./UploadFiles";
const initialState = {
  title: "",
  author: "",
  archive: "",
  terms: false,
};
const CadastroImg = (props) => {
  const [dialogObjetivos, setDialogObjetivos] = useState(false);
  const [dialogRegras, setDialogRegras] = useState(false);
  const [values, setValues] = useState(initialState);
  const openDialogObj = () => setDialogObjetivos(true);
  const closeDialogObj = () => setDialogObjetivos(false);
  const openDialogRegras = () => setDialogRegras(true);
  const closeDialogRegras = () => setDialogRegras(false);
  return (
    <form>
      <Grid container spacing={2} className="gridForm" autoComplete="off">
        <Grid item xs={12}>
          <h2 className="tituloCadastro">Upload de Imagem</h2>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" onClick={openDialogObj}>
            Objetivos
          </Button>
          <Dialog open={dialogObjetivos} onClose={closeDialogObj}>
            <Objetivos />
          </Dialog>
          <Button variant="outlined" onClick={openDialogRegras}>
            Regras
          </Button>
          <Dialog open={dialogRegras} onClose={closeDialogRegras}>
            <Regras />
          </Dialog>
        </Grid>
        <Grid item xs={12}>
          <FileUpload />
        </Grid>
      </Grid>
    </form>
  );
};

export default CadastroImg;
