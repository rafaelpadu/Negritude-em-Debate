import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import SwipeableViews from "react-swipeable-views";

import PropTypes from "prop-types";

import Cadastro from "./Cadastro";
import CadastroImg from "./CadastroImagem";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
export default function AbasCadastro(props) {
  const [value, setValue] = useState(0);
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2rem",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          centered
          indicatorColor="secondary"
          aria-label="full width tabs example"
          variant="fullWidth"
        >
          <Tab label="Informações Cadastrais" />
          <Tab label="Carregar Imagem" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={1}>
        <Cadastro setChangeTab={setValue} />
      </TabPanel>
      <TabPanel value={value} index={0}>
        <CadastroImg setChangeTab={setValue} />
      </TabPanel>
    </Box>
  );
}
