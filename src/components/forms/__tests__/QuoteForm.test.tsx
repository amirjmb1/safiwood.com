import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QuoteForm } from '../QuoteForm';
import { afterEach, beforeEach, vi } from 'vitest';

const mockFetch = vi.fn();

vi.stubGlobal('fetch', mockFetch);

beforeEach(() => {
  process.env.NEXT_PUBLIC_FORM_ENDPOINT = 'https://example.com';
  mockFetch.mockResolvedValue({ ok: true });
});

afterEach(() => {
  mockFetch.mockReset();
});

describe('QuoteForm', () => {
  it('validates required fields', async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);
    await user.click(screen.getByRole('button', { name: 'مرحله بعد' }));
    expect(await screen.findAllByText(/لطفاً/)).toHaveLength(1);
  });

  it('submits data successfully', async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);

    await user.type(screen.getByPlaceholderText('مثال: علیرضا صفی'), 'علی صفی');
    await user.type(screen.getByPlaceholderText('مثال: 0913xxxxxxx'), '09130000000');

    await user.click(screen.getByRole('button', { name: 'مرحله بعد' }));
    await screen.findByRole('heading', { name: 'جزئیات پروژه' });

    await user.clear(screen.getByLabelText('متراژ فضا (متر مربع)'));
    await user.type(screen.getByLabelText('متراژ فضا (متر مربع)'), '25');
    await user.click(screen.getByRole('button', { name: 'مرحله بعد' }));
    await screen.findByRole('heading', { name: 'توضیحات تکمیلی' });

    await user.click(screen.getByRole('button', { name: 'ارسال درخواست' }));

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalled();
    });
    await screen.findByText(/درخواست شما با موفقیت ارسال شد/);
  });
});
