import styled from "styled-components";
import { Button } from "./Button";

const StartGame = ({ toggle }) => {
  return (
    <div>
      <Container>
        <div>
          <img src="/images/dice_home.png" alt="dice image" />
        </div>
        <div className="content">
          <h1>Dice Game</h1>
          <Button onClick={toggle}>Start Game</Button>
        </div>
      </Container>
    </div>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
