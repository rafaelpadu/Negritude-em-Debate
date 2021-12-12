import React, { useContext, useState } from "react";
import { Context } from "../context/UserContext.js";
import ImageForm from "../form/ImageForm.jsx";
import { Link } from "react-router-dom";
const CadastrarImages = () => {
  const { authenticated } = useContext(Context);
  return (
    <main>
      {authenticated ? (
        <ImageForm />
      ) : (
        <h1>
          Você precisa estar logado para cadastrar alguma imagem!{" "}
          <Link to="/login">Clique aqui para entrar</Link>
        </h1>
      )}
    </main>
  );
};
export default CadastrarImages;
