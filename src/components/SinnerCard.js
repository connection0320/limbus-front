import styled from "styled-components";

const Card = styled.div`
  background: #1a1a2e;
  border: 1px solid #e94560;
  border-radius: 8px;
  padding: 20px;
  color: #ffffff;
  width: 200px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    border-color: #ff6b6b;
  }
`;

const Name = styled.h3`
  color: #e94560;
  margin: 0 0 8px 0;
  font-size: 18px;
`;

const Description = styled.p`
  color: #aaaaaa;
  margin: 0;
  font-size: 14px;
`;

function SinnerCard({ sinner }) {
  return (
    <Card>
      <Name>{sinner.name}</Name>
      <Description>{sinner.description}</Description>
    </Card>
  );
}

export default SinnerCard;