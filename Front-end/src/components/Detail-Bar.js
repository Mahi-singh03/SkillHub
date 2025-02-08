import React, { useEffect, useState } from "react";
import "../css/DetailBar.css";

const DetailBar = () => {
  const [userName, setUserName] = useState("Guest");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedData = JSON.parse(storedUser);
        if (parsedData.user && parsedData.user.fullName) {
          setUserName(parsedData.user.fullName);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  return (
    <div className="detail-bar">
      <p className="greeting">Hello, {userName}</p>
    </div>
  );
};

export default DetailBar;
