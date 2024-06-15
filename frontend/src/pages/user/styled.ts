import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div``;

const BodyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: #dee1e6;
`;

const CardUser = styled.div`
  width: 35%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 32px;

  background-color: #f5f5f5;

  border-radius: 4px;
  border-width: 1.5px;
  border-color: #B5B5B5;
  border-style: solid;
`;

const FormTitle = styled.div`
  margin-bottom: 32px;

  & p {
    font-size: 32px;
    font-weight: 400;
  }
`;

const FormContainer = styled.div`
  width: 100%;
`;

const FormInputGroup = styled.div`
  margin-bottom: 32px;

  & input {
    height: 40px;
  }
`;

const Divider = styled.hr`
  width: 90%;
  margin-bottom: 40px;
`;

const FormActions = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & button {
    width: 100%;
  }

  & .edit-btn, & .create-btn {
    width: 48% !important;
  }
`;

export { Container, HeaderContainer, BodyContainer, CardUser, FormTitle, FormContainer, FormInputGroup, Divider, FormActions };
