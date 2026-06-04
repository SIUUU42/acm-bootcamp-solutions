import './Badge.css';

export function Badge({ children, status, isPill, ...props }) {
  const classes = [
    'badge',
    status ? `badge-${status}` : '',
    isPill ? 'badge-pill' : '',
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}