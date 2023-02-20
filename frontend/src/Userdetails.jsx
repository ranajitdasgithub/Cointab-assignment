import React, { useEffect, useState } from "react";
import "./Style/User.css";
import axios from "axios";

const Userdetails = () => {
  let [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [Gender, setGender] = useState("");

  useEffect(() => {
    axios
      .get("https://cointab-assignment-gdpw.onrender.com/userdata")
      .then((res) => {
        setData(res.data);
        setFilterData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    if (Gender!="") {
      let newdata = data.filter((ele) => {
        return ele.gender === Gender;
      });
      setFilterData(newdata);
    } else {
      setFilterData(data);
    }
  }, [Gender]);
  return (
    <div id="Container">
      <div id="filter">
        <div>
          <label for="gender">Gender: </label>
          <select
            onChange={(e) => setGender(e.target.value)}
            name="gender"
            id="gender"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>City</th>
          <th>State</th>
          <th>Country</th>
          <th>Email</th>
          <th>Postcode</th>
          <th>Pin</th>
          <th>Phone</th>
        </tr>
        {filterData.length > 0 &&
          filterData.map((ele) => {
            let {
              Name,
              gender,
              Age,
              City,
              State,
              Country,
              email,
              phone,
              Postcode,
              Pin,
            } = ele;
            return (
              <tr key={ele.id}>
                <td>{Name}</td>
                <td>{gender}</td>
                <td>{Age}</td>
                <td>{City}</td>
                <td>{State}</td>
                <td>{Country}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{Postcode}</td>
                <td>{Pin}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default Userdetails;
