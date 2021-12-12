import React from "react";
import style from "./EquipeCard.module.css";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
const EquipeCard = ({ title, imgSrc, cardText }) => {
  return (
    <Card elevation={8} className={style.cardPaper}>
      <CardActionArea>
        <CardMedia
          className={style.cardMedia}
          component="img"
          image={imgSrc}
          alt={`Imagem de ${title}`}
        />
        <CardContent>
          <h2> {title}</h2>

          <p>{cardText}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EquipeCard;
