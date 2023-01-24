import styles from './ErrorRoute.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const ErrorRoute = () => {
  return (
    <div className={styles.favorite}>
      <PageTitle>404 Not found</PageTitle>
    </div>
  )
}

export default ErrorRoute;