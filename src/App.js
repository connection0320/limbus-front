import { useEffect, useState } from "react";

function App() {
  const [sinners, setSinners] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/sinners")
      .then((res) => res.json())
      .then((data) => setSinners(data));
  }, []);

  return (
    <div>
      <h1>림버스 컴퍼니</h1>
      <ul>
        {sinners.map((sinner) => (
          <li key={sinner.id}>
            {sinner.name} - {sinner.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;