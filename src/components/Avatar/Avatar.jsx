import { useState } from 'react';
import './Avatar.css';

export function Avatar({ src, alt, initials, size, ...props }) {
  const [imgFailed, setImgFailed] = useState(false);

  const sizeClass = size ? `avatar-${size}` : '';
  const showImage = src && !imgFailed;

  const classes = [
    'avatar',
    !showImage ? 'avatar-initials' : '',
    sizeClass,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {showImage ? (
        <img src={src} alt={alt} onError={() => setImgFailed(true)} />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}

Avatar.Group = function AvatarGroup({ children, ...props }) {
  return (
    <div className="avatar-group" {...props}>
      {children}
    </div>
  );
};