import React from "react";
import { Route, Switch } from "react-router";
import Projetos from "./bodyComponents/Projetos";
import Equipe from "./bodyComponents/Equipe";
import Contato from "./bodyComponents/Contato";
import Album from "./bodyComponents/Album";
import AbasCadastro from "./bodyComponents/AbasCadastro";

const Body = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <Projetos />
      </Route>
      <Route path="/equipe">
        <Equipe />
      </Route>
      <Route path="/contato">
        <Contato />
      </Route>
      <Route path="/album">
        <Album />
      </Route>
      <Route path="/cadastro">
        <AbasCadastro />
      </Route>
    </Switch>
  );
};
export default Body;
