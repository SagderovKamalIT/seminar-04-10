import type { Todo } from './types';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onDelete }: TodoItemProps) => {
  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  return (
    <li className={styles.listItem}>
      <span className={styles.todoText}>{todo.text}</span>
      <button
        onClick={handleDeleteClick}
        className={styles.deleteButton}
        title="Удалить дело"
      >
        Удалить
      </button>
    </li>
  );
};

export default TodoItem;