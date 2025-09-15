import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ManifestoPage from '../components/ManifestoPage';

export default function Manifesto() {
  const router = useRouter();

  const handleBackToMain = () => {
    router.push('/');
  };

  const handleOpenModal = () => {
    router.push('/?modal=open');
  };

  return (
    <>
      <Head>
        <title>Mr. Rigg's Manifesto - Uptime CDL Hiring OS</title>
        <meta 
          name="description" 
          content="Read Mr. Rigg's Manifesto on revolutionizing CDL driver hiring. Discover Uptime's vision to transform trucking recruitment with 48-hour hiring and 70% cost reduction." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <ManifestoPage onBackClick={handleBackToMain} onOpenModal={handleOpenModal} />
    </>
  );
}