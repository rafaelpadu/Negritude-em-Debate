import React from "react";
import { DialogTitle, DialogContent, Typography } from "@mui/material";
const Regras = () => (
  <div>
    <DialogTitle>Regras do Projeto</DialogTitle>
    <DialogContent dividers>
      <ul>
        <li>
          <Typography gutterBottom>
            Cada pessoa poderá participar com uma fotografia
          </Typography>
        </li>
        <li>
          <Typography gutterBottom>
            A fotografia deve ser no formato digital JPG/JPEG
          </Typography>
        </li>
        <li>
          <Typography gutterBottom>
            A fotografia poderá ser colorida ou preta e branco
          </Typography>
        </li>
        <li>
          <Typography gutterBottom>
            A técnica para criação é livre mas precisa seguir o tema{" "}
            <b>Beleza Negra Resiste</b>
          </Typography>
        </li>
        <li>
          <Typography gutterBottom>
            Cada pessoa só poderá ser premiada uma única vez
          </Typography>
        </li>
        <li>
          <Typography gutterBottom>
            As fotografias serão selecionadas por um júri composto de pessoas
            pretas, que julgará a beleza negra a partir dos elementos que
            permitirão evidenciar as conexões com as raízes negras, com a
            ancestralidade negra, com a diáspora negra, com as pequenas Áfricas
            que existem em cada pessoa negra que vive em Mato Grosso do Sul.
          </Typography>
        </li>
        <li>
          <Typography gutterBottom>
            Toda fotografia deve ser encaminhada com a autorização de uso de
            imagem. A UFMS e o IFMS reservam para si, desde já, o direito
            incontestável de reproduzir as fotografias inscritas em seu material
            institucional a qualquer momento e por tempo indeterminado, dando os
            devidos créditos ao fotógrafo.
          </Typography>
        </li>
      </ul>
    </DialogContent>
  </div>
);
export default Regras;
