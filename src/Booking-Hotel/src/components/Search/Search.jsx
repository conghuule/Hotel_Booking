import { Button, DatePicker, Form, InputNumber, Select } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import React from 'react';
import { useNavigate } from 'react-router';
export default function Search({ vertical, ...props }) {
  const [form] = useForm();
  const navigate = useNavigate();

  return (
    <Form
      className={`bg-mainColor-200 ${
        vertical ? 'flex flex-col p-3 max-w-[300px] gap-2' : 'gap-1 p-1'
      } w-max rounded-md ${props.className}`}
      layout={vertical ? 'vertical' : 'inline'}
      name="searchForm"
      form={form}
    >
      <Form.Item className={'m-0'} name="dest">
        <Select
          className={vertical ? 'w-full' : 'w-[150px]'}
          showSearch
          placeholder="Where are you going?"
          dropdownMatchSelectWidth={false}
          options={[
            { label: 'Ho Chi Minh', value: 'Ho Chi Minh' },
            { label: 'Ha Noi', value: 'Ha Noi' },
            { label: 'Phu Quoc', value: 'Phu Quoc' },
            { label: 'Hoi An', value: 'Hoi An' },
          ]}
        />
      </Form.Item>
      <Form.Item className={'m-0'} name="time">
        <DatePicker.RangePicker
          className={vertical ? 'w-full' : ''}
          format="DD/MM/YYYY"
          disabledDate={(current) => {
            let customDate = dayjs().format('YYYY-MM-DD');
            return current && current < dayjs(customDate, 'YYYY-MM-DD');
          }}
        />
      </Form.Item>
      <Form.Item className={'m-0'} name="peopleQuantity" initialValue={1}>
        <InputNumber
          className={vertical ? 'w-full' : ''}
          min={1}
          formatter={(value) => `${value} peoples`}
        />
      </Form.Item>
      <Form.Item className={'m-0'} name="roomQuantity" initialValue={1}>
        <InputNumber
          className={vertical ? 'w-full' : ''}
          min={1}
          formatter={(value) => `${value} rooms`}
        />
      </Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        onClick={() => navigate(`/search/${form.getFieldValue('dest')}`)}
      >
        Search
      </Button>
    </Form>
  );
}
