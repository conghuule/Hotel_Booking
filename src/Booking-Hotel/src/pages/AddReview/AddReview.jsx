import { Button, Form, Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import ImageUpload from 'components/ImageUpload/ImageUpload';
import React, { useState } from 'react';

const MAX_LENGTH_REVIEW = 50;

export default function AddReview() {
  const [reviewValue, setReviewValue] = useState('');

  const handleSubmit = (values) => {
    // const newReview = {
    //   rating,
    //   review: reviewValue,
    // };
    console.log(values);
  };

  return (
    <Form.Provider onFormFinish={(_, { values }) => handleSubmit(values)}>
      <Form name="reviewForm">
        <div className="flex flex-col">
          <div>
            <h2 className="text-3xl font-extrabold text-mainColor-200 mt-[8px] mb-[24px]">
              Add Review
            </h2>
            <div className="flex flex-col mb-[16px]">
              <h4 className="mb-0 text-2xl font-bold text-mainColor-200">
                Lucky Star Hotel De Tham St
              </h4>

              <span className="text-lg inline-block mt-[8px]">
                Lucky Star Hotel De Tham St, District 1, Ho Chi Minh City
              </span>
            </div>
            <ImageUpload name="images" multiple size="md" />
          </div>

          <div className="mb-[16px]">
            <span className="text-xl font-bold text-mainColor-200 mr-[16px]">
              Your Rating
            </span>
            <Form.Item name="rating">
              <Rate defaultValue={0} />
            </Form.Item>
          </div>

          <div>
            <div className="flex">
              <h3 className="mr-auto mb-[16px] text-[24px] font-bold text-mainColor-200">
                Detailed Review
              </h3>
            </div>
            <Form.Item name="review">
              <TextArea rows={6} showCount maxLength={300} />
            </Form.Item>
          </div>

          <Button
            type="primary"
            className="bg-mainColor-200 mt-[20px] ml-[auto] mr-auto"
            size="large"
            htmlType="submit"
          >
            Send Review
          </Button>
        </div>
      </Form>
    </Form.Provider>
  );
}
