import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import CookiePolicyPage from '../components/CookiePolicyPage';

export default function CookiePolicy() {
  const router = useRouter();

  const handleBackToMain = () => {
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Cookie Policy - Uptime CDL Hiring OS</title>
        <meta 
          name="description" 
          content="Learn about how Uptime uses cookies to improve your experience on our platform. Understand cookie types, management options, and your privacy choices." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <CookiePolicyPage onBackClick={handleBackToMain} />
    </>
  );
}