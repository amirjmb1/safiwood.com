import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';
import { vi } from 'vitest';

vi.mock('@/content/site', () => ({
  siteConfig: {
    name: 'نمایشگاه کابینت صفی',
    shortDescription: 'توضیحات نمونه',
    phones: { mobile: '0913', store: '0313' },
    address: 'اصفهان',
    hours: '9-18',
    email: 'info@example.com',
    social: { instagram: 'https://instagram.com', whatsapp: 'https://wa.me' },
    navigation: [
      { title: 'خانه', href: '/' },
      { title: 'درباره ما', href: '/about' },
    ],
  },
}));

describe('Footer', () => {
  it('displays contact information', () => {
    render(<Footer />);
    expect(screen.getByText('0913')).toBeInTheDocument();
    expect(screen.getByText('اصفهان')).toBeInTheDocument();
    expect(screen.getByText('حریم خصوصی')).toBeInTheDocument();
  });
});
