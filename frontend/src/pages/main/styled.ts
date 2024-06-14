import styled from "styled-components";

const Container = styled.div`
  width: calc(100% - (16px * 2));
  height: calc(100vh - (16px * 2));
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
`;

export { Container };
