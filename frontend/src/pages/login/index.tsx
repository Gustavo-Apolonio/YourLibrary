import React, { useState } from 'react'
import { CardContainer, CardLogin, Container, TitleContainer, Footer, FooterContainer } from './styled';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [continueButton, setContinueButton] = useState<boolean>(true);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const confirmLogin = () => {
    navigate('/yourlibrary');
  }

  const createUser = () => {
    navigate('/user')
  }

  return (
    <Container>
      <TitleContainer>
        <p>Your Library</p>
      </TitleContainer>
      <CardContainer>
        <CardLogin>
          <p className='card-title'>Fazer login</p>
          <p className='card-subtitle'>E-mail ou nome de usuário</p>
          {continueButton ? (
            <>
              <button
                className='btn btn-primary'
                onClick={() => setContinueButton(false)}
              >
                Continuar
              </button>
              <p className='card-description'>
                Ao continuar, você concorda com as Condições de Uso.
                Por favor verifique a Notificação de Privacidade e
                Notificação de Cookies.
              </p>
            </>
          ) : (
            <>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="nome@exemplo.com"
                  onChange={($event) => setEmail($event.target.value)}
                />
                <label htmlFor="floatingInput">E-mail</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Senha"
                  onChange={($event) => setPassword($event.target.value)}
                />
                <label htmlFor="floatingPassword">Senha</label>
              </div>
              <div className="form-floating">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => confirmLogin()}
                >
                  Confirmar identidade
                </button>
              </div>
            </>
          )
          }
        </CardLogin>
        <Footer>
          <p>Novo Librarier?</p>
          <button
            className='btn btn-secondary'
            onClick={() => createUser()}
          >
            Criar sua conta
          </button>
        </Footer>
      </CardContainer>
      <FooterContainer></FooterContainer>
    </Container>
  )
}

export default LoginPage;
