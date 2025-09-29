import { fireEvent, render, screen } from '@testing-library/react';
import { GalleryGrid, type GalleryItem } from '../GalleryGrid';

describe('GalleryGrid', () => {
  const items: GalleryItem[] = [
    {
      id: '1',
      title: 'نمونه ۱',
      description: 'توضیح',
      category: 'کابینت مدرن',
      imageUrl: 'https://picsum.photos/seed/a/400/300',
    },
    {
      id: '2',
      title: 'نمونه ۲',
      description: 'توضیح',
      category: 'کابینت کلاسیک',
      imageUrl: 'https://picsum.photos/seed/b/400/300',
    },
  ];

  it('filters by category', () => {
    render(<GalleryGrid items={items} />);
    expect(screen.getByText('نمونه ۱')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'کابینت کلاسیک' }));
    expect(screen.queryByText('نمونه ۱')).not.toBeInTheDocument();
    expect(screen.getByText('نمونه ۲')).toBeInTheDocument();
  });
});
