import { Box } from '@mui/material';
import Image from 'next/image';

type ResponsiveImageProps = {
  src: string;
  aspectRatio?: string;
};

const ResponsiveImage = ({ src, aspectRatio = '1/1', ...props }: ResponsiveImageProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: 'auto',
        aspectRatio: aspectRatio,
        ...props,
      }}
    >
      <Image src={src} fill style={{ objectFit: 'cover' }} />
    </Box>
  );
};

export default ResponsiveImage;
