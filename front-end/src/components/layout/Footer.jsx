import React from "react";
import Ifms from "../../assets/logo ufms fundo preto.jpeg";
import Ufms from "../../assets/ufms_logo_negativo_pb_rgb.png";
import Neabi from "../../assets/neabi.png";
import { Facebook, Instagram, YouTube, Email } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import style from "./Footer.module.css";
const Footer = (props) => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.imageContainer}>
        <img src={Ifms} />
        <img src={Ufms} />
        <img src={Neabi} />
      </div>
      <div>
        <IconButton
          style={{ backgroundColor: "#ffffff0d", margin: "0 1em" }}
          fontSize="large"
          target="_blank"
          href="https://www.facebook.com/negritudeemdebatems"
        >
          <Facebook style={{ color: "white" }} fontSize="large" />
        </IconButton>
        <IconButton
          href="https://youtube.com/channel/UCB0tg0Uz9xwyYEI7yElHwOw "
          target="_blank"
          style={{ backgroundColor: "#ffffff0d", margin: "0 1em" }}
          fontSize="large"
        >
          <YouTube style={{ color: "white" }} fontSize="large" />
        </IconButton>
        <IconButton
          target="_blank"
          style={{ backgroundColor: "#ffffff0d", margin: "0 1em" }}
          fontSize="large"
          href="https://www.instagram.com/negritudeemdebatems/"
        >
          <Instagram style={{ color: "white" }} fontSize="large" />
        </IconButton>
        <IconButton
          target="_blank"
          style={{ backgroundColor: "#ffffff0d", margin: "0 1em" }}
          fontSize="large"
        >
          <Email style={{ color: "white" }} fontSize="large" />
        </IconButton>
      </div>
    </footer>
  );
};
export default Footer;
