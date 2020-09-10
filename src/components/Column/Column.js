import React from 'react';
import PropTypes from 'prop-types';
// import { settings } from '../../data/dataStore';
import Card from '../Card/Card.js';
// import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon.js';
import styles from './Column.scss';

class Column extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array.isRequired,
    icon: PropTypes.string,
  }

  render(){
    const {title, icon, cards} = this.props;
    return(
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        <div>
          {cards.map(({key, ...columnProps}) => (
            <Card key={key} {...columnProps} />
          ))}
        </div>
        {/* //   <div className={styles.creator}>
        //     <Creator text={settings.columnCreatorText} action={title => this.addCard(title)} />
        //   </div> */}
      </section>
    );
  }
}

Column.propTypes = {
  title: PropTypes.string,
};

export default Column;
