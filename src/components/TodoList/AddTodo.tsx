import { useState } from 'react';
import type { KeyboardEvent, ChangeEvent } from 'react';
import styles from './AddTodo.module.css';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleAdd = () => {
    if (newTodoText.trim()) {
      onAdd(newTodoText);
      setNewTodoText('');
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAdd();
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(event.target.value);
  };

  return (
    <div className={styles.addSection}>
      <input
        type="text"
        value={newTodoText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Добавить новое дело..."
        className={styles.input}
      />
      <button 
        onClick={handleAdd} 
        className={styles.addButton}
        disabled={!newTodoText.trim()}
      >
        Добавить
      </button>
    </div>
  );
};

export default AddTodo;