import React, { useEffect, useState } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id} className="p-3 border mb-2 rounded">
            <strong>{user.name}</strong> offers <em>{user.offering}</em> and needs <em>{user.need}</em>.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
