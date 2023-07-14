import { useContext } from "react";
import ThemeContext from '../context/themeContext'

export const BlackMode = () => {
    const { setTheme } = useContext(ThemeContext)

    const handleChange = (event) => {
        const newTheme = event.target.value       
        setTheme(()=> newTheme)
    }

    return (
    <select name="black-mode" id="black-mode" onChange={handleChange}>
      <option id="op-light" value="white">Light</option>
      <option id="op-dark" value="black">Dark</option>
      <option id="op-orange" value="brown">Brown</option>      
    </select>
  )
}
