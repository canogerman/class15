import { useImageSwitch } from "../store/useImageSwitch"

export const ImageSwitcher = () => {
  const imageURL = useImageSwitch((state) => state.imageURL) //una forma de trabajar
  const { nextImage } = useImageSwitch() // otra forma de trabajar

  return (
    <>
      <button onClick={nextImage} id="image-button">Siguiente imagen</button>
      <picture>
      <img src={imageURL} alt="michi" id="images"/>
      </picture>    
    </>
  )
}
