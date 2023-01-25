import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = props => {

  const dispatch = useDispatch();
  const listId = props.listId

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId }))
    setTitle('');
    setIcon('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <div><span className={styles.text}>Title: </span><TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} /></div>
      <div><span className={styles.text}>Icon: </span><TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} /></div>
      <Button>add column</Button>
    </form>
  );
};

export default ColumnForm;