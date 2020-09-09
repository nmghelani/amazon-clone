import React, { createContext, useContext, useReducer} from "react";

export const StateContext = createContext();

const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull information from data layer
export const useStateValue = () => useContext(StateContext);

export default StateProvider;