import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Projetos from "./components/pages/Projetos";
import Equipe from "./components/pages/Equipe";
import Contato from "./components/bodyComponents/Contato";
import Album from "./components/pages/Album";
import Container from "./components/layout/Container";
import { UserProvider } from "./components/context/UserContext";
import Register from "./components/pages/auth/Register";
import Login from "./components/pages/auth/Login";
import CadastrarImages from "./components/pages/CadastrarImages";
import Home from "./components/pages/Home";
import "./index.css";
function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <body className="imageContainer">
        <div className="maskContainer">
          <Router>
            <UserProvider>
              <Header />
              <Container>
                <Routes>
                  <Route path="/equipe" element={<Equipe />} />
                  <Route path="/contato" element={<Contato />} />
                  <Route path="/album" element={<Album />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/cadastro/imagem"
                    element={<CadastrarImages />}
                  />
                  <Route path="/projects" element={<Projetos />} />
                  <Route path="/" element={<Home />} />
                </Routes>
              </Container>

              <ToastContainer />
            </UserProvider>
          </Router>
        </div>
        <Footer />
      </body>
    </div>
  );
}

export default App;
