import { ComponentPropsWithRef } from 'react';

function OutlineButton(props: ComponentPropsWithRef<'button'>) {
  return (
    <button
      className='<button type="button" class="inline-block px-8 py-2 border-2 border-red-500 text-red-500 font-medium text-xs leading-tight rounded-md  hover:text-red-700 hover:border-red-700 focus:outline-none focus:ring-0 disabled:text-gray-400 disabled:border-gray-500 transition duration-150 ease-in-out'
      {...props}
    />
  );
}

export default OutlineButton;
