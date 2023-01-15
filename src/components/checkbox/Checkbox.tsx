import { PropsWithChildren, ChangeEvent } from 'react';

type CheckboxProps = { isChecked: boolean; id: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void } & PropsWithChildren;

function Checkbox({ children, isChecked, id, onChange }: CheckboxProps) {
  return (
    <div className='flex items-start mb-4'>
      <input
        id={id}
        aria-describedby='checkbox-1'
        type='checkbox'
        className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-ping-300 h-4 w-4 rounded accent-pink-400'
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={id} className='text-sm ml-3 font-medium text-gray-900'>
        {children}
      </label>
    </div>
  );
}

export default Checkbox;
