import './Button.css';

export const Button = ({
  children,
  variant = 'primary',
  isDisabled = false,
  isLoading = false,
  onClick,
  ...rest
}) => {
  const disabled = isDisabled || isLoading;

  const classNames = [
    'btn',
    `btn-${variant}`,
    isDisabled ? 'btn-disabled' : '',
    isLoading ? 'btn-loading' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = (e) => {
    if (disabled) return;
    onClick?.(e);
  };

  return (
    <button
      className={classNames}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      {isLoading && <span className="spinner" data-testid="spinner" />}
      {children}
    </button>
  );
};
