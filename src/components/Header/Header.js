import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import styles from './Header.scss';

class Header extends React.Component {

  render(){
    const {home, info, faq} = settings.header.links;
    const {icon} = settings.header;
    return(
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={icon} />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>{home}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{info}</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>{faq}</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;