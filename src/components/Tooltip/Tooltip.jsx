import { useState } from 'react';
import './Tooltip.css';

export function Tooltip({ content, children }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="tooltip-wrapper">
      {visible && (
        <span className="tooltip-content" role="tooltip">
          {content}
        </span>
      )}
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
      >
        {children}
      </div>
    </div>
  );
}