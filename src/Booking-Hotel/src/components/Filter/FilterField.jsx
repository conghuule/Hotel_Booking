import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function FilterField({ data = {} }) {
  const [checked, setChecked] = useState([]);

  function handleChecked(index) {
    if (checked.includes(index)) {
      setChecked(checked.filter((item) => item !== index));
    } else {
      setChecked([...checked, index]);
    }
  }

  function renderItemLabel(item) {
    if (typeof item == 'string') {
      return item;
    } else if (typeof item === 'number') {
      return (
        <div className="flex gap-1 mt-[-2px]">
          {Array(item)
            .fill(0)
            .map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                colorRendering="linear-gradient(#e66465, #9198e5)"
                color="#ffe000"
              />
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

  console.log('Checked: ', checked);

  return (
    <div className="p-3 mb-2 border-2 border-solid text-mainColor-150 border-mainColor-50 max-w-[240px] rounded-[4px] ">
      <h4 className="font-bold">{data.title}</h4>

      <ul className="mb-0 list-none">
        {data.data.map((item, index) => (
          <li
            key={index}
            className="flex items-center py-[4px] cursor-pointer"
            onClick={() => handleChecked(index)}
          >
            <Checkbox
              className="pr-[6px] mt-[-4px] border-none cursor-pointer"
              checked={checked.includes(index)}
            />
            <label className="text-[14px] cursor-pointer">
              {renderItemLabel(item)}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

FilterField.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FilterField;
