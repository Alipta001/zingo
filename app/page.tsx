import { Metadata } from 'next';
import HomePage from "./pages/home/homePage";

export const metadata: Metadata = {
  title: 'Zingo | Best Food Delivery App to Order Food Online',
  description: 'Zingo is a fast-food delivery app to order food online from top restaurants near you.',
  alternates: {
    canonical: 'https://www.zingo.com/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.zingo.com/',
    title: 'Zingo | Best Food Delivery App to Order Food Online',
    description: 'Zingo is a fast-food delivery app to order food online from top restaurants near you.',
    images: [
      {
        url: 'https://www.zingo.com/Zingologo.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zingo | Best Food Delivery App',
    description: 'Order food online with Zingo. Fast delivery from top restaurants near you.',
    images: ['https://www.zingo.com/Zingologo.png'],
  },
};

export default function Home() {
  return (
    <div>
      <main >
        <HomePage />
      </main>
    </div>
  );
}
