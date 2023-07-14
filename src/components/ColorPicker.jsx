import { useContext } from "react";
import ColorContext from '../context/colorContext'

export const ColorPicker = () => {
    const { setColor } = useContext(ColorContext)

    const handleChange = (event) => {
        const newColor = event.target.value
        setColor(()=> newColor)
    }

    return (
    <select name="color-picker" id="color-picker" onChange={handleChange}>
      <option id="op-red" value="red">Rojo</option>
      <option id="op-green" value="green">Verde</option>
      <option id="op-blue" value="blue">Azul</option>
      <option id="op-yellow" value="yellow">Amarillo</option>
    </select>
  )
}
