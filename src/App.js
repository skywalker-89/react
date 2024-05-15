import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  console.log("Show employee");
  const [role, setRole] = useState("No Role");
  const showEmployees = true;
  return (
    <div className="App">
      {console.log("This is inside the return.")}
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="Caleb" role="Intern" />
          <Employee name="Abby" role={role} />
          <Employee name="John" />
        </>
      ) : (
        <p>You can not see the employee.</p>
      )}
    </div>
  );
}

export default App;
