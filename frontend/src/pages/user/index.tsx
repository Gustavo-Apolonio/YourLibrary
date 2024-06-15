import React, { useEffect, useState } from 'react'
import { BodyContainer, CardUser, Container, Divider, FormActions, FormContainer, FormInputGroup, FormTitle, HeaderContainer } from './styled';
import HeaderComponent from '../../components/header';
import { useNavigate } from 'react-router-dom';
import { ToastifyUtils } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { User } from '../../store/state';
import { Interfaces } from '../../models';
import { useDeleteUserMutation, usePostUserMutation, usePutUserMutation } from '../../services/apis';

const UserIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill-gear" viewBox="0 0 16 16">
      <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4m9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
    </svg>
  )
}

const MailIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
      <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
      <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
    </svg>
  )
}

const PasswordIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-incognito" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="m4.736 1.968-.892 3.269-.014.058C2.113 5.568 1 6.006 1 6.5 1 7.328 4.134 8 8 8s7-.672 7-1.5c0-.494-1.113-.932-2.83-1.205l-.014-.058-.892-3.27c-.146-.533-.698-.849-1.239-.734C9.411 1.363 8.62 1.5 8 1.5s-1.411-.136-2.025-.267c-.541-.115-1.093.2-1.239.735m.015 3.867a.25.25 0 0 1 .274-.224c.9.092 1.91.143 2.975.143a30 30 0 0 0 2.975-.143.25.25 0 0 1 .05.498c-.918.093-1.944.145-3.025.145s-2.107-.052-3.025-.145a.25.25 0 0 1-.224-.274M3.5 10h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5m-1.5.5q.001-.264.085-.5H2a.5.5 0 0 1 0-1h3.5a1.5 1.5 0 0 1 1.488 1.312 3.5 3.5 0 0 1 2.024 0A1.5 1.5 0 0 1 10.5 9H14a.5.5 0 0 1 0 1h-.085q.084.236.085.5v1a2.5 2.5 0 0 1-5 0v-.14l-.21-.07a2.5 2.5 0 0 0-1.58 0l-.21.07v.14a2.5 2.5 0 0 1-5 0zm8.5-.5h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5" />
    </svg>
  )
}

const AsteriskIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-asterisk" viewBox="0 0 16 16">
      <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1" />
    </svg>
  )
}

interface UserPageProps {
  edit?: boolean
}

const UserPage: React.FC<UserPageProps> = ({ edit }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [postUser, {
    isLoading: loadingPostUser,
    isSuccess: postUserSuccess,
    data: postUserDataResponse,
  }] = usePostUserMutation();

  const [putUser, {
    isLoading: loadingPutUser,
    isSuccess: putUserSuccess,
    data: putUserDataResponse,
  }] = usePutUserMutation();

  const [removeUser, {
    isLoading: loadingDeleteUser,
    isSuccess: deleteUserSuccess,
  }] = useDeleteUserMutation();

  const stateId = useAppSelector((state) => User.Selectors.getId({ user: state.userReducer }));
  const stateUsername = useAppSelector((state) => User.Selectors.getUsername({ user: state.userReducer }));
  const stateEmail = useAppSelector((state) => User.Selectors.getEmail({ user: state.userReducer }));
  const statePassword = useAppSelector((state) => User.Selectors.getPassword({ user: state.userReducer }));

  const [enableEdit, setEnableEdit] = useState<boolean>(false);
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

  const [username, setUsername] = useState<string | undefined>(stateUsername);
  const [email, setEmail] = useState<string | undefined>(stateEmail);
  const [password, setPassword] = useState<string | undefined>(statePassword);
  const [passwordConfirm, setPasswordConfirm] = useState<string | undefined>(undefined);

  const goBack = () => {
    navigate('/');
  }

  const saveUser = (update: boolean = false) => {
    if (!username) return ToastifyUtils.error('Por favor, insira um nome de usuário...');
    if (!email) return ToastifyUtils.error('Por favor, insira um e-mail...');
    if (!password) return ToastifyUtils.error('Por favor, insira uma senha...');

    if (password !== passwordConfirm) return ToastifyUtils.error('As senhas não conferem, por favor insira novamente...');

    const payload: Interfaces.IUser = {
      username,
      email,
      password
    };

    if (update)
      return putUser({ ...payload, id: stateId, });

    return postUser(payload);
  }

  const cancelEdit = () => {
    setUsername(stateUsername);
    setEmail(stateEmail);
    setPassword(statePassword);
    setPasswordConfirm(undefined);
    setEnableEdit(false);
  }

  const confirmDeleteUser = () => {
    if (stateId) return removeUser(stateId);

    ToastifyUtils.error('Não foi possível identificar o usuário...')
  }

  useEffect(() => {
    if (!loadingPostUser && postUserSuccess && postUserDataResponse) {
      dispatch(User.Slices.actions.setUser({ ...postUserDataResponse }));
      navigate('/yourlibrary');
    }
  }, [loadingPostUser, postUserSuccess, postUserDataResponse, dispatch, navigate]);

  useEffect(() => {
    if (!loadingPutUser && putUserSuccess && putUserDataResponse) {
      dispatch(User.Slices.actions.setUser({ ...putUserDataResponse }));
      setEnableEdit(false);
      setPasswordConfirm(undefined);
    }
  }, [loadingPutUser, putUserSuccess, putUserDataResponse, dispatch]);

  useEffect(() => {
    if (!loadingDeleteUser && deleteUserSuccess) {
      dispatch(User.Slices.actions.clearUser());
      navigate('/');
    }
  }, [loadingDeleteUser, deleteUserSuccess, dispatch, navigate]);

  return (
    <Container>
      {edit && (
        <HeaderContainer>
          <HeaderComponent page={'user'}></HeaderComponent>
        </HeaderContainer>
      )}
      <BodyContainer>
        <CardUser>
          <FormTitle>
            <p>
              {edit ? 'Editar seu cadastro' : 'Seja bem-vindo!'}
            </p>
          </FormTitle>
          <FormContainer>
            <FormInputGroup className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <UserIcon />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Nome de Usuário"
                aria-label="Nome de Usuário"
                aria-describedby="basic-addon1"
                value={username}
                disabled={(edit && !enableEdit) || confirmDelete}
                onChange={($event) => setUsername($event.target.value)}
              />
            </FormInputGroup>
            <FormInputGroup className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <MailIcon />
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="E-mail"
                aria-label="E-mail"
                aria-describedby="basic-addon1"
                value={email}
                disabled={(edit && !enableEdit) || confirmDelete}
                onChange={($event) => setEmail($event.target.value)}
              />
            </FormInputGroup>
            <FormInputGroup className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <PasswordIcon />
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Senha"
                aria-label="Senha"
                aria-describedby="basic-addon1"
                value={password}
                disabled={(edit && !enableEdit) || confirmDelete}
                onChange={($event) => setPassword($event.target.value)}
              />
            </FormInputGroup>
            {(!edit || enableEdit) && (
              <FormInputGroup className="input-group">
                <span className="input-group-text" id="basic-addon1">
                  <AsteriskIcon />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirme a senha"
                  aria-label="Confirme a senha"
                  aria-describedby="basic-addon1"
                  value={passwordConfirm}
                  disabled={(edit && !enableEdit) || confirmDelete}
                  onChange={($event) => setPasswordConfirm($event.target.value)}
                />
              </FormInputGroup>
            )}
          </FormContainer>
          {!confirmDelete && (<Divider></Divider>)}
          {(edit && !enableEdit && !confirmDelete) && (
            <FormActions>
              <button className='btn btn-outline-secondary' onClick={() => setEnableEdit(true)}>Editar cadastro</button>
            </FormActions>
          )}
          {(edit && enableEdit && !confirmDelete) && (
            <FormActions>
              <button
                className='edit-btn btn btn-success'
                onClick={() => saveUser(true)}
              >
                Salvar cadastro
              </button>
              <button
                className='edit-btn btn btn-outline-warning'
                onClick={() => cancelEdit()}
              >
                Cancelar
              </button>
              <button
                className='edit-btn btn btn-outline-danger'
                onClick={() => setConfirmDelete(true)}
              >
                Deletar cadastro
              </button>
            </FormActions>
          )}
          {(!edit && !confirmDelete) && (
            <FormActions>
              <button
                className='create-btn btn btn-outline-secondary'
                disabled={loadingPostUser}
                onClick={() => goBack()}
              >
                Voltar
              </button>
              <button
                className='create-btn btn btn-outline-primary'
                disabled={loadingPostUser}
                onClick={() => saveUser()}
              >
                Cadastrar
              </button>
            </FormActions>
          )}
        </CardUser>
        {confirmDelete && (
          <CardUser>
            <FormTitle>
              <p>Tem certeza que deseja deletar seu cadastro?</p>
            </FormTitle>
            <FormActions>
              <button
                className='delete-btn btn btn-outline-success'
                onClick={() => setConfirmDelete(false)}
              >
                Não, não desejo deletar meu cadastro
              </button>
              <button
                className='delete-btn btn btn-danger'
                onClick={() => confirmDeleteUser()}
              >
                Sim, tenho certeza!
              </button>
            </FormActions>
          </CardUser>
        )}
      </BodyContainer>
    </Container>
  )
}

export default UserPage;
