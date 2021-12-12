import React from "react";
import { Button, Paper } from "@mui/material";
import { CardMedia } from "@mui/material";
import styles from "./ProjetoCard.module.css";
const ProjetoCard = ({
  title,
  videoTitle,
  videoOrButton,
  buttonLink,
  srcVideo,
  cardText,
}) => {
  return (
    <Paper
      className={styles.paperContainer}
      style={{ backgroundColor: "rgba(166, 33, 3, 0.26)" }}
    >
      <h2>{title}</h2>
      {videoOrButton && (
        <CardMedia
          component="iframe"
          title={videoTitle}
          src={`https://www.youtube.com/embed/${srcVideo}`}
        />
      )}
      <p>{cardText}</p>
      {!videoOrButton && (
        <Button
          variant="contained"
          style={{ backgroundColor: "#D98E32" }}
          target="_blank"
          href={buttonLink}
        >
          Mais...
        </Button>
      )}
    </Paper>
  );
};

export default ProjetoCard;
