import React from 'react';
import PromoCard from 'components/Card/PromoCard';
import RecommendedCard from 'components/Card/RecommendedCard';
import DestinationCard from 'components/Card/DestinationCard';
import Title from 'components/Card/Title';
export default function Home() {
  return (
    <div>
      <Title
        primaryTitle={'Promotion'}
        secondTitle={'Promotions just for you'}
      />
      <div class="flex flex-row justify-between mb-[76px]">
        <PromoCard />
        <PromoCard />
      </div>
      <Title
        primaryTitle={'Recommendations'}
        secondTitle={'Recommendations just for you'}
      />
      <div class="flex flex-row justify-between mb-[76px]">
        <RecommendedCard hotelName={'Hotel #1'} />
        <RecommendedCard hotelName={'Hotel #2'} />
        <RecommendedCard hotelName={'Hotel #3'} />
        <RecommendedCard hotelName={'Hotel #4'} />
      </div>
      <Title
        primaryTitle={'Discover'}
        secondTitle={'Discover famous destination'}
      />
      <div class="flex flex-row justify-between mb-[76px]">
        <DestinationCard destination={'Vung Tau'} amountHotel={1123} />
        <DestinationCard destination={'Da Lat'} amountHotel={1123} />
        <DestinationCard destination={'Sa pa'} amountHotel={1123} />
        <DestinationCard destination={'Phu Quoc'} amountHotel={1123} />
      </div>
    </div>
  );
}
