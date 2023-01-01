import { Form, Select, Skeleton } from 'antd';
import HotelCard from 'components/Card/HotelCard';
import Filter from 'components/Filter';
import Search from 'components/Search/Search';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getData } from 'services/services';

export default function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [hotelList, setHotelList] = useState({ data: [], isLoading: true });

  const location = searchParams.get('location');

  useEffect(() => {
    getData({
      docName: 'hotels',
      conditionList: [{ field: 'location', operator: '==', value: location }],
    }).then((res) => setHotelList({ data: res, isLoading: false }));
  }, [location]);

  return (
    <div className="flex">
      <Form.Provider
        onFormChange={(name, { forms }) =>
          console.log(name, forms[name].getFieldsValue())
        }
      >
        <div className="w-1/4">
          <div className="mb-5">
            <h3 className="font-bold text-mainColor-150">Search</h3>

            <Search vertical />
          </div>
          <Filter />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <div className="">
            <h1 className="mb-1">
              {location}: {hotelList.data?.length} properties found
            </h1>
            <Form className="w-fit" name="sortForm">
              <Form.Item name="sort">
                <Select
                  dropdownMatchSelectWidth={false}
                  defaultValue="mostPopular"
                  options={[
                    { label: 'Sort by: Top picks', value: 'topPicks' },
                    { label: 'Sort by: Most popular', value: 'mostPopular' },
                  ]}
                />
              </Form.Item>
            </Form>
          </div>

          <Skeleton loading={hotelList.isLoading} acitve>
            {hotelList.data?.map((hotel) => (
              <HotelCard {...hotel} key={hotel.id} />
            ))}
          </Skeleton>
        </div>
      </Form.Provider>
    </div>
  );
}
