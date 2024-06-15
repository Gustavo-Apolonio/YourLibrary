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

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 40px;
    font-weight: 800;
  }
`;

const CardContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  padding: 40px;

  border-radius: 4px;
  border-width: 1.5px;
  border-color: #B5B5B5;
  border-style: solid;

  width: 550px;
  margin-bottom: 24px;

  & .card {
    &-title {
      font-size: 32px;
      font-weight: 800;
      margin-bottom: 24px;
    }
    
    &-subtitle {
      font-size: 20px;
      font-weight: 800;
      margin-bottom: 24px;
    }
    
    &-description {
      font-size: 16px;
      font-weight: 800;
      color: #0d6efd;
      margin-bottom: 24px;
    }
  }
  
  & button {
    color: #fff;
    border-radius: 4px;
    width: 100%;
    padding: 16px;
    margin-bottom: 24px;
  }

  & .form-floating {
    width: 100%;
  }
  
  & input {
    width: 100%;
  }
`;

const FooterContainer = styled.div``;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28%;

  & p {
    font-size: 18px;
    font-weight: 700;
    color: #666;
    margin-bottom: 8px;
  }

  & button {
    width: 100%;
  }
`;

export { Container, TitleContainer, CardContainer, CardLogin, Footer, FooterContainer };
