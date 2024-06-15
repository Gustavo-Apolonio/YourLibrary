import React from 'react'
import { BodyContainer, Container, HeaderContainer } from './styled';
import HeaderComponent from '../../components/header';
import NavbarComponent from '../../components/navbar';
import BodyComponent from '../../components/body';

const MainPage: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderComponent page={'main'}></HeaderComponent>
      </HeaderContainer>
      <BodyContainer>
        <NavbarComponent></NavbarComponent>
        <BodyComponent></BodyComponent>
      </BodyContainer>
    </Container>
  )
}

export default MainPage;
