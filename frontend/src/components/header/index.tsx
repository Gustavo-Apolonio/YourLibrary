import React from 'react'
import { ActionContainer, Container, SearchContainer } from './styled';
import { useNavigate } from 'react-router-dom';

const SearchIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
    </svg>
  );
}

const LogoutIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
      <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
    </svg>
  );
}

const UserIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
      <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
    </svg>
  )
}

const LibraryIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmarks" viewBox="0 0 16 16">
      <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" />
      <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" />
    </svg>
  )
}

interface HeaderProps {
  page: 'main' | 'user';
}

const HeaderComponent: React.FC<HeaderProps> = ({ page }) => {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
  }

  const navigateAnother = () => {
    if (page === 'main')
      return navigate('/user/edit');

    return navigate('/yourlibrary');
  }

  return (
    <Container>
      <SearchContainer className="input-group">
        <span className="input-group-text" id="basic-addon1">
          <SearchIcon />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Pesquise na sua biblioteca"
          aria-label="Pesquise na sua biblioteca"
          aria-describedby="basic-addon1"
          disabled={page === 'user'}
        />
      </SearchContainer>

      <ActionContainer>
        {page === 'main' && (
          <button
            className='btn btn-outline-secondary'
            onClick={() => navigateAnother()}
          >
            <UserIcon />
          </button>
        )}
        {page === 'user' && (
          <button
            className='btn btn-outline-secondary'
            onClick={() => navigateAnother()}
          >
            <LibraryIcon />
          </button>
        )}
        <button
          className='btn btn-outline-secondary'
          onClick={() => logout()}
        >
          <LogoutIcon />
        </button>
      </ActionContainer>
    </Container>
  )
}

export default HeaderComponent;
