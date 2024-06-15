import React, { useEffect, useState } from 'react'
import { CardContainer, CardLogin, Container, TitleContainer, Footer, FooterContainer } from './styled';
import { useNavigate } from 'react-router-dom';
import { ToastifyUtils } from '../../utils';
import { useUserLoginMutation } from '../../services/apis';
import { Interfaces } from '../../models';
import { useAppDispatch } from '../../store/hooks';
import { User } from '../../store/state';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [login, {
    isSuccess,
    data,
    isError,
  }] = useUserLoginMutation();

  const [continueButton, setContinueButton] = useState<boolean>(true);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const confirmLogin = () => {
    if (!email) return ToastifyUtils.error('Insira um e-mail, por favor...');
    if (!password) return ToastifyUtils.error('Insira uma senha, por favor...');

    const payload: Interfaces.ILogin = { email, password };

    login(payload);
  }

  const createUser = () => {
    navigate('/user')
  }

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(User.Slices.actions.setUser({ ...data }))
      navigate('/yourlibrary');
    }

    if (isError) {
      ToastifyUtils.error('Não foi possível realizar o login...');
      ToastifyUtils.error('E-mail ou senha inválidos...');
    }
  }, [isError, isSuccess, data, navigate, dispatch]);

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
