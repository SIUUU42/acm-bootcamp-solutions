
import './Input.css';

export function Input({placeholder, defaultValue, onChange, disabled, error, leftIcon, rightIcon}) {

  return (
    <div> 
    {leftIcon}
    <input
      role= "textbox"
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={disabled ? undefined : onChange}
      disabled={disabled}
      className={`${error ? 'input-error' : ''} ${disabled ? 'input-disabled' : ''}`.trim()}
      />
      {rightIcon}
      {error && <span role="alert">{error}</span>}
      </div>
  );
};

