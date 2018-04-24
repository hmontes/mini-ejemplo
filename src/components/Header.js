import React from 'react';
import { connect } from 'react-redux';

import { loginUser, logoutUser } from '../redux/actions';

class Header extends React.Component {
  onClickLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onClickLogin = e => {
    e.preventDefault();
    this.props.loginUser();
  };

  renderOnline = () => {
    return (
      <a href="" className="button is-primary" onClick={this.onClickLogout}>
        Hernán, Cerrar sesión
      </a>
    );
  };

  renderOffline = () => {
    return (
      <div className="field is-grouped">
        <p className="control">
          <a href="" className="button" onClick={this.onClickLogin}>
            Iniciar Sesión
          </a>
        </p>
        <p className="control">
          <a href="" className="button is-primary">
            Crear una cuenta
          </a>
        </p>
      </div>
    );
  };

  render() {
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <a href="" className="navbar-item">
              <h2>React Simple Blog</h2>
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {this.props.isAuth ? this.renderOnline() : this.renderOffline()}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  };
};

// Recordar que Redux se comunica con los componentes
// Por medio de Props

export default connect(mapStateToProps, { loginUser, logoutUser })(Header);
// export default Header;
