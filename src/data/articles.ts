const base = 'https://jasonmartuscello.com';

export interface Article {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  url: string;
}

export const articles: Article[] = [
  { title: '26.2 Lessons in Human Behavior: What the NYC Marathon Teaches Us About Communication That Moves People', date: 'November 13, 2025', category: 'Behavior Change', excerpt: 'On Sunday November 2nd, I joined nearly 60,000 people in doing something completely irrational. We paid hundreds of dollars, trained for months…', url: `${base}/behavior-change/26-2-lessons-in-human-behavior-what-the-nyc-marathon-teaches-us-about-communication-that-moves-people/` },
  { title: 'The Words That Move Us: Why I’m Shifting from Research to Language Strategy', date: 'September 11, 2025', category: 'Behavior Change', excerpt: 'More than a decade ago, after losing over 100 pounds, I became obsessed with a simple question: why do people…', url: `${base}/behavior-change/the-words-that-move-us-why-im-shifting-from-research-to-language-strategy-2/` },
  { title: 'Dietary Variability: How “Healthy” Brands are Disrupting our Ability to Control our Eating', date: 'November 19, 2024', category: 'Insights', excerpt: 'Imagine eating ice-cream every day and being healthy? That day is finally here. There used to be just ice-cream, cookies, chips…', url: `${base}/uncategorized/dietary-variability-how-healthy-brands-are-disrupting-our-ability-to-control-our-eating/` },
  { title: 'From Obese & Hating Running to 8x Marathoner, 6 Star Finisher, and a 2:42 Personal Best…What is Next?', date: 'January 27, 2024', category: 'Behavior Change', excerpt: '8 years ago I couldn’t fathom running down the street. Fast forward to today, I have run 8 marathons, and…', url: `${base}/behavior-change/from-obese-hating-running-to-8x-marathoner-6-star-finisher-and-a-242-personal-bestwhat-is-next/` },
  { title: 'The Chicago Marathon — From nearly dropping out to a PR and 6th Star', date: 'November 4, 2023', category: 'Behavior Change', excerpt: 'After crushing a 22-mile long-run, I went from a personal high to an all-time low almost pulling out of the race…', url: `${base}/behavior-change/the-chicago-marathon%e2%80%8a-%e2%80%8afrom-nearly-dropping-out-to-a-pr-and-6th-star/` },
  { title: 'A Soul-Changing Honeymoon in Kenya…Here is what 2 Weeks in the Wild felt like…', date: 'May 27, 2023', category: 'Life', excerpt: 'WHY KENYA? When it came to honeymoon planning I didn’t hesitate about where we should travel. Since 2015, I traveled…', url: `${base}/uncategorized/a-soul-changing-honeymoon-in-kenyahere-is-what-2-weeks-in-the-wild-felt-like/` },
];
