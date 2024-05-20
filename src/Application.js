import React, { useState, useEffect } from 'react';

function Application() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Initial data fetch
    fetchData();

    // Fetch data every 5 seconds
    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId); // Cleanup function to clear the interval when the component unmounts
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>Data fetched: {data ? data.message : 'Loading...'}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Application;
