import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Header from "./Header";
import Post from "./Post";
const Homepage = () => {
  const [ok, setOk] = useState(null);
  useEffect(() => {
    // var decoded = jwt_decode(sessionStorage.getItem("auth-token"));
    // console.log(decoded);
    fetch("http://localhost:5000/post/get", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "auth-token": `${sessionStorage.getItem("auth-token")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <div>
      <Header></Header>

      <div className="card">
        <Post></Post>
      </div>
    </div>
  );
};

export default Homepage;
