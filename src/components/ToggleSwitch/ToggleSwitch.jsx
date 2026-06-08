import './ToggleSwitch.css';

export function ToggleSwitch({ id, label, defaultChecked, checked, onChange, disabled, ...props }) {
  return (
    <div className="toggle-switch" {...props}>
      <input
        type="checkbox"
        id={id}
        className="sr-only"
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}