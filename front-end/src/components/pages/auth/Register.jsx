import styles from "./register.module.css";
import React, { useState, useEffect } from "react";
import { TextField, Button, Paper } from "@mui/material";
import api from "../../utils/api";
import DatePicker from "@mui/lab/DatePicker";
import { NavigateNext } from "@mui/icons-material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import {
  userSchemaRegister,
  getValidationErrors,
  userSchemaRegisterFull,
} from "../../utils/userValidation";
import { toast } from "react-toastify";

const initialValues = {
  name: "",
  cpf: "",
  email: "",
  telefone: "",
  nomeResp: "",
  cpfResp: "",
  password: "",
};

const Register = (props) => {
  const [values, setValues] = useState(initialValues);
  const [date, setDate] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});
  const [invalidDate, setInvalidDate] = useState(false);
  const navigate = useNavigate();
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
        toast.warn("A data de nascimento não pode estar vazia!");
        return;
      }
      setIsError(false);
    } catch (err) {
      const error = getValidationErrors(err);
      setErrorMsg(error);
      setIsError(true);
      return;
    }
    await submit(e);
  }
  async function submit(e) {
    e.preventDefault();
    console.log("Bateu");
    const payload = { ...values, data_nascimento: date };
    await api
      .post("/users/register", payload)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/");
      })
      .catch((err) => toast.error(err.response.data.message));
  }

  return (
    <form>
      <Paper
        elevation={8}
        className={styles.gridForm}
        style={{ backgroundColor: "#ffffffe0" }}
      >
        <div>
          <h2 className="tituloCadastro">Cadastro de Usuário</h2>
        </div>
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
          error={isError && Boolean(errorMsg.telefone)}
          helperText={isError && errorMsg.telefone}
        >
          Telefone/Whatsapp:
        </TextField>
        <TextField
          required
          label="Senha"
          onChange={handleChange}
          value={values.password}
          type="password"
          name="password"
          error={isError && Boolean(errorMsg.password)}
          helperText={isError && errorMsg.password}
        >
          Senha
        </TextField>
        {invalidDate && (
          <>
            <TextField
              label="Nome do Responsável"
              variant="outlined"
              name="nomeResp"
              value={values.nomeResp}
              type="string"
              required
              onChange={handleChange}
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
              helperText={isError && errorMsg.cpfResp}
            >
              CPF do Responsável
            </TextField>
          </>
        )}
        <div>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
            <DatePicker
              label="Data de Nascimento"
              value={date}
              onChange={(newDate) => setDate(newDate)}
              renderInput={(params) => (
                <TextField {...params} className={styles.datePickerField} />
              )}
            ></DatePicker>
          </LocalizationProvider>
          <Button
            variant="contained"
            onClick={validateSubmit}
            endIcon={<NavigateNext />}
            className={styles.btnRegister}
            style={{
              margin: "10px 0 10px 20px",
              backgroundColor: "#D98E32",
            }}
          >
            Cadastrar
          </Button>
        </div>
      </Paper>
    </form>
  );
};
export default Register;
