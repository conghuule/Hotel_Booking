import React, { useState } from 'react';
import { Form, Input, Avatar, Button } from 'antd';

export default function UserProfile() {
  const CustomizedForm = ({ onChange, fields }) => (
    <Form
      name="global_state"
      ayout="vertical"
      labelCol={{
        span: 12,
      }}
      wrapperCol={{
        span: 5,
      }}
      fields={fields}
      onFieldsChange={(_, allFields) => {
        onChange(allFields);
      }}
    >

      <div className="flex justify-center items-center m-5">
        <div className="ant-form-text font-bold text-3xl">Nguyen Van A</div>
      </div>

      <div className="flex justify-center items-center">

        <div className="flex flex-col">
          <Avatar size={250} className="mb-4" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" alt="" />
          <Input className="border-none text-lg text-mainColor-150 w-auto h-auto" type="file" id="formFile"></Input>
        </div>

        <div className="flex flex-col">
          <Form.Item
            name="accountType"
            label="Account Type"
          >
            <Input  className="w-auto" />
          </Form.Item>

          <Form.Item
            name="birthday"
            label="Birthday"
          >
            <Input type="datepicker"  className="w-auto" />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            label="Phone Number"
          >
            <Input  className="w-auto" />
          </Form.Item>

          <Form.Item
            name="id"
            label="ID Card Number"
          >
            <Input  className="w-auto" />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail">
            <Input  className="w-auto" />
          </Form.Item>

          <div className="flex justify-end">
          <button className="text-xl border-white bg-mainColor-150 text-white w-auto rounded-md">Save profile</button>
          </div>
        </div>
      </div>

    </Form>
  );
  const [fields, setFields] = useState([
    {
      name: ['accountType'],
      value: 'Hotel owner',
    },
    {
      name: ['birthday'],
      value: '1/1/2002',
    },
    {
      name: ['phoneNumber'],
      value: '0123456789',
    },
    {
      name: ['id'],
      value: '0123456789',
    },
    {
      name: ['email'],
      value: 'abc@gmail.com',
    },
  ]);
  return (
    <>
      <CustomizedForm
        fields={fields}
        onChange={(newFields) => {
          setFields(newFields);
        }}
      />
    </>
  );
};