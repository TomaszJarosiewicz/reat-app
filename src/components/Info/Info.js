import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import {pageInfo} from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import styles from './Info.scss';

class Info extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.node,
  }

  render(){
    const {title, image, description} = pageInfo;
    return(
      <Container className={styles.component}>
        <Hero titleText={title} image={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
      </Container>
    );
  }
}

export default Info;