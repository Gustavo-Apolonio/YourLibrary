import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20vw;
  height: 100%;

  padding: 16px;
`;

const ActionButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  
  margin-bottom: 16px;
  
  & button {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding-left: 10%;
    
  }
  
  & svg {
    margin-right: 8px;
  }

  & p {
    font-size: 18px;
    font-weight: 400;
    color: #121212;
  }
`;

export { Container, ActionButtonContainer };
