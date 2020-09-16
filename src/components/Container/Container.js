import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.scss';

const Container = props => (
  console.log('props.children', props.children),
  <div className={styles.component}>
    {props.children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;