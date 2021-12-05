import Head from 'next/head';
import React from 'react';
import { Sidebar } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-black min-h-screen flex max-w-[1500px] mx-auto'>
        <Sidebar />
        {/* Feed */}
        {/* Widgets 2 */}

        {/* Modal */}
      </div>
    </div>
  );
}
