import { useState } from 'react';
import './Accordion.css';

export function Accordion({ items, allowMultiple = false, ...props }) {
  const [openIds, setOpenIds] = useState([]);

  function toggle(id) {
    if (allowMultiple) {
      setOpenIds(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds(prev => prev.includes(id) ? [] : [id]);
    }
  }

  return (
    <div className="accordion" {...props}>
      {items.map(item => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="accordion-item">
            <button
              aria-expanded={isOpen ? 'true' : 'false'}
              onClick={() => toggle(item.id)}
            >
              {item.title}
            </button>
            {isOpen && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}