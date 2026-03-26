import { useEffect, useState } from "react";
import styled from "styled-components";
import SinnerCard from "./components/SinnerCard";

const GlobalStyle = styled.div`
  background: #0f0f1a;
  min-height: 100vh;
  padding: 40px;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  color: #e94560;
  text-align: center;
  font-size: 36px;
  margin-bottom: 8px;
  letter-spacing: 4px;
`;

const Subtitle = styled.p`
  color: #666;
  text-align: center;
  margin-bottom: 40px;
  font-size: 14px;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

function App() {
  const [sinners, setSinners] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/sinners`)
      .then((res) => res.json())
      .then((data) => setSinners(data));
  }, []);

  return (
    <GlobalStyle>
      <Title>LIMBUS COMPANY</Title>
      <Subtitle>죄인 정보 아카이브</Subtitle>
      <CardGrid>
        {sinners.map((sinner) => (
          <SinnerCard key={sinner.id} sinner={sinner} />
        ))}
      </CardGrid>
    </GlobalStyle>
  );
}

export default App;