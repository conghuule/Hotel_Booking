import React from 'react';
import FilterField from './FilterField';

const ROOM_TYPES = {
  title: 'Room Type',
  data: ['Hotel', 'Homestay', 'Villa'],
};
const PRICES = {
  title: 'Price',
  data: [
    { minimum: 0, maximum: 1000000 },
    { minimum: 1000000, maximum: 2000000 },
    { minimum: 2000000, maximum: 3000000 },
    { minimum: 3000000, maximum: 4000000 },
    { minimum: 4000000, maximum: 5000000 },
    { minimum: 5000000, maximum: undefined },
  ],
};
const RATINGS = { title: 'Rating', data: [1, 2, 3, 4, 5] };
const BED_TYPES = { title: 'Bed Type', data: ['Single Bed', 'Double Bed'] };
const FACILITIES = {
  title: 'Facilities',
  data: [
    'Restaurant',
    'Parking lot',
    'Free wifi',
    'Non-smoking rooms',
    'Pet friendly',
  ],
};
const ROOM_FACILITIES = {
  title: 'Room Facilities',
  data: ['Private Bathroom', 'Air conditioner', 'Kitchen', 'Balcony', 'TV'],
};

function Filter() {
  return (
    <div className="mr-4">
      <FilterField data={ROOM_TYPES} />
      <FilterField data={PRICES} />
      <FilterField data={RATINGS} />
      <FilterField data={BED_TYPES} />
      <FilterField data={FACILITIES} />
      <FilterField data={ROOM_FACILITIES} />
    </div>
  );
}

export default Filter;
