import React from 'react';

class Header extends React.Component {
  renderOnline = () => {
    return (
      <p>Bienvenido</p>
    )
  }

  renderOffline = () => {
    return (
      <div className="field is-grouped">
        <p className="control">
          <a href="" className="button">
            Iniciar Sesión
            </a>
        </p>
        <p className="control">
          <a href="" className="button is-primary">
            Crear una cuenta
          </a>
        </p>
      </div>
    )
  }

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
    )
  }
}

// Simular Redux
// Cambiar valor a True o False
Header.defaultProps = {
  isAuth: false
}

// Recordar que Redux se comunica con los componentes
// Por medio de Props

export default Header;