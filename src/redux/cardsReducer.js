import shortid from "shortid";
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchText }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchText));

export const getFavoriteCards = ({ cards }) => cards.filter(card => card.isFavorite)

//actions
const ADD_CARD = 'app/cards/ADD_CARD';
const TOGGLE_CARD_FAVORITE = 'app/cards/TOGGLE_CARD_FAVORITE';
const REMOVE_CARD = 'app/cards/REMOVE_CARD';

//action creators
export const addCard = payload => ({ type: ADD_CARD, payload });
export const toggleFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload });
export const removeCard = payload => ({ type: REMOVE_CARD, payload });

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid(), isFavorite: false }];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card)
    case REMOVE_CARD:
      return statePart.filter(card => card.id !== action.payload);
    default:
      return statePart;
  }
}

export default cardsReducer;