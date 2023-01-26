import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite, removeCard } from '../../redux/cardsReducer';

const Card = props => {

  const cardId = props.id;

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleFavorite(cardId))
  }

  const handleRemove = () => {
    dispatch(removeCard(cardId))
  }




  return (
    <li className={styles.card}>{props.title}
      <div>
        <i className={clsx('fa', ((props.isFavorite) ? 'fa-star' : 'fa-star-o'))} onClick={handleClick}></i>
        <i className={clsx('fa fa-trash')} onClick={handleRemove}></i>
      </div>
    </li>
  )
};

export default Card;