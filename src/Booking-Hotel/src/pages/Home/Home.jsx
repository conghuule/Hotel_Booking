import React from 'react';
import PromoCard from 'components/Card/PromoCard';
import RecommendedCard from 'components/Card/RecommendedCard';
import DestinationCard from 'components/Card/DestinationCard';
import Title from 'components/Card/Title';
import { Carousel } from 'antd';
import ScrollContainer from 'react-indiana-drag-scroll';
import Search from 'components/Search/Search';

export default function Home() {
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
        <Carousel autoplay>
          <PromoCard />
          <PromoCard />
        </Carousel>
      </div>
      <div className="mb-10">
        <Title
          primaryTitle={'Recommendations'}
          secondTitle={'Recommendations just for you'}
        />
        <ScrollContainer horizontal className="flex gap-5">
          <RecommendedCard hotelName={'Hotel #1'} />
          <RecommendedCard hotelName={'Hotel #2'} />
          <RecommendedCard hotelName={'Hotel #3'} />
          <RecommendedCard hotelName={'Hotel #4'} />
          <RecommendedCard hotelName={'Hotel #5'} />
          <RecommendedCard hotelName={'Hotel #6'} />
          <RecommendedCard hotelName={'Hotel #7'} />
          <RecommendedCard hotelName={'Hotel #8'} />
        </ScrollContainer>
      </div>
      <div className="mb-10">
        <Title
          primaryTitle={'Discover'}
          secondTitle={'Discover famous destination'}
        />
        <ScrollContainer horizontal className="flex gap-5">
          <DestinationCard destination={'Vung Tau'} amountHotel={1123} />
          <DestinationCard destination={'Da Lat'} amountHotel={1123} />
          <DestinationCard destination={'Sa pa'} amountHotel={1123} />
          <DestinationCard destination={'Phu Quoc'} amountHotel={1123} />
        </ScrollContainer>
      </div>
    </div>
  );
}

