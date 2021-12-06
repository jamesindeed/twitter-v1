import Head from 'next/head';
import React from 'react';
import { Sidebar } from '../components';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex min-h-screen mx-auto bg-black max-w-screen-2xl'>
        <Sidebar />
        <Feed />
        <Widgets />

        {/* Modal */}
      </div>
    </div>
  );
}
