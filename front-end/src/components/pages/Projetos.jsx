import React from "react";
import styles from "./Projetos.module.css";
import { Paper, CardMedia, Button } from "@mui/material";
import ProjetoCard from "../layout/ProjetoCard";
const Projetos = (props) => {
  return (
    <main className={styles.mainContainer}>
      <h1>Acompanhe algumas ações do Negritude em Debate</h1>
      <div className={styles.paperContainer}>
        <ProjetoCard
          title="Mostra Fotográfica Beleza Negra Resiste 2020"
          videoTitle="Beleza Negra Resiste 2020"
          srcVideo="SBe5tBAVY_Y"
          videoOrButton={true}
          cardText="O projeto tem como objetivo visibilizar corporeidades outras que se
          apresentam fora do padrão estético europeu, como a beleza, a cultura
          e a ancestralidade negra existentes no Mato Grosso do Sul e que
          foram historicamente apagadas. Permitindo com isso que esses
          sujeitos sociais, negras e negros, se auto identifiquem e consigam
          romper com as estruturas colônias e racistas que persistem ainda no
          século XXI."
        />
        <ProjetoCard
          title="Palestras, oficinas e capacitação antirracista"
          videoOrButton={false}
          cardText="Como um dos direcionamentos do projeto é o diálogo com/na comunidade
            escolar, além das atividades externas à escola, como a Mostra
            fotográfica e o documentário, nossa equipe também se disponibiliza
            para dialogar diretamente com alunos e/ou professores e
            coordenadores por meio de palestras, oficinas e capacitações
            voltadas para educação antirracista."
          buttonLink="https://www.youtube.com/watch?v=GrmVEbrWBic&list=PLPmBgyx5tw_0l4OGgO1UKJl00HVLxVtqj&index=4 "
        />
        <ProjetoCard
          title="Semana da Consciência Negra"
          videoOrButton={false}
          cardText="As atividades propostas na Semana da Consciência Negra objetivam
            evidenciar a cultura, a história e sobretudo as tantas lutas do povo
            negro. O evento traz rodas de conversa, palestras, teatro, música,
            dança e principalmente, agregado a tudo isso, informação e
            conscientização."
          buttonLink="https://www.facebook.com/media/set/?vanity=negritudeemdebatems&set=a.398413992012099 "
        />
      </div>
    </main>
  );
};
export default Projetos;
