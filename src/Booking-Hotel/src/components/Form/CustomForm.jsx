import { Form } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useEffect } from 'react';
import CustomInput from './CustomInput';

export default function CustomForm({
  vertical,
  id,
  onFinish,
  onChange,
  schema,
  defaultValues,
  ...props
}) {
  const [form] = useForm();

  const onFormFinish = (name, { values, forms }) => {
    onFinish && onFinish(values, form);
  };
  const onFormChange = (name, info) => {
    onChange && onChange(name, info, form);
  };

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue(defaultValues);
  }, [form, defaultValues]);

  return (
    <Form.Provider onFormFinish={onFormFinish} onFormChange={onFormChange}>
      <Form
        form={form}
        id={id}
        name={id}
        layout={vertical ? 'vertical' : 'horizontal'}
        {...props}
      >
        {schema?.map((item, index) => (
          <Form.Item
            className="mb-5"
            key={index}
            name={item.name}
            label={item.label}
            rules={[
              {
                required: item.required,
                message: item.mess
                  ? item.mess
                  : '* ' + item.label + ' is required',
                ...item.rules,
              },
            ]}
          >
            <CustomInput type={item.type} name={item.name} {...item} />
          </Form.Item>
        ))}
      </Form>
    </Form.Provider>
  );
}
