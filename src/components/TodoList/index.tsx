import { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import SearchBar from './SearchBar';
import type { Todo } from './types';
import styles from './TodoList.module.css';

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Купить продукты' },
    { id: 2, text: 'Сделать домашнее задание' },
    { id: 3, text: 'Позвонить маме' },
    { id: 4, text: 'Записаться к врачу' },
    { id: 5, text: 'Почитать книгу' },
    { id: 6, text: 'Подготовить отчет' },
    { id: 7, text: 'Сходить в спортзал' },
    { id: 8, text: 'Изучить React хуки' }
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const addTodo = (text: string) => {
    if (text.trim() === '') return;
    
    const newTodo: Todo = {
      id: Date.now(),
      text: text.trim()
    };
    
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Список дел</h1>
      
      <AddTodo onAdd={addTodo} />
      
      <SearchBar 
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      
      <div className={styles.todoList}>
        {filteredTodos.length === 0 ? (
          <p className={styles.emptyMessage}>
            {searchQuery ? 'Дела по запросу не найдены' : 'Список дел пуст'}
          </p>
        ) : (
          <ul className={styles.list}>
            {filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
        )}
        
        {searchQuery && filteredTodos.length > 0 && (
          <div className={styles.searchInfo}>
            Найдено дел: {filteredTodos.length} из {todos.length}
          </div>
        )}
      </div>
      
      
    </div>
  );
};

export default TodoList;