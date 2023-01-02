import {
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  Radio,
  Select,
  TimePicker,
} from 'antd';
import dayjs from 'dayjs';
import React from 'react';

export default function CustomInput({
  type,
  name,
  placeholder,
  value,
  onChange,
  prefix,
  suffix,
  mode,
  options,
  disabled,
}) {
  return (
    <>
      {type === 'password' ? (
        <Input.Password
          name={name}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
          value={value}
          onChange={onChange}
        />
      ) : type === 'textarea' ? (
        <Input.TextArea
          name={name}
          showCount
          allowClear
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : type === 'select' ? (
        <Select
          className="w-full"
          mode={mode}
          placeholder={placeholder}
          showArrow
          allowClear
          value={value}
          onChange={onChange}
          options={options}
        />
      ) : type === 'checkbox' ? (
        <Checkbox checked={value} onChange={(e) => onChange(e.target.checked)}>
          {placeholder}
        </Checkbox>
      ) : type === 'text' ? (
        <Input
          name={name}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      ) : type === 'number' ? (
        <InputNumber
          name={name}
          style={{ width: '100%' }}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
          min={0}
          value={value}
          onChange={onChange}
        />
      ) : type === 'date' ? (
        <DatePicker
          style={{ width: '100%' }}
          format={'D/M/YYYY'}
          value={value ? dayjs(value, 'DD/MM/YYYY') : null}
          onChange={onChange}
        />
      ) : type === 'period' ? (
        <DatePicker.RangePicker
          showTime
          format={'D/M/YYYY'}
          value={value ? [dayjs(value[0]), dayjs(value[1])] : null}
          onChange={onChange}
        />
      ) : type === 'images' ? (
        // <ImageUpload name={name} initialValue={initialImage} />
        <></>
      ) : type === 'radio' ? (
        <Radio.Group
          name={name}
          value={value}
          onChange={onChange}
          options={options}
          disabled={disabled}
        />
      ) : type === 'time' ? (
        <TimePicker
          type="time"
          value={value}
          onChange={onChange}
          format="HH:mm"
        />
      ) : type === 'periodTime' ? (
        <TimePicker.RangePicker
          value={
            value ? [dayjs(value[0], 'HH:mm'), dayjs(value[1], 'HH:mm')] : null
          }
          onChange={onChange}
          format="HH:mm"
        />
      ) : null}
    </>
  );
}
