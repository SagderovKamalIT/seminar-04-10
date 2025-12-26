import { useRef } from 'react';
import type { ChangeEvent } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchBar = ({ searchQuery, onSearchChange }: SearchBarProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const clearSearchAndFocus = () => {
    onSearchChange('');
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className={styles.searchSection}>
      <div className={styles.searchWrapper}>
        <input
          ref={searchInputRef}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Поиск по делам..."
          className={styles.input}
        />
        {searchQuery && (
          <button 
            onClick={clearSearchAndFocus} 
            className={styles.clearButton}
            title="Очистить поиск и вернуть фокус в поле"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;