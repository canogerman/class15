import { useContext } from "react";
import ThemeContext from "../context/themeContext";

export const RandomThemes = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div style={{ backgroundColor: theme }}>
        <section className="inverse">
          <input type="checkbox" style={{ accentColor: theme }} />
          <input type="range" style={{ accentColor: theme }} />
          <input type="radio" style={{ accentColor: theme }} />
          <h3 style={{ color: theme }}>useContext 🤔</h3>
          <p style={{ color: theme }}>
            El hook useContext es una característica de React que te permite
            acceder al contexto creado con el componente Context.Provider. El
            contexto en React es una forma de compartir datos entre componentes
            sin necesidad de pasar explícitamente las propiedades a través de la
            jerarquía de componentes. La idea principal de useContext es
            proporcionar una forma más sencilla de acceder a los datos
            almacenados en el contexto.
          </p>
        </section>
      </div>
    </>
  );
};
