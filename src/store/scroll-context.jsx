import {createContext} from "react";

export const ScrollContext = createContext({
  currentFrame: "home",
  setCurrentFrame: (frame) => {
    this.currentFrame = frame;
  },
});