import React from "react";
import { CardMedia } from "@mui/material";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <main className={styles.homeContainer}>
      <h1>Negritude em Debate</h1>
      <div className={styles.textVideo}>
        <div>
          <CardMedia
            component="iframe"
            title="Negritude em Debate"
            src="https://www.youtube.com/embed/B16z2gs6Fn8 "
          />
        </div>
        <div className={styles.textVideoParagraphs}>
          <p>
            O projeto “Negritude em Debate MS” (Cpaq/UFMS – Neabi/IFMS/CG) tem
            objetivo contribuir para reflexão, para valorização da cultura negra
            no Mato Grosso do Sul, assim como, contribuir para o desenvolvimento
            da temática "História da África e Cultura Afro-brasileira" nas
            escolas da rede básica de ensino, nos Institutos Federais do Mato
            Grosso do Sul (IFMS) e na Universidade Federal do Mato Grosso do Sul
            (UFMS).
          </p>
          <p>
            Para isso, elaborar material audiovisual para ser trabalhado nas
            instituições públicas (rede básica de ensino, IFMS e UFMS); Dialogar
            com os professores por meio de oficinas/cursos/palestras e outras
            atividades que estejam ligadas ao tema da raça e do gênero. Dentre
            elas, a mostra fotográfica intitulada “Beleza Negra Resiste”,
            oficina de pintura orgânica e Oficina pedagógica. O foco do material
            audiovisual é de trabalhar com as Comunidades Quilombolas de Mato
            Grosso do Sul, entre elas, Comunidade Negra Rural Quilombola da
            Furna dos Baianos (Aquidauana/MS), a Comunidade Remanescente de
            Quilombos Tia Eva (CG) e a Furnas do Dionísio (CG).
          </p>
        </div>
      </div>
    </main>
  );
};
export default Home;
