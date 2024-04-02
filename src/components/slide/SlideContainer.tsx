'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type SlideItem = {
  title: string;
  context?: string;
  slide: React.ReactNode;
};

type SlideContainerProps = {
  slides: SlideItem[];
};

const SlideContainer = ({ slides }: SlideContainerProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [context, setContext] = useState<null | string>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const updateContext = (index) => {
    const context = slides[index].context;
    setContext(context);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initialSlideIndex = parseInt(
        new URLSearchParams(window.location.search).get('slide') || '0',
        10,
      );
      setCurrentIndex(initialSlideIndex);
      updateContext(initialSlideIndex);
    }
  }, []);

  const updateURLParam = (index: number) => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('slide', index.toString());
      window.history.pushState({}, '', url);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      let newIndex = currentIndex;
      if (event.key === 'ArrowRight') {
        newIndex = Math.min(currentIndex + 1, slides.length - 1);
      } else if (event.key === 'ArrowLeft') {
        newIndex = Math.max(currentIndex - 1, 0);
      }
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
        updateContext(newIndex);
        updateURLParam(newIndex);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [currentIndex, slides.length]);

  useEffect(() => {
    const handlePopState = () => {
      if (typeof window !== 'undefined') {
        const index = parseInt(new URLSearchParams(window.location.search).get('slide') || '0', 10);
        setCurrentIndex(index);
        updateContext(index);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', handlePopState);
      return () => window.removeEventListener('popstate', handlePopState);
    }
  }, []);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number }; velocity: { x: number } },
  ) => {
    const offsetX = info.offset.x;
    const velocityX = info.velocity.x;

    if (offsetX > 100 || velocityX > 500) {
      const prevIndex = Math.max(currentIndex - 1, 0);
      setCurrentIndex(prevIndex);
      updateContext(prevIndex);
      updateURLParam(prevIndex);
    } else if (offsetX < -100 || velocityX < -500) {
      const nextIndex = Math.min(currentIndex + 1, slides.length - 1);
      setCurrentIndex(nextIndex);
      updateContext(nextIndex);
      updateURLParam(nextIndex);
    }
  };

  const handleSlideSelection = (index: number) => {
    setCurrentIndex(index);
    updateContext(index);
    updateURLParam(index);
    setMenuOpen(false);
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setMenuOpen(open);
  };

  const transitionDuration = 0.3;

  return (
    <Box sx={{ position: 'relative', height: '100vh', width: '100vw', p: 1 }}>
      <IconButton
        edge='start'
        color='inherit'
        aria-label='menu'
        sx={{ position: 'absolute', top: 10, left: 10, zIndex: menuOpen ? 1199 : 1201 }}
        onClick={() => setMenuOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor={'left'} open={menuOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {slides.map((slide, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleSlideSelection(index)}
                sx={{
                  backgroundColor: currentIndex === index ? 'primary.main' : 'inherit',
                  color: currentIndex === index ? 'primary.contrastText' : 'inherit',
                }}
              >
                <ListItemText primary={slide.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      {context && (
        <Box sx={{ position: 'fixed', top: 15, left: 45, zIndex: 1200 }}>
          <Typography variant='h6' component='div' sx={{ color: 'white' }}>
            {context}
          </Typography>
        </Box>
      )}
      <Box sx={{ p: 2 }}>
        <Container maxWidth='lg' sx={{ height: '100vh' }}>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: transitionDuration }}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              style={{ width: '100%', height: '100%' }}
            >
              {slides[currentIndex].slide}
            </motion.div>
          </AnimatePresence>
          <Box
            sx={{
              position: 'fixed',
              bottom: isMobile ? '20px' : '10px',
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {slides.map((_, index) => (
              <Box
                key={index}
                sx={{
                  height: '10px',
                  width: '10px',
                  borderRadius: '50%',
                  backgroundColor: currentIndex === index ? 'primary.main' : 'grey.400',
                  margin: '0 5px',
                  transition: 'background-color 0.3s',
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>
      <Box sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1200 }}>
        <Typography variant='h6' component='div' sx={{ color: 'white' }}>
          {`${currentIndex + 1}/${slides.length}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default SlideContainer;
