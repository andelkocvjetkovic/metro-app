import { PropsWithChildren, ChangeEvent, ComponentPropsWithRef } from 'react';

type SelectProps = ComponentPropsWithRef<'select'> & PropsWithChildren;

function Select({ children, onChange, ...rest }: SelectProps) {
  return (
    <select
      {...rest}
      onChange={onChange}
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-ping-500 focus:border-ping-500 block w-full p-2.5 '
    >
      {children}
    </select>
  );
}

export default Select;
