import React, {Fragment ,useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const EmployeeList = () => {
  const { employees } = useContext(GlobalContext);
  return (
    <Fragment>
      {employees.length > 0 ? (
        <Fragment>
          {employees.map((employee) => {
            <div
              className="flex items-center bg-gray-100 mb-10 shadow"
              key={employee.id}
            >
              <div className="flex-auto text-left px-4 py-2 m-2">
                <p className="text-gray-900 leading-none">
                  {employee.employeenName}
                </p>
                <p className="text-gray-600 ">
                  {employee.desgination}
                </p>
                <p className="text-gray-600 ">
                  {employee.desgination}
                </p>
              </div>
            </div>;
          })}
        </Fragment>
      ) : (
        0
      )}
    </Fragment>
  );
};
