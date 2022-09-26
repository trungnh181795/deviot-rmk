import { useState, useEffect, useCallback, FC } from 'react';
import { IconButton } from '@mui/material';
import { Arrow } from '../Icons';

const ScrollTopBtn: FC = () => {
  const [visible, setVisible] = useState<Boolean>(false);

  const handleScroll = useCallback(() => {
    console.log('components/ScrollTopBtn: re-rendered')

    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const handleSetVisible = () => {
      setVisible(window.scrollY > 0 ? true : false);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleSetVisible);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleSetVisible);
      }
    };
  }, []);

  return (
    <>
      {visible && (
        <IconButton
          sx={{
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            border: 'none',
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            cursor: 'pointer',
            padding: 0,
          }}
          onClick={handleScroll}
        >
          <Arrow color="#FFFFFF" direction="up" />
        </IconButton>
      )}
    </>
  );
};

export default ScrollTopBtn;
