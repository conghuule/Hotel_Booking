import { Button } from 'antd';
export default function PromoCard() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full  h-[275px] p-10 rounded-3xl bg-[url('./assets/images/bg_promo.svg')] bg-cover text-white">
        <span className="text-3xl">
          Save up to 15% with End of Year Promotion
        </span>
        <div className="text-2xl font-thin">#MAGIAMGIA0055</div>
        <Button className="absolute bottom-10" type="primary" size="large">
          Search
        </Button>
      </div>
    </div>
  );
}
