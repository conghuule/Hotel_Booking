import { Form, Select } from 'antd';
import HotelCard from 'components/Card/HotelCard';
import Filter from 'components/Filter';
import Search from 'components/Search/Search';
import { useSearchParams } from 'react-router-dom';

export default function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();

  const location = searchParams.get('location');

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
            <h1 className="mb-1">{location}: 1,287 properties found</h1>
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

          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
        </div>
      </Form.Provider>
    </div>
  );
}
