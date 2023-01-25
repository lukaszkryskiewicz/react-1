import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/store';

const Card = props => {

  const cardId = props.id;

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleFavorite(cardId))
  }



  return (
    <li className={styles.card}>{props.title}
      <i className={clsx('fa', ((props.isFavorite) ? 'fa-star' : 'fa-star-o'))} onClick={handleClick}></i>
    </li>
  )
};

export default Card;