import React, { useContext, useState, useEffect, Fragment } from "react";

import { useHistory, Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

export const EditEmployee = (route) => {
  let history = useHistory();
  const { employees, editEmployee } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: null,
    employeenName: "",
    location: "",
    desgination: "",
  });

  const currentUserId = route.match.params.id;
  useEffect(() => {
    const employeeId = currentUserId;
    const selectedUser = employees.find(
      (currentEmployee) => currentEmployee.id === parseInt(employeeId)
    );
    setSelectedUser(selectedUser);
  }, [currentUserId, employees]);

  const handleSubmit = () => {};
  const handleChange = (userkey, newValue) => {
    setSelectedUser({
      ...selectedUser,
      [userkey]: newValue,
    });
  };
  return (
    <Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="w-full mb-5">
            <label
              htmlFor="name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Name of Employee
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              value={selectedUser.employeenName}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter name"
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};
