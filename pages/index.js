import Head from 'next/head';
import React from 'react';
import { Sidebar, Feed, Widgets, Login } from '../components';
import { getProviders, getSession, useSession } from 'next-auth/react';
import { data } from 'autoprefixer';

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();
  if (!session) return <Login providers={providers} />;
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex min-h-screen mx-auto max-w-screen-2xl'>
        <Sidebar />
        <Feed />
        <Widgets />

        {/* Modal */}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch('https://jsonkeeper.com/b/NKEV').then(
    (res) => res.json()
  );
  const followResults = await fetch('https://jsonkeeper.com/b/WWMJ').then(
    (res) => res.json()
  );
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}
