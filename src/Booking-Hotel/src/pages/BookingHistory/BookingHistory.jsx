import BookingCard from 'components/Card/BookingCard';

const CURRENT_BOOKINGS = [
  {
    title: 'Lucky Star Hotel 266 De Tham St ⭐⭐⭐⭐',
    address: 'District 1, Ho Chi Minh City',
    time: 'Dec 24, 2022 to Jan 1, 2023',
    price: 23800000,
  },
  {
    title: 'Hotel Malá Strana ⭐⭐⭐⭐',
    address: 'District 5, Ho Chi Minh City',
    time: 'Sep 24, 2022 to Dec 22, 2022',
    price: 33865000,
  },
];

const PAST_BOOKINGS = [
  {
    title: 'Lucky Star Hotel 266 De Tham St ⭐⭐⭐⭐',
    address: 'District 1, Ho Chi Minh City',
    time: 'Dec 24, 2022 to Jan 1, 2023',
    price: 23800000,
  },
  {
    title: 'Hotel Malá Strana ⭐⭐⭐⭐',
    address: 'District 5, Ho Chi Minh City',
    time: 'Sep 24, 2022 to Dec 22, 2022',
    price: 33865000,
  },
  {
    title: 'Lucky Star Hotel 266 De Tham St ⭐⭐⭐⭐',
    address: 'District 1, Ho Chi Minh City',
    time: 'Dec 24, 2022 to Jan 1, 2023',
    price: 23800000,
  },
  {
    title: 'Hotel Malá Strana ⭐⭐⭐⭐',
    address: 'District 5, Ho Chi Minh City',
    time: 'Sep 24, 2022 to Dec 22, 2022',
    price: 33865000,
  },
  {
    title: 'Lucky Star Hotel 266 De Tham St ⭐⭐⭐⭐',
    address: 'District 1, Ho Chi Minh City',
    time: 'Dec 24, 2022 to Jan 1, 2023',
    price: 23800000,
  },
  {
    title: 'Hotel Malá Strana ⭐⭐⭐⭐',
    address: 'District 5, Ho Chi Minh City',
    time: 'Sep 24, 2022 to Dec 22, 2022',
    price: 33865000,
  },
];

export default function BookingHistory() {
  return (
    <div>
      <h2 className="text-3xl text-mainColor-200 font-bold mb-5">
        Current Booking
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {CURRENT_BOOKINGS.map((booking) => (
          <BookingCard data={booking} />
        ))}
      </div>
    </div>
  );
}
