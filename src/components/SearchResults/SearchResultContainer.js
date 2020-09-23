import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {searchCards} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: searchCards(state, props.match.params.id),
});

export default connect(mapStateToProps)(SearchResult);
