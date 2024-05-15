import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuvid4 } from "uuid";

function App() {
  console.log("Show employee");
  const [role, setRole] = useState("No Role");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Stacy",
      role: "Developer",
      img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "John",
      role: "Farmer",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: 3,
      name: "Kevin",
      role: "Intern",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: 4,
      name: "Louis",
      role: "Developer",
      img: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: 5,
      name: "Keegan",
      role: "Manager",
      img: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: 6,
      name: "Peggy",
      role: "HR",
      img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ]);
  const showEmployees = true;
  return (
    <div className="Appx">
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
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(uuvid4());
              return (
                <Employee
                  key={uuvid4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You can not see the employee.</p>
      )}
    </div>
  );
}

export default App;
