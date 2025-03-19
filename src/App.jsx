import React from "react";
import Navbar from "./components/navbar";
import About from "./page/about";
import Footer from "./components/footer";
import Company from "./page/company";
import Team from "./page/team";
import Ceo from "./page/ceo";
import Domain from "./page/domain";
import MindTeam from "./page/mindTeam";
import Brand from "./page/brand";

const App = () => {
  return (
    <>
      <Navbar />
      <About />
      <Domain />
      <Ceo />
      <Brand />
      <MindTeam />
      <Team />
      <Company />
      <Footer />
    </>
  );
};

export default App;
