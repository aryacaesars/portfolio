import React from 'react';

export const Textarea = ({ className, ...props }) => {
  return (
    <textarea
      className={`px-4 py-2 border rounded ${className}`}
      {...props}
    />
  );
};