import React from "react";
import { Link } from "react-router-dom";
import { Divider, Typography, Button, Menu, MenuItem } from "@mui/material";
import "./header.css";

const Header = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.target);
  const handleClose = () => setAnchorEl(null);
  return (
    <header>
      <nav className="navMain">
        <h1 style={{ marginLeft: "3rem" }}>Negritude em Debate</h1>
        <Link className="listLinkIten" to="/">
          Projetos
        </Link>
        <Button disableElevation onClick={handleClick}>
          <Typography
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "1.4rem",
              fontWeight: 800,
              textTransform: "none",
            }}
          >
            Album Digital
          </Typography>
        </Button>
        <Menu anchorEl={anchorEl} onClose={handleClose} open={open}>
          <MenuItem onClick={handleClose}>
            <Link className="menuItem" to="/album">
              Coleção
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link className="menuItem" to="/cadastro">
              Cadastrar Imagens
            </Link>
          </MenuItem>
        </Menu>
        <Link className="listLinkIten" to="/equipe">
          Equipe
        </Link>
        <Link className="listLinkIten last" to="/contato">
          Fale com a Gente
        </Link>
      </nav>
      <Divider />
    </header>
  );
};
export default Header;
