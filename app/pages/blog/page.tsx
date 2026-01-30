import BlogSection from "@/component/blogPage/blogSection/blogSection";
import Footer from "@/component/globalLayout/footer/footer";
import Navbar from "@/component/globalLayout/navbar/navbar";

export const metadata = {
  title: 'Zingo Blog | Food Delivery Trends, Technology & Insights',
  description: 'Explore the Zingo Blog for expert insights on food delivery apps, online food ordering trends, delivery technology, logistics innovation, and customer experience.',
  alternates: {
    canonical: 'https://www.zingo.com/blog/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.zingo.com/blog/',
    title: 'Zingo Blog | Food Delivery Trends & Tech Insights',
    description: 'Read expert articles on food delivery apps, order food online trends, logistics technology, and the future of fast delivery by Zingo.',
    images: [
      {
        url: 'https://www.zingo.com/assets/images/zingo-blog-og.png',
        width: 1200,
        height: 630,
        alt: 'Zingo Blog Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zingo Blog | Food Delivery & App Technology',
    description: 'Insights, trends, and expert opinions on food delivery apps, online food ordering, and fast delivery technology.',
    images: ['https://www.zingo.com/assets/images/zingo-blog-og.png'],
  },
};

export default function Page() {
  return (
    <>
    <Navbar />
      <BlogSection />
      <Footer />
    </>
  );
}
