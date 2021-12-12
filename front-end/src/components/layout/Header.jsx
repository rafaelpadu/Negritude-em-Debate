import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Divider, Button } from "@mui/material";
import styles from "./header.module.css";
import { Context } from "../context/UserContext";
const Header = (props) => {
  const { authenticated, logout } = useContext(Context);
  return (
    <header>
      <nav className={styles.navMain}>
        <Button color="warning">
          <Link to="/">
            <h1>Negritude em Debate</h1>
          </Link>
        </Button>
        <Button color="warning">
          <Link className="listLinkIten" to="/projects">
            <h1>Projetos</h1>
          </Link>
        </Button>
        <Button color="warning">
          <Link className="listLinkIten" to="/album">
            <h1>Album Digital</h1>
          </Link>
        </Button>
        <Button color="warning">
          <Link className="listLinkIten" to="/equipe">
            <h1>Equipe</h1>
          </Link>
        </Button>

        {authenticated ? (
          <>
            <Button color="warning">
              <Link className="listLinkIten" to="/cadastro/imagem">
                <h1>Cadastrar Imagens</h1>
              </Link>
            </Button>
            <Button color="warning">
              <Link className="listLinkIten" to="/">
                <h1>Minha conta</h1>
              </Link>
            </Button>
            <Button
              onClick={logout}
              color="warning"
              style={{ textTransform: "none" }}
            >
              <h1 className="listLinkIten">Logout</h1>
            </Button>
          </>
        ) : (
          <>
            <Button color="warning">
              <Link className="listLinkIten" to="/register">
                <h1>Registrar</h1>
              </Link>
            </Button>
            <Button color="warning">
              <Link className="listLinkIten" to="/login">
                <h1>Entrar</h1>
              </Link>
            </Button>
          </>
        )}
      </nav>
      <Divider />
    </header>
  );
};
export default Header;
