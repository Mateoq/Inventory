import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Toast from '@/basic-components/Toast';
import { AppDispatch } from '@/store';
import { selectIsToastOpen, selectToastMessage, closeToast } from '@/slicers/toast';

const ToastScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector(selectIsToastOpen);
  const message = useSelector(selectToastMessage);

  const closeHandler = () => {
    dispatch(closeToast());
  };

  return (
    <Toast
      message={message}
      show={isOpen}
      onClose={closeHandler}
    />
  );
};

export default ToastScreen;
