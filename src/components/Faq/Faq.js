import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import {pageFaq} from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import styles from './Faq.scss';

class Faq extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.node,
  }

  render(){
    const {title, image, description} = pageFaq;
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

export default Faq;