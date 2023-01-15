import { useEffect, RefObject } from 'react';

const useDialog = (dialogRef: RefObject<HTMLDialogElement>, open: boolean, showModal = true) => {
  useEffect(() => {
    if (dialogRef.current) {
      if (typeof dialogRef.current.showModal !== 'function') {
        dialogRef.current.hidden = true;
        alert('Sorry, the <dialog> API is not supported by this browser.');
        return;
      }

      if (open === true && !dialogRef.current.open)
        if (showModal) dialogRef.current.showModal();
        else dialogRef.current.show();
      else dialogRef.current.close();
    }
  }, [open, dialogRef, showModal]);
};

export default useDialog;
