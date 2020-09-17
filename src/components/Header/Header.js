import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import styles from './Header.scss';

class Header extends React.Component {

  render(){
    return(
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}></Link>
            <Icon name='dog' />
            <NavLink exact to='/' activeClassName='active'>Home</NavLink>
            <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;