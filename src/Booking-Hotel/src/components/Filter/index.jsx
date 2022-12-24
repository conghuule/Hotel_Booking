import { Form } from 'antd';
import FilterField from './FilterField';

const ROOM_TYPES = {
  title: 'Room Type',
  data: ['Hotel', 'Homestay', 'Villa'],
};
const PRICES = {
  title: 'Price',
  min: 0,
  max: 4000000,
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
    <div className="w-full">
      <h3 className="font-bold text-mainColor-150">Filter By</h3>
      <Form name="filterForm">
        <FilterField data={ROOM_TYPES} />
        <FilterField data={PRICES} slider />
        <FilterField data={RATINGS} />
        <FilterField data={BED_TYPES} />
        <FilterField data={FACILITIES} />
        <FilterField data={ROOM_FACILITIES} />
      </Form>
    </div>
  );
}

export default Filter;
