import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { logoutRequest } from '../actions/index';
import '../assets/styles/components/Header.scss';
import logoPlatzi from '../assets/images/logo-platzi-video-BW2.png';
import userIcon from '../assets/images/user-icon.png';
import gravatar from '../utils/gravatar';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <img
        className="header__img"
        src={logoPlatzi}
        alt="Platzi Video"
      />
      {!isLogin && !isRegister && (
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
            {hasUser ? (
              <li>
                <a href="/">{user.name}</a>
              </li>
            ) : null}
            {hasUser ? (
              <li>
                <Link to="/login" onClick={handleLogout}>
                  Cerrar Sesión
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Iniciar Sesion</Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
