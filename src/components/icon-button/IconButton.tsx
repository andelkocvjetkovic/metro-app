import { ComponentPropsWithRef } from 'react';
import classNames from 'classnames';

function IconButton(props: ComponentPropsWithRef<'button'>) {
  return <button {...props} className={classNames('w-6 h-6 p-0 text-gray-900 hover:text-pink-500', props.className)} />;
}

export default IconButton;
