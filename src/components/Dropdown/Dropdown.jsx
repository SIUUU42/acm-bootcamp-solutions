import { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

export function Dropdown({ options, label, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSelect(option) {
    onSelect(option);
    setIsOpen(false);
  }

  return (
    <div className="dropdown" ref={containerRef}>
      <button onClick={() => setIsOpen(prev => !prev)}>
        {label}
      </button>
      {isOpen && (
        <ul role="menu" className="dropdown-menu">
          {options.map(option => (
            <li
              key={option.value}
              role="menuitem"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}