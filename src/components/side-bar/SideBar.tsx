import { PropsWithChildren, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import useDialog from '@app/hook/use-dialiog/useDialog';

type SideBarProps = {
  isOpen: boolean;
  onClose: () => void;
} & PropsWithChildren;

function SideBar({ children, isOpen, onClose }: SideBarProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useDialog(dialogRef, isOpen, false);

  return (
    <dialog
      ref={dialogRef}
      className={`fixed top-0 right-full bottom-0 w-screen md:w-80 h-screen flex flex-col z-30 border-none p-0 transition-transform  ${
        isOpen ? 'translate-x-0' : 'opacity-0 pointer-events-none  -translate-x-full'
      }`}
      inert={isOpen ? null : ''}
    >
      <header className='flex justify-end items-center p-2'>
        <button onClick={onClose} autoFocus className='w-6 h-6 text-gray-900'>
          <XMarkIcon />
        </button>
      </header>
      <main className='px-2 py-1'>{children}</main>
    </dialog>
  );
}

export default SideBar;
