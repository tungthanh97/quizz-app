import { Backdrop, CircularProgress } from '@material-ui/core';
import React from 'react';

export const Spinner = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  return (
    <Backdrop open={isOpen} onClick={() => setIsOpen(false)}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
