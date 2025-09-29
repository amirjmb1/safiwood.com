import { render, screen } from '@testing-library/react';
import { Header } from '../Header';
import { vi } from 'vitest';

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

vi.mock('@/content/site', () => ({
  siteConfig: {
    name: 'نمایشگاه کابینت صفی',
    navigation: [
      { title: 'خانه', href: '/' },
      { title: 'درباره ما', href: '/about' },
    ],
  },
}));

describe('Header', () => {
  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('نمایشگاه کابینت صفی')).toBeInTheDocument();
    expect(screen.getByText('خانه')).toBeInTheDocument();
    expect(screen.getByText('درباره ما')).toBeInTheDocument();
  });
});
