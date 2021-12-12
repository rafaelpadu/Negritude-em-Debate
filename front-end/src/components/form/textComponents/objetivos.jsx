import React from "react";
import { DialogTitle, DialogContent, Typography } from "@mui/material";
const Objetivos = () => (
  <div>
    <DialogTitle>Objetivos do Projeto</DialogTitle>
    <DialogContent dividers>
      <Typography gutterBottom>
        O projeto tem como objetivo visibilizar a beleza a cultura e a
        ancestralidade negra existentes no Mato Grosso do Sul, historicamente
        apagados e fora dos padrões estéticos eurocêntricos.
      </Typography>
      <Typography gutterBottom>
        Oportunizará assim, as discussões étnico-raciais capazes de qualificar e
        encorajar as professoras e professores a trabalharem com a problemática
        da população negra, em sala de aula, na tentativa de diminuir o arranjo
        da desigualdade existente no país.
      </Typography>
      <Typography gutterBottom>
        Para isso, a partir das fotografias selecionadas para a mostra
        fotográfica, irá se elaborar um álbum de fotografias que ao ser
        finalizado, será direcionado para escolas públicas, com a intenção de
        contribuir com o debate da Lei 10.639/03 que determina o ensino de
        História e Cultura Afro-brasileira nas escolas.
      </Typography>
    </DialogContent>
  </div>
);
export default Objetivos;
