import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import React from 'react';

vi.mock('next/image', () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt ?? ''} />;
  },
}));
