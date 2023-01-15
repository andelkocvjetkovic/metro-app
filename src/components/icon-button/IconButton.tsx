import { ComponentPropsWithRef } from 'react';
import classNames from 'classnames';

function IconButton(props: ComponentPropsWithRef<'button'>) {
  return <button {...props} className={classNames('w-8 h-8 p-1 text-gray-900 hover:text-pink-500', props.className)} />;
}

export default IconButton;
