import { connect } from 'react-redux';
// import action creators -- can bind them here and pass down as props through mapDispatchToProps
import { selectCard, selectPreviousCard, selectNextCard } from '../actions/actions_practicePage';
// import the presentational component to connect it
import PracticePage from '../components/PracticePage';

const mapStateToProps = (state) => {
  console.log('state tree', state);
  return {
    currentCard: state.practicePage.currentCard,
    currentDeck: state.practicePage.currentDeck
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCardSelect: (cardPos) => {
      dispatch(selectCard(cardPos));
    },
    onPreviousCardSelect: () => {
      console.log('selecting previous card');
      dispatch(selectPreviousCard());
    },
    onNextCardSelect: () => {
      console.log('selecting next card');
      dispatch(selectNextCard());
    }
  };
};

const VisiblePracticePage = connect(
  mapStateToProps, 
  mapDispatchToProps
)(PracticePage);

export default VisiblePracticePage;