import { create } from "zustand";

const MICHIS_URL = [
  "https://www.terra.com/u/fotografias/m/2022/8/8/f608x342-1813_31536_0.jpg",
  "https://www.elsoldemexico.com.mx/doble-via/b6w9mw-el-origen-del-nombre-michi.png/ALTERNATES/LANDSCAPE_768/El%20origen%20del%20nombre%20michi.png",
  "https://i0.wp.com/la-lista.com/wp-content/uploads/2022/08/cat-551554_1280.jpg?resize=800%2C835&ssl=1",
];
export const useImageSwitch = create((set, get) => {
  return {
    actualIndex: 0,
    imageURL: MICHIS_URL[0],
    nextImage: () => {
      const { actualIndex } = get();
      const nextIndex = actualIndex + 1;

      if (nextIndex >= MICHIS_URL.length) {
        set({ actualIndex: 0, imageURL: MICHIS_URL[0] });
        return;
      }

      set({ actualIndex: nextIndex, imageURL: MICHIS_URL[nextIndex] });
    },
  };
});
