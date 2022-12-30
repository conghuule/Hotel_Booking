import { Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import ImageUpload from 'components/ImagUpload/ImageUpload';
import React, { useState } from 'react';

const MAX_LENGTH_REVIEW = 50;

export default function AddReview() {
  const [reviewValue, setReviewValue] = useState('');
  const [changeRating, setChangeRating] = useState(true);
  const [rating, setRating] = useState(3);

  const handleSubmit = () => {
    const newReview = {
      rating,
      review: reviewValue,
    };
    console.log(newReview);
  };

  return (
    <div className="flex flex-col">
      <div>
        <h2 className="text-[40px] font-extrabold text-mainColor-200 mt-[8px] mb-[24px]">
          Add Review
        </h2>
        <div className="flex flex-col mb-[16px]">
          <h4 className="mb-0 text-[24px] font-bold text-mainColor-200">
            Lucky Star Hotel De Tham St ⭐⭐⭐⭐
          </h4>

          <span className="text-[16px] inline-block mt-[8px]">
            Lucky Star Hotel De Tham St, District 1, Ho Chi Minh City
          </span>
        </div>
        <ImageUpload multiple />
      </div>

      <div className="mb-[16px]">
        <span className="text-[24px] font-bold text-mainColor-200 mr-[16px]">
          Your Rating
        </span>
        {Array(5)
          .fill()
          .map((item, index) => (
            <div
              className="inline-block cursor-pointer"
              onMouseEnter={() => {
                if (changeRating) {
                  setRating(index + 1);
                }
              }}
              onClick={() => {
                setChangeRating(false);
                setRating(index + 1);
              }}
              key={index}
            >
              {index + 1 <= rating ? (
                <span className="text-[20px]">⭐</span>
              ) : (
                <span className="text-[20px] opacity-40">⭐</span>
              )}
            </div>
          ))}
      </div>

      <div>
        <div className="flex">
          <h3 className="mr-auto mb-[16px] text-[24px] font-bold text-mainColor-200">
            Detailed Review
          </h3>
          {reviewValue.length > MAX_LENGTH_REVIEW && (
            <span className="text-[#CE2E2E] text-[14px] mr-[16px]">
              Your review is too long!
            </span>
          )}
          <span className="inline-block min-w-[100px] text-[14px] text-right text-[#5B5B5B]">{`${reviewValue.length}/${MAX_LENGTH_REVIEW} words`}</span>
        </div>
        <TextArea
          rows={6}
          value={reviewValue}
          onChange={(e) => setReviewValue(e.target.value)}
        />
      </div>

      <Button
        type="primary"
        className="bg-mainColor-200 mt-[20px] ml-[auto] mr-auto"
        size="large"
        onClick={handleSubmit}
      >
        Send Review
      </Button>
    </div>
  );
}
