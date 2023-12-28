import React from "react";
import { useState } from "react";
import axios from "axios";

const Hero = () => {
  // const [userData, setUserData] = useState({
  //   address: "0x00000000000000000000000000",
  //   start_date: "00/00/0000",
  //   end_date: "00/00/0000",
  // });

  const [gasSpent, setGasSpent] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let res = await axios.post("https://gas-lookup.onrender.com/lookup", {
        address: event.target.elements.address.value,
        start_date: event.target.elements.startDate.value,
        end_date: event.target.elements.endDate.value,
      });
      console.log(res);
      setGasSpent(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="main-body">
      <h1>Enter account details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="address">ETH address</label>
          <input id="address" type="text" />
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input id="startDate" type="text" />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input id="endDate" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{gasSpent}</p>
    </div>
  );
};

export default Hero;
