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

  const handleSubmit = (e) => {
    e.preventDefault();

    editEmployee(selectedUser);
    history.push("/");
  };
  const handleChange = (userkey, newValue) => {
    setSelectedUser({
      ...selectedUser,
      [userkey]: newValue,
    });
  };
  if(!selectedUser || !selectedUser.id) {
    return <div>Invalid Employee ID.</div>
  }
  return (
    <Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="w-full mb-5">
            <label
              htmlFor="employeename"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Name of Employee
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              value={selectedUser.employeenName}
              onChange={(e) => handleChange("employeenName", e.target.value)}
              placeholder="Enter name"
            />
          </div>
          <div className="w-full mb-5">
            <label
              htmlFor="location"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
             Location
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              value={selectedUser.location}
              onChange={(e) => handleChange("location", e.target.value)}
              placeholder="Enter name"
            />
          </div>
          <div className="w-full mb-5">
            <label
              htmlFor="desgination"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Desgination
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              value={selectedUser.desgination}
              onChange={(e) => handleChange("desgination", e.target.value)}
              placeholder="Location"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
              Update Employee
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500"><Link to="/">Cancel</Link></div>
        </form>
      </div>
    </Fragment>
  );
};
