import { createContext, useReducer } from "react";

import { AppReducer } from "./AppReducer";

const initialState = {
  employees: [
    {
      id: 1,
      employeenName: "Sunny",
      location: "Digital Ocean",
      desgination: "Shark",
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addEmployee = (employee) => {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: employee,
    });
  };
  const editEmployee = (employee) => {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employee,
    });
  };
  const deleteEmployee = (id) => {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        addEmployee,
        editEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
