import React from "react";
import { Heading } from "./Heading";
import { EmployeeList } from "./EmployeeList";

export const Home = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto flex justify-center flex-col">
        <h3 className="text-center text-2xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">
         Add , Update or Delete Employee Record
        </h3>
        <Heading />
        <EmployeeList />
      </div>
    </React.Fragment>
  );
};
