import { Inter } from 'next/font/google';
import Link from 'next/link';

import { PodBody } from '../components/iPod/PodBody';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='pt-24'>
      <PodBody>Body</PodBody>
    </main>
  );
}
