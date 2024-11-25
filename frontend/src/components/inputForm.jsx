import React, { useState } from "react";
import axios from "axios";

const InputForm = () => {
  const [formData, setFormData] = useState({ name: "", offering: "", need: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users", formData);
      console.log("Response Data:", response.data);
      alert("User added successfully!");
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      alert("Failed to add user!");
    }
  };
  
  

  return (
    <form className="max-w-lg mx-auto mt-10 p-5 border rounded" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Submit Your Details</h2>
      <input
        className="w-full p-2 mb-3 border"
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className="w-full p-2 mb-3 border"
        type="text"
        name="offering"
        placeholder="What you offer"
        value={formData.offering}
        onChange={handleChange}
      />
      <input
        className="w-full p-2 mb-3 border"
        type="text"
        name="need"
        placeholder="What you need"
        value={formData.need}
        onChange={handleChange}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
        Submit
      </button>
    </form>
  );
};

export default InputForm;
