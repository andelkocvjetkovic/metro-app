import { PropsWithChildren } from 'react';
type RadioButtonProps = {
  id: string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
  value: string;
} & PropsWithChildren;

function RadioButton({ id, isChecked, children, onChange, value }: RadioButtonProps) {
  return (
    <div className='flex items-center'>
      <input
        id={id}
        type='radio'
        value={value}
        onChange={e => {
          onChange(e.target.checked);
        }}
        checked={isChecked}
        name={id}
        className='w-4 h-4 text-pink-600 bg-gray-100 accent-pink-500 rounded-lg'
      />
      <label htmlFor={id} className='ml-2 text-sm font-medium text-gray-900'>
        {children}
      </label>
    </div>
  );
}

export default RadioButton;
