import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/GlobalStyles";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Speciality from "./components/Speciality";
import { light } from "./Plugs/Themes";
import Home3 from "./components/Home3";
import Test from "./components/Test";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navbar />
        {/* <Home /> */}
        <About />
        <Home3/>
        <Speciality />
        <Test/>
      </ThemeProvider>
    </>
  );
}

export default App;
