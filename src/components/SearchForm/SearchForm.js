import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { search } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(search(searchText));
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." value={searchText} onChange={e => setSearchText(e.target.value)} />
      <Button><span className="fa fa-search" /></Button>
    </form>
  );
};

export default SearchForm;