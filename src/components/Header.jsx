import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Header.scss';
import logoPlatzi from '../assets/images/logo-platzi-video-BW2.png';
import userIcon from '../assets/images/user-icon.png';
import gravatar from '../utils/gravatar';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  return (
    <header className="header">
      <img
        className="header__img"
        src={logoPlatzi}
        alt="Platzi Video"
      />
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt="User Gravatar" />
          ) : (
            <img src={userIcon} alt="User Icon" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href="/">Cuenta</a>
          </li>
          <li>
            <a href="/">Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);
