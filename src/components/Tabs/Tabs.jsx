import { useState } from 'react';
import './Tabs.css';

export function Tabs({ tabs, defaultActiveId }) {
  const [activeId, setActiveId] = useState(defaultActiveId || tabs[0].id);

  const activeTab = tabs.find(tab => tab.id === activeId);

  return (
    <div className="tabs">
      <div role="tablist" className="tab-list">
        {tabs.map(tab => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeId === tab.id ? 'true' : 'false'}
            className={activeId === tab.id ? 'tab-active' : ''}
            onClick={() => setActiveId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="tab-panel">
        {activeTab.content}
      </div>
    </div>
  );
}