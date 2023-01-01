import React from 'react';
import { AiFillStar } from 'react-icons/ai';

export default function Review({ name, rating, review }) {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        <span className="font-bold">{name}</span>
        <div className="">
          {Array(rating)
            .fill()
            .map(() => (
              <AiFillStar className="text-yellow-400" />
            ))}
        </div>
      </div>
      <p>{review}</p>
    </div>
  );
}
