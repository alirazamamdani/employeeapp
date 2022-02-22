export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case "EDIT_EMPLOYEE":
      const updateEmployee = action.payload;

      const updateEmployees = state.employees.map((employee) => {
        if (employee.id === updateEmployee.id) {
          return updateEmployee;
        }
        return employee;
      });
      return {
        ...state,
        employees: updateEmployees,
      };
    case "REMOVE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };

    default:
      break;
  }
};
