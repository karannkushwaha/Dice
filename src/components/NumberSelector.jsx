import styled from "styled-components";

function NumberSelector({ selectedNum, setSelectedNum, error, setError }) {
  const arrayNum = [1, 2, 3, 4, 5, 6];

  const numberSelector = (num) => {
    setSelectedNum(num);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      {error && <p className="errorMsg">{error}</p>}
      <div className="flex">
        {arrayNum.map((num, i) => {
          return (
            <Box
              isSelected={selectedNum === num}
              key={i}
              onClick={() => numberSelector(num)}
            >
              {num}
            </Box>
          );
        })}
      </div>
      <p>Selected Number: {selectedNum}</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .errorMsg {
    color: red;
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid #000;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "#000" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};
`;
