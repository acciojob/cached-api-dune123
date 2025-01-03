import React, { useEffect, useMemo, useState } from "react";
import './../styles/App.css';

const url = 'https://jsonplaceholder.typicode.com/posts';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


    const fetchJsonData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((dataOpr) => {
        setIsLoading(false);
        setData(dataOpr); 
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); 
      });
  }

  useEffect(()=>{
    fetchJsonData();
  },[])

  const memoizedData = useMemo(() => data, [data]); 

  return (
    <div>
      {/* Do not remove the main div */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        memoizedData.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default App;