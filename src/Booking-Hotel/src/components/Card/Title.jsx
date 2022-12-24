import React from 'react';

export default function Title({ primaryTitle, secondTitle }) {
  return (
    <div className="pb-3">
      <div className="text-2xl pb-1 font-bold">{primaryTitle}</div>
      <div className="text-xl">{secondTitle}</div>
    </div>
  );
}
