import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 4px;

  background-color: #dee1e6;
`;

const NoBooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 12px;
    font-weight: 400;
    color: #121212;

    &:nth-child(1) {
      margin-bottom: 20px;
    }
  }
`;

export { Container, NoBooksContainer };
