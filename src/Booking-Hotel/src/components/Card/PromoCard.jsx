import { Button } from 'antd';
import { formatCurrency } from 'utils/function';
export default function PromoCard({ data }) {
  const { name, discount_percent, max_discount_amount, code } = data;

  return (
    <div className="w-full flex justify-center">
      <div className="w-full  h-[275px] p-10 rounded-3xl bg-[url('./assets/images/bg_promo.svg')] bg-cover text-white">
        <span className="text-3xl">
          Save {discount_percent}% with {name} up to{' '}
          {formatCurrency(max_discount_amount)}
        </span>
        <div className="text-2xl font-thin">#{code}</div>
        <Button className="absolute bottom-10" type="primary" size="large">
          Search
        </Button>
      </div>
    </div>
  );
}
