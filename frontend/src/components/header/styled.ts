import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 4vh;

  padding: 4px;

  border-bottom: 1.5px solid #B5B5B5;
`;

const SearchContainer = styled.div`
  width: 15%;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;

  & button:not(button:nth-child(1)) {
    margin-left: 8px;
  }
`;

export { Container, SearchContainer, ActionContainer };
