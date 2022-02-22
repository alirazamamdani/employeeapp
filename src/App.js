import "./App.css";
import { EmployeeList } from "./components/EmployeeList";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <div>
        <EmployeeList />
      </div>
    </GlobalProvider>
  );
}

export default App;
