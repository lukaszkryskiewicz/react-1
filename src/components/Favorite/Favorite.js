import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import { Navigate } from 'react-router-dom';

const Favorite = () => {

  const cards = useSelector(state => getFavoriteCards(state));

  if (!cards.length) return <Navigate to="/" />


  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        {cards.map(card => <Card key={card.Id} id={card.id} title={card.title} isFavorite={card.isFavorite} />)}
      </article>
    </div>
  )
}

export default Favorite;