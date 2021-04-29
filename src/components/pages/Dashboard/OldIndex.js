import React, { useEffect, useState } from "react";
import Card from "../../molecules/CardItem";
import NavBar from "../../molecules/NavigationBar";
import Axios from "axios";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //FETCH
    // fetch("https://reqres.in/api/users")
    //   .then((res) => res.json())
    //   .then((json) => setUsers(json.data));

    //AXIOS
    Axios.get("http://localhost:3005/users").then((res) => {
      setUsers(res.data);
    });
  }, [users]);

  return (
    <div className="container-sm mb-4">
      <NavBar />
      <h3>Dashboard</h3>
      <hr />
      <div className="row align-items-start">
        {users.map((item) => (
          <Card
            fullName={`${item.first_name} ${item.last_name}`}
            email={item.email}
            avatar={item.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
