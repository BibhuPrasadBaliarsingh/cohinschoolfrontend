import React from 'react';

export default function PageWrapper({ children }) {
  return (
    <div className="w-full">
      {children}
    </div>
  );
}
