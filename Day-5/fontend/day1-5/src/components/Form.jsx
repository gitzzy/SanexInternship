import React, { useState } from "react";

export default function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Data : ", { fname, lname, uname, pass, mail });

    try {

        const data = { fname, lname, uname, pass, mail };

      const response = await fetch("https://backend-ywb9.onrender.com/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Server response:", result);
      alert("Data sent successfully!");
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Failed to send data.");
    }
  };

  return (
    <div className="border p-4 flex items-center justify-center flex-col gap-4 bg-black text-white">
      <div className="flex gap-4 items-center">
        <div className="text-[18px] font-bold">First Name : </div>
        <input
          name="fname"
          type="text"
          placeholder="Enter your First name"
          className="border border-blue-500 rounded-xl p-2"
          onChange={(e) => setFname(e.target.value)}
        ></input>
      </div>
      <div className="flex gap-4 items-center">
        <div className="text-[18px] font-bold">Last Name : </div>
        <input
          name="lname"
          type="text"
          placeholder="Enter your First name"
          className="border border-blue-500 rounded-xl p-2"
          onChange={(e) => setLname(e.target.value)}
        ></input>
      </div>
      <div className="flex gap-4 items-center">
        <div className="text-[18px] font-bold">Username : </div>
        <input
          name="pname"
          type="text"
          placeholder="Enter your username"
          className="border border-blue-500 rounded-xl p-2"
          onChange={(e) => setUname(e.target.value)}
        ></input>
      </div>
      <div className="flex gap-4 items-center">
        <div className="text-[18px] font-bold">Password : </div>
        <input
          name="pass"
          type="password"
          placeholder="Enter your password"
          className="border border-blue-500 rounded-xl p-2"
          onChange={(e) => setPass(e.target.value)}
        ></input>
      </div>
      <div className="flex gap-4 items-center">
        <div className="text-[18px] font-bold px-2">Mail ID : </div>
        <input
          name="mail"
          type="text"
          placeholder="Enter your username"
          className="border border-blue-500 rounded-xl p-2"
          onChange={(e) => setMail(e.target.value)}
        ></input>
      </div>
      <div className="flex items-center justify-end mt-4">
        <button
          className="bg-green-500 p-2 rounded-lg"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
