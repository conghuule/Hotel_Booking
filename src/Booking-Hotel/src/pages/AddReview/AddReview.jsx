import { Button, Form, Rate, Skeleton } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import notify from 'components/notify';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getData, updateData } from 'services/services';

export default function AddReview() {
  const { id } = useParams();
  const user = useSelector((state) => state.auth.user);
  const [hotelData, setHotelData] = useState({ data: {}, isLoading: true });
  const navigate = useNavigate();

  useEffect(() => {
    getData({
      docName: 'hotels',
      id,
    }).then((res) => {
      setHotelData({ data: res, isLoading: false });
    });
  }, [id]);

  const handleSubmit = (values) => {
    const submitData = {
      ...hotelData.data,
      reviews: [
        ...hotelData.data?.reviews,
        {
          name: user.data?.username,
          rating: values.rating,
          review: values.review,
        },
      ],
    };

    try {
      updateData({
        docName: 'hotels',
        id,
        data: submitData,
      });
      notify({ mess: 'Add review successful', type: 'success' });
      navigate('/history');
    } catch (error) {
      console.log(error);
      notify({ mess: 'Add review failed', type: 'error' });
    }
  };

  return (
    <Form.Provider onFormFinish={(_, { values }) => handleSubmit(values)}>
      <Form name="reviewForm">
        <Skeleton loading={hotelData.isLoading} active>
          <div className="flex flex-col">
            <div>
              <h2 className="text-3xl font-extrabold text-mainColor-200 mt-[8px] mb-[24px]">
                Add Review
              </h2>
              <div className="flex flex-col gap-2 mb-[16px]">
                <div className="">
                  <h4 className="mb-0 text-2xl font-bold text-mainColor-200">
                    {hotelData.data.name}
                  </h4>
                  <span className="text-lg inline-block">
                    {hotelData.data.address}
                  </span>
                </div>
                <div className="flex gap-2">
                  {hotelData.data.images?.map((image, index) => (
                    <img
                      src={image}
                      key={index}
                      alt=""
                      className="w-[200px] h-[200px] rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="mb-[16px]">
              <span className="text-xl font-bold text-mainColor-200 mr-[16px]">
                Your Rating
              </span>
              <Form.Item name="rating" noStyle>
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
        </Skeleton>
      </Form>
    </Form.Provider>
  );
}
