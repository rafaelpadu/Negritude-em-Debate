import React from "react";
import EquipeCard from "../layout/EquipeCard";
import style from "./Equipe.module.css";
import Fabio from "../../assets/fabio.png";
import AnaPaula from "../../assets/Ana Paula.jpeg";
import Diego from "../../assets/Cafola.jpg";
import Thamires from "../../assets/Thamires.jpeg";
import Francisco from "../../assets/Francisco.jpeg";
import Alessandro from "../../assets/Alessandro.jpeg";
import Jussara from "../../assets/Jussara.jpeg";
import Roberto from "../../assets/Roberto.jpeg";
import Eliane from "../../assets/Eliane.jpeg";
const Equipe = (props) => {
  return (
    <section className={style.equipeContainer}>
      <h1>Conheça nossa equipe</h1>
      <div className={style.cardsComponent}>
        <EquipeCard
          title="Fábio Luiz Faria da Silva"
          imgSrc={Fabio}
          cardText="Possui graduação em Engenharia da Computação, especialização em Docência e Licenciatura Pedagógica em História. Atualmente é professor efetivo no IFMS na área de Desenvolvimento/Desenvolvimento Web e membro do NEABI. É ativista em movimentos sociais e amante das artes, em especial, a música.
          "
        />
        <EquipeCard
          title="Ana Paula Archanjo Batarce"
          imgSrc={AnaPaula}
          cardText="Ana Paula Archanjo Batarce, mulher, preta, mãe, feminista, sindicalista, pesquisadora, professora e doutora em Geografia. Trabalha na Universidade Federal do Mato Grosso do Sul. Militante da luta antirracista e apaixonada pela diáspora Africana, pela população afro-brasileira e sua diversidade. Coordenadora do projeto de extensão Negritude em Debate."
        />
        <EquipeCard
          title=" Diego Aparecido Cafola"
          imgSrc={Diego}
          cardText="Cafola tem experiência como docente do Ensino Médio em escola rural (CEPA), em projetos para utilização dos recursos naturais como acréscimo na subsistência (UFMS) nas comunidades rurais (ribeirinhos, quilombolas e assentamentos) no Mato Grosso do Sul (MS) e com pesquisa dentro das Unidades de Conservação (UC) pelo Centro de Estudos em Meio Ambiente, Áreas Protegidas e Desenvolvimento Sustentável (CEMAP/UEMS).
Desde 2016 trabalha como pesquisadora cultural, utilizando a perspectiva decolonial no direcionamento da encruzilhada entre gênero, sexo, raça e classe de sujeitos subalternizados. Tem graduação em Turismo e História, especialista em História da América e Mestre em Estudos Culturais."
        />
        <EquipeCard
          title="Thamires"
          imgSrc={Thamires}
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
        />
        <EquipeCard
          title="Francisco Givanildo dos Santos"
          imgSrc={Francisco}
          cardText="Professor da Educação Básica (Estadual e Municipal), há 27 anos. Formado em Licenciatura Plena em História, Especialização em História da América Latina e Mestrado em Educação. Representante sindical de base e atuante na luta da categoria pela valorização profissional e militante dos movimentos sociais, em especial na pauta dos direitos humanos."
        />
        <EquipeCard
          title="Alessandro Riquelme Ribeiro"
          imgSrc={Alessandro}
          cardText="Alessandro Riquelme Ribeiro é oriundo de bairro periférico da capital e trabalha como servidor público federal do Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso do Sul, exercendo a função de Técnico em Audiovisual no Campus Campo Grande. Também é professor de Capoeira desde 2014 e participa do Fórum Estadual para Salvaguarda da Capoeira de Mato Grosso do Sul. Ocupa cadeira de suplente no Conselho Municipal dos Direitos do Negro, ligado ao gabinete da Prefeitura Municipal de Campo Grande. Membro do NEABI IFMS Campus Campo Grande onde realiza atividades de apoio aos eventos e iniciativas diversas. Participa do Grupo de Estudos Tereza de Benguela. Acredita na construção de uma sociedade mais humanitária e justa, que trate de seus cidadãos com equidade e promova oportunidade para todos. É contra o racismo, homofobia, misoginia, machismo e qualquer tipo de  preconceito contra o ser humano. Mote: 'Se nos respeitarmos como pessoas, títulos serão mera formalidade!'"
        />
        <EquipeCard
          title="Jussara Leão Balbueno"
          imgSrc={Jussara}
          cardText="Jussara Leão Balbueno. Graduada em Letras-UFMS/CPAQ, mestranda em Estudos Culturais-PPGCult/UFMS, membro do grupo de pesquisa Lindecult-PPGCult/UFMS, membro Neabi-IFMS/Aquidauana, membro do projeto Negritude em Debate."
        />
        <EquipeCard
          title="Roberto Pereira de Freitas Neto"
          imgSrc={Roberto}
          cardText="Meu nome é Roberto Pereira de Freitas Neto, mas todo mundo me chama só de Neto. Tenho 15 anos e estou cursando Informática lá no IFMS. Sou bolsista do projeto Negritude em Debate, no qual faço parte da equipe de produção audiovisual. Também faço pesquisas sobre os quilombolas aqui do MS e ajudo o projeto no que puder aqui =)."
        />
        <EquipeCard
          title="Eliane Cristina de Sá"
          imgSrc={Eliane}
          cardText="Eliane Cristina de Sá. Acadêmica em Geografia licenciatura-UFMS/CPAQ, ilustradora, membro do projeto Negritude em debate MS."
        />
      </div>
    </section>
  );
};
export default Equipe;
