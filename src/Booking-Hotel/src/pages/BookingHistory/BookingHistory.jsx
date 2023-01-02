import BookingCard from 'components/Card/BookingCard';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getData } from 'services/services';

export default function BookingHistory() {
  const user = useSelector((state) => state.auth.user);
  const [bookingList, setBookingList] = useState({ data: [], isLoading: true });

  useEffect(() => {
    getData({
      docName: 'booking',
      conditionList: [{ field: 'customer', operator: '==', value: user.uid }],
    }).then((res) => setBookingList({ data: res, isLoading: false }));
  }, [user]);

  useEffect(() => {
    console.log(bookingList);
  }, [bookingList]);

  return (
    <div>
      <h2 className="text-3xl text-mainColor-200 font-bold mb-5">
        Recent Booking
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {bookingList.data?.map((booking) => (
          <BookingCard data={booking} />
        ))}
      </div>
    </div>
  );
}
