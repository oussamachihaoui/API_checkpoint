import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const fetchApiData = async function () {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setgetData(data);
  };
  const [getData, setgetData] = useState([]);
  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div>
      {getData?.map((obj) => (
        <ul>
          <li>{obj.name}</li>
          <li>{obj.email}</li>
          <li>{obj.phone}</li>
        </ul>
      ))}
    </div>
  );
};

export default App;
