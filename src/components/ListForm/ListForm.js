import styles from './ListForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsReducer';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addList({ title, description }))
  }


  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <div><span className={styles.text}>Title: </span><TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} /></div>
      <div><span className={styles.text}>Description: </span><TextInput type="text" value={description} onChange={e => setDescription(e.target.value)} /></div>
      <Button>add list</Button>
    </form>
  )
}

export default ListForm;

