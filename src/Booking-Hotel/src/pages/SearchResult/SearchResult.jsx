import { Button, Form, Select } from 'antd';
import HotelCard from 'components/Card/HotelCard';
import Filter from 'components/Filter';
import React from 'react';

export default function SearchResult() {
  return (
    <div className="flex">
      <Form.Provider
        onFormChange={(name, { forms }) =>
          console.log(name, forms[name].getFieldsValue())
        }
      >
        <div className="w-1/4">
          <Filter />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <div className="">
            <h1 className="mb-1">Ho Chi Minh City: 1,287 properties found</h1>
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
