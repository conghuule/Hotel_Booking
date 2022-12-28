import { Checkbox, Form, Slider } from 'antd';
import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';
import { formatCurrency } from 'utils/function';

function FilterField({ data = {}, slider }) {
  function renderItemLabel(item) {
    if (typeof item == 'string') {
      return item;
    } else if (typeof item === 'number') {
      return (
        <div className="flex items-center">
          {Array(item)
            .fill(0)
            .map((_, index) => (
              <AiFillStar key={index} color="#ffe000" size={20} />
            ))}
        </div>
      );
    } else if (typeof item === 'object' && item !== null) {
      return (
        <span className="m-0">
          {item.maximum !== undefined
            ? `${item.minimum} - ${item.maximum} VND`
            : `${item.minimum}+ VND`}
        </span>
      );
    } else {
      return '';
    }
  }

  return (
    <div className="p-3 mb-2 border-2 border-solid text-mainColor-150 border-mainColor-50 max-w-[300px] rounded-[4px] ">
      <h4 className="font-bold">{data.title}</h4>
      <Form.Item className="m-0" name={data.title}>
        {slider ? (
          <Slider
            min={data.min}
            max={data.max}
            range
            tooltip={{
              formatter: (value) => formatCurrency(value),
            }}
            marks={{
              [data.min]: formatCurrency(data.min),
              [data.max]: {
                style: {
                  transform: 'translateX(-90%)',
                },
                label: formatCurrency(data.max),
              },
            }}
            step={100000}
            defaultValue={[data.min, data.max]}
          />
        ) : (
          <Checkbox.Group className="flex flex-col gap-1">
            {data.data.map((item, index) => (
              <Checkbox
                className="m-0 flex items-start"
                key={index}
                value={item}
              >
                {renderItemLabel(item)}
              </Checkbox>
            ))}
          </Checkbox.Group>
        )}
      </Form.Item>
    </div>
  );
}

FilterField.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FilterField;
