import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Application from './Application'; // Importing the Application component

function Home() {
  const [showApplication, setShowApplication] = useState(false); // State to toggle Application component
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the "/application" path
    navigate('/application');
  };

  return (
    <div>
      <h2>Hello from Home</h2>
      {showApplication ? (
        <Application /> // Render the Application component if showApplication is true
      ) : (
        <button onClick={() => setShowApplication(true)}>Show Application</button>
      )}
      <button onClick={handleClick}>Go to Application</button>
    </div>
  );
}

export default Home;
