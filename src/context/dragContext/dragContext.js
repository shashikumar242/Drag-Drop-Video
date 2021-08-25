import React, { createContext, useReducer } from "react";
import { reducers } from "./reducers/reducers";
import { areas } from "../../utils/data";
import videoToPlay from "../../assets/fire-fighter.mp4";

const initialState = {
  areas: areas,
  videoToPlay,
};
export const dragContext = createContext(initialState);
export const ContextProvider = ({ children }) => {
  const [dragState, dispatch] = useReducer(reducers, initialState);

  return (
    <dragContext.Provider
      value={{
        dragState,
        dispatch,
      }}
    >
      {children}
    </dragContext.Provider>
  );
};
