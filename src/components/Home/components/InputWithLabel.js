import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const InputWithLabel = ({
  label,
  placeholder,
}) => {
  const [value, setValue] = useState('');

  const uuid = uuidv4();
  return (
    <div className="p-2">
      <label
        htmlFor={uuid}
        className={`
          block
          text-sm
          font-medium
          text-gray-700
        `}
      >
        {label}
      </label>
      
      <input
        id={uuid}
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        className={`
          p-1
          focus:ring-blue-500
          focus:border-blue-500
          focus:outline-none
          block
          w-full
          sm:text-sm
          border
          border-gray-300
          rounded-md
          shadow-sm
        `}
      />
    </div>
  );
};
