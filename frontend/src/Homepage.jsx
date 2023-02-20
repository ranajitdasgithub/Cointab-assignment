import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style/Homepage.css";
import axios from "axios";

const Homepage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loadingDel, setLoadingDel] = useState(false);

  const handleFetch = () => {
    if (loading === false) {
      setLoading(true);
      axios
        .get("https://cointab-assignment-gdpw.onrender.com/userfetch")
        .then((res) => {
          //console.log(respo.data)
          let msg = res.data;
          alert(`${msg}`)
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }else{
      alert("Already fetching data from database")
    }

    
  };
  const handleDelete = () => {
    if (loadingDel === false) {
      setLoadingDel(true);
      axios
        .delete("https://cointab-assignment-gdpw.onrender.com/delete")
        .then((res) => {
          //console.log(respo.data)
          let msg = res.data;
          alert(`${msg}`)
          setLoadingDel(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }else{
      alert("Already deleting data from database")
    }
  };
  const handleUser = () => {
    navigate("/userdetails");
  };
  return (
    <div id="Container">
      <button onClick={handleFetch}>Fetch Users</button>
      <button onClick={handleDelete}>Delete Users</button>
      <button onClick={handleUser}>User Details</button>
    </div>
  );
};

export default Homepage;
