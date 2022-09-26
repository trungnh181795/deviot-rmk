import { FC } from 'react';
import { Box } from '@mui/material';

interface ArrowType {
  color: string;
  direction: 'up' | 'down' | 'left' | 'right';
}

const Arrow: FC<ArrowType> = ({ color, direction }) => {
  /**
   *
   * @param drt : direction in string
   */
  const directionToDegree = (drt: String) => {
    switch (drt) {
      case 'up':
        return '-90deg';
      case 'down':
        return '90deg';
      case 'right':
        return '0deg';
      case 'left':
        return '180deg';
      default:
        '0deg';
    }
  };

  return (
    <Box
      sx={{
        transform: `rotate(${directionToDegree(direction)})`,
      }}
    >
      <svg
        width="34"
        height="33"
        viewBox="0 0 34 33"
        fill={color || 'none'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.8047 8.09375L22.0876 16.3765L13.8047 24.6592"
          stroke="white"
          stroke-width="3.50888"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Box>
  );
};

export default Arrow;
