import { FC, useState } from 'react';
import { AppBar, Container, Toolbar, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';
import { HOME_URL, LOGO_WHITE_SRC } from '../../constants';

const Navbar: FC = () => {
  return (
    <AppBar position="sticky" sx={{ height: '89px' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link href={HOME_URL}>
            <Image src={LOGO_WHITE_SRC} width={89} height={89} alt="Deviot" />
          </Link>
          <Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
