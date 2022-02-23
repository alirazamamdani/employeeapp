
import { AddEmployee } from "./components/AddEmployee";
import { EmployeeList } from "./components/EmployeeList";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <div>
        <AddEmployee />
        <EmployeeList />
      </div>
    </GlobalProvider>
  );
}

export default App;
