export const siteConfig = {
  name: 'نمایشگاه کابینت صفی',
  shortDescription:
    'طراحی و اجرای کابینت مدرن و کلاسیک در اصفهان با تیم متخصص و متریال ممتاز.',
  description:
    'نمایشگاه کابینت صفی با بهره‌گیری از طراحان خلاق و استادکاران باتجربه، تجربه‌ای ممتاز از طراحی و اجرای کابینت آشپزخانه و دکوراسیون چوبی را برای منازل و فضاهای تجاری فراهم می‌کند.',
  phones: {
    mobile: '09131012292',
    store: '03135655821',
  },
  address:
    'اصفهان، خ پروین، پل سرهنگ، خ عطار نیشابوری، مقابل کوچه شماره ۲۲، دکوراسیون داخلی صفی',
  hours: 'شنبه تا پنجشنبه ۹ تا ۲۰',
  email: 'info@safiwood.com',
  social: {
    instagram: 'https://www.instagram.com/safiwood.esf?igsh=dXQ4MDk1a3Y4MzFl',
    whatsapp: 'https://wa.me/989131012292',
  },
  navigation: [
    { title: 'خانه', href: '/' },
    { title: 'درباره ما', href: '/about' },
    { title: 'نمونه‌کارها', href: '/gallery' },
    { title: 'دریافت پیش‌فاکتور', href: '/quote' },
    { title: 'پیش‌نمایش مجازی', href: '/ai-preview' },
    { title: 'ارتباط با ما', href: '/contact' },
  ],
};

export type SiteConfig = typeof siteConfig;
