import {connect} from 'react-redux';
import Column from './Column';

export const getCardsForList = ({columns}, listId) => columns.filter(card => card.listId == listId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForList(state, props.id),
});

export default connect(mapStateToProps)(Column);