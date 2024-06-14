import React from 'react'
import { Container, NoBooksContainer } from './styled';

const NoBooks: React.FC = () => {
  return (
    <NoBooksContainer>
      <p>Você ainda não tem livros</p>
      <p>Estarei esperando pela sua próxima leitura, ou navegue entre nossa biblioteca</p>
    </NoBooksContainer>
  )
}

const BodyComponent: React.FC = () => {
  return (
    <Container>
      <NoBooks></NoBooks>
    </Container>
  )
}

export default BodyComponent;
