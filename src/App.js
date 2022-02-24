import { Route, Switch } from "react-router-dom";
// import { AddEmployee } from "./components/AddEmployee";
import { Home } from "./components/Home";
import { EmployeeList } from "./components/EmployeeList";
import { EditEmployee } from "./components/EditEmployee";
import { AddEmployee } from "./components/AddEmployee";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <div className="container p-2">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/addemployee" component={AddEmployee} exact />
          <Route path="/edit/:id" component={EditEmployee} exact />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;
