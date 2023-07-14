import { useContext } from "react";
import ColorContext from "../context/colorContext";

export const RandomImputs = () => {
  const { color } = useContext(ColorContext);
  return (
    <>
      <input type="checkbox" style={{ accentColor: color }} />
      <input type="range" style={{ accentColor: color }} />
      <input type="radio" style={{ accentColor: color }} />
    </>
  );
};
