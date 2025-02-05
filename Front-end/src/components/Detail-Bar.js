import React, { useEffect, useState } from 'react';
import '../css/DetailBar.css';

const DetailBar = () => {
  const [userName, setUserName] = useState('Guest');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserName(user?.username || 'Guest');
  }, []);

  return (
    <div className="detail-bar">
      <p className="greeting">Hello, {userName}</p>
     
    </div>
  );
};

export default DetailBar;
