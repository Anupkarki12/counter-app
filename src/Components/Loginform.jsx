import React, { useState } from "react";

const Loginform = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new user to the list
    setSubmittedData((prev) => [...prev, formData]);

    // Reset form
    setFormData({ name: "", age: "", address: "" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-6 text-cyan-400">User Form</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Age</label>
          <input
            type="number"
            name="age"
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Address</label>
          <input
            type="text"
            name="address"
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>

      {/* Display Submitted Data */}
      {submittedData.length > 0 && (
        <div className="mt-10 w-full max-w-md">
          <h2 className="text-xl font-semibold text-cyan-300 mb-4">
            Submitted Users
          </h2>
          {submittedData.map((user, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 mb-3 rounded-md border border-gray-600"
            >
              <p>
                <span className="font-semibold">Name:</span> {user.name}
              </p>
              <p>
                <span className="font-semibold">Age:</span> {user.age}
              </p>
              <p>
                <span className="font-semibold">Address:</span> {user.address}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Loginform;
