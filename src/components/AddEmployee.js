import React, { Fragment, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

export const AddEmployee = () => {
  let history = useHistory();
  const { addEmployee, employees } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [desgination, setDesgination] = useState("");
  const [location, setLocation] = useState("");
  console.log(name, desgination, location);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: name.length + 1,
      employeenName: name,
      desgination: desgination,
      location: location,
    };
    console.log(newEmployee);
    addEmployee(newEmployee);
    history.push("/");
    setDesgination("");
    setName("");
    setLocation("");
  };
  return (
    <Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of employee
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
              required
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="Enter location"
              required
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="designation"
            >
              Designation
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={desgination}
              onChange={(e) => setDesgination(e.target.value)}
              type="text"
              placeholder="Enter designation"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Employee
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
