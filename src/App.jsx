import { useState } from "react";
import ColorContext from "./context/colorContext";
import ThemeContext from "./context/themeContext";
import { ColorPicker } from "./components/ColorPicker";
import { RandomImputs } from "./components/RandomImputs";
import "./App.css";
import { BlackMode } from "./components/BlackMode";
import { RandomThemes } from "./components/RandomThemes";
import { ImageSwitcher } from "./components/ImageSwitcher";
import { ShowPosts } from "./components/showPosts";

function App() {
  const [color, setColor] = useState("red");
  const [theme, setTheme] = useState("light");
  const [showPosts, setShowPost] = useState(false)

  const handleShowPosts = () => {
    setShowPost(() => true)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <ColorContext.Provider
        value={{
          color,
          setColor,
        }}
      >
        <h1>Class 15 😺</h1>
        <ColorPicker />
        <RandomImputs />
        <h2>Dark-Mode con useContext</h2>
        <BlackMode />
        <RandomThemes />
        <h2>Componente ImageSwitcher con Zustand</h2>
        <ImageSwitcher />
        <h2>Componente Post con Axios</h2>
        <button onClick={handleShowPosts}>Show Posts!!</button>
        {showPosts ? <ShowPosts /> : null}
      </ColorContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
