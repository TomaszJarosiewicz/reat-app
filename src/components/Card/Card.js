import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {

  render(){
    return(
      <section className={styles.component}>
        <h3>{this.props.title}</h3>
      </section>
      )
    }
  }

Card.propTypes = {
  title: PropTypes.string.isRequired
};

export default Card;