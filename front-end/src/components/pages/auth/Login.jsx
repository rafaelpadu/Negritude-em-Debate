import React, { useState, useEffect, useContext } from "react";
import { TextField, Button, Paper } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { Context } from "../../context/UserContext";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
import {
  userSchemaLogin,
  getValidationErrors,
} from "../../utils/userValidation";
const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const { login } = useContext(Context);
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isError, setIsError] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    await userSchemaLogin
      .validate(values, { abortEarly: false })
      .catch((err) => {
        const error = getValidationErrors(err);
        setErrors(error);
        setIsError(true);
        return;
      });
    login(values);
  };
  return (
    <Paper
      elevation={8}
      className={styles.loginContainer}
      style={{ backgroundColor: "#ffffffe0" }}
    >
      <div className={styles.loginHeader}>
        <h2>Faça seu login</h2>
      </div>
      <div className={styles.loginComponents}>
        <TextField
          required
          label="E-Mail"
          onChange={handleChange}
          value={values.email}
          type="email"
          name="email"
          error={isError && Boolean(errors.email)}
          helperText={isError && errors.email}
        >
          E-mail
        </TextField>
        <TextField
          required
          label="Senha"
          onChange={handleChange}
          value={values.password}
          type="password"
          name="password"
          error={isError && Boolean(errors.password)}
          helperText={isError && errors.password}
        >
          Senha
        </TextField>
      </div>
      <div className={styles.loginActions}>
        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          onClick={handleSubmit}
          style={{ backgroundColor: "#D98E32" }}
        >
          Logar
        </Button>
        <Link to={"/register"}>Ainda não tenho cadastro</Link>
      </div>
    </Paper>
  );
};

export default Login;
