import { Carousel, Skeleton } from 'antd';
import DestinationCard from 'components/Card/DestinationCard';
import PromoCard from 'components/Card/PromoCard';
import RecommendedCard from 'components/Card/RecommendedCard';
import Title from 'components/Card/Title';
import Search from 'components/Search/Search';
import { useEffect, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { getData } from 'services/services';
export default function Home() {
  const [promotionList, setPromotionList] = useState({
    data: [],
    isLoading: true,
  });
  const [hotelList, setHotelList] = useState({ data: [], isLoading: true });
  const [locationList, setLocationList] = useState({
    data: [],
    isLoading: true,
  });

  useEffect(() => {
    //get promotion list
    getData({
      docName: 'promotions',
      limitNumber: 5,
    }).then((res) => setPromotionList({ data: res, isLoading: false }));

    //get hotel list
    getData({
      docName: 'hotels',
      limitNumber: 5,
    }).then((res) => setHotelList({ data: res, isLoading: false }));

    //get hotel list
    getData({
      docName: 'locations',
    }).then((res) => setLocationList({ data: res, isLoading: false }));
  }, []);

  return (
    <div>
      <div className="w-full p-10 bg-mainColor-150 -mt-5 mb-5 relative text-white">
        <h1 className="font-bold m-0">Find a hotel</h1>
        <h3 className="">Find a hotel easily anywhere</h3>
        <Search className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="mb-10">
        <Title
          primaryTitle={'Promotion'}
          secondTitle={'Promotions just for you'}
        />
        <Skeleton loading={promotionList.isLoading} active>
          <Carousel autoplay>
            {promotionList.data?.map((promotion) => (
              <PromoCard key={promotion.id} data={promotion} />
            ))}
          </Carousel>
        </Skeleton>
      </div>
      <div className="mb-10">
        <Title
          primaryTitle={'Recommendations'}
          secondTitle={'Recommendations just for you'}
        />
        <Skeleton loading={hotelList.isLoading} active>
          <ScrollContainer horizontal className="flex gap-5">
            {hotelList.data.map((hotel) => (
              <RecommendedCard {...hotel} key={hotel.id} />
            ))}
          </ScrollContainer>
        </Skeleton>
      </div>
      <div className="mb-10">
        <Title
          primaryTitle={'Discover'}
          secondTitle={'Discover famous destination'}
        />
        <Skeleton loading={locationList.isLoading} active>
          <ScrollContainer horizontal className="flex gap-5">
            {locationList.data.map((location) => (
              <DestinationCard {...location} key={location.id} />
            ))}
          </ScrollContainer>
        </Skeleton>
      </div>
    </div>
  );
}
