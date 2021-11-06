import "./cadastro.css";
import React, { useState, useEffect } from "react";
import { Grid, TextField, Button } from "@mui/material";
import AXIOS from "../configs/axios";
import DatePicker from "@mui/lab/DatePicker";
import { NavigateNext } from "@mui/icons-material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { ptBR } from "date-fns/locale";
import {
  userSchemaRegister,
  getValidationErrors,
  userSchemaRegisterFull,
} from "../validations/userValidation";
import { toast } from "react-toastify";
const initialValues = {
  name: "",
  cpf: "",
  email: "",
  telefone: "",
  nomeResp: "",
  cpfResp: "",
};

const Cadastro = (props) => {
  const [values, setValues] = useState(initialValues);
  const [date, setDate] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});
  const [invalidDate, setInvalidDate] = useState(false);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (date === null) {
      return;
    } else {
      if (dataMinima()) {
        setInvalidDate(false);
        setValues({ ...values, nomeResp: "", cpfResp: "" });
      } else {
        setInvalidDate(true);
      }
    }
  }, [date]);
  function dataMinima() {
    let dataAtual = new Date();
    let anoSelecionado = date.getFullYear();
    if (dataAtual.getFullYear() - anoSelecionado > 18) {
      return true;
    } else if (dataAtual.getFullYear() - anoSelecionado === 18) {
      let mesSelecionado = date.getMonth() + 1;
      if (mesSelecionado > dataAtual.getMonth()) {
        return false;
      } else if (mesSelecionado === dataAtual.getMonth()) {
        let diaSelecionado = date.getDay();
        if (diaSelecionado > dataAtual.getDate()) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  async function validateSubmit(e) {
    e.preventDefault();
    try {
      if (invalidDate) {
        await userSchemaRegisterFull.validate(values, { abortEarly: false });
      } else {
        await userSchemaRegister.validate(values, { abortEarly: false });
      }
      if (date == null) {
        toast.warn("A data de nascimento não pode estar vazia!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setIsError(false);
      props.setChangeTab(0);
      console.log("Antes de entrar");
      await submit(e);
    } catch (err) {
      const error = getValidationErrors(err);
      setErrorMsg(error);
      setIsError(true);
    }
  }
  async function submit(e) {
    e.preventDefault();
    try {
      const payload = { ...values, data_nascimento: date };
      console.log(payload);
      const newUser = await AXIOS.post("/users/create", payload);
      console.log(newUser);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form>
      <Grid container spacing={2} className="gridForm" autoComplete="off">
        <Grid item xs={12}>
          <h2 className="tituloCadastro">Cadastro de Imagem</h2>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Nome"
            variant="outlined"
            name="name"
            value={values.name.props}
            type="string"
            required
            onChange={handleChange}
            placeholder="Nome Completo"
            className="inputField big"
            error={isError && Boolean(errorMsg.name)}
            helperText={isError && errorMsg.name}
          >
            Nome:
          </TextField>
          <TextField
            required
            placeholder="XXX.XXX.XXX-XX"
            onChange={handleChange}
            value={values.cpf}
            type="string"
            name="cpf"
            label="CPF"
            className="inputField small"
            error={isError && Boolean(errorMsg.cpf)}
            helperText={isError && errorMsg.cpf}
          >
            CPF:
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="E-Mail"
            onChange={handleChange}
            value={values.email}
            type="email"
            name="email"
            className="inputField big"
            error={isError && Boolean(errorMsg.email)}
            helperText={isError && errorMsg.email}
          >
            E-Mail:
          </TextField>
          <TextField
            required
            label="Telefone/Whatsapp"
            onChange={handleChange}
            value={values.telefone}
            type="tel"
            name="telefone"
            className="inputField small"
            error={isError && Boolean(errorMsg.telefone)}
            helperText={isError && errorMsg.telefone}
          >
            Telefone/Whatsapp:
          </TextField>
        </Grid>
        {invalidDate && (
          <Grid container spacing={2} xs={12} s>
            <Grid item xs={12}>
              <TextField
                label="Nome do Responsável"
                variant="outlined"
                name="nomeResp"
                value={values.nomeResp}
                type="string"
                required
                onChange={handleChange}
                style={{ width: "300px", margin: "16px 15px 16px 32px" }}
                placeholder="Nome Completo do Responsável"
                error={isError && Boolean(errorMsg.nomeResp)}
                helperText={isError && errorMsg.nomeResp}
              >
                Nome do Responsável
              </TextField>
              <TextField
                label="CPF do Responsável"
                name="cpfResp"
                value={values.cpfResp}
                type="string"
                required
                onChange={handleChange}
                placeholder="XXX.XXX.XXX-XX"
                error={isError && Boolean(errorMsg.cpfResp)}
                style={{ marginTop: "16px" }}
                helperText={isError && errorMsg.cpfResp}
              >
                CPF do Responsável
              </TextField>
            </Grid>
          </Grid>
        )}
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
            <DatePicker
              label="Data de Nascimento"
              value={date}
              onChange={(newDate) => setDate(newDate)}
              renderInput={(params) => (
                <TextField {...params} className="datePickerField" />
              )}
            ></DatePicker>
          </LocalizationProvider>
          <Button
            variant="contained"
            onClick={validateSubmit}
            endIcon={<NavigateNext />}
            className="btnRegister"
            style={{ margin: "11px 0 0 99px" }}
          >
            Próximo
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default Cadastro;
