import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PrivacyPolicyPage from '../components/PrivacyPolicyPage';

export default function PrivacyPolicy() {
  const router = useRouter();

  const handleBackToMain = () => {
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Privacy Policy - Uptime CDL Hiring OS</title>
        <meta 
          name="description" 
          content="Learn how Uptime collects, uses, and protects your personal information. Read our comprehensive privacy policy for transparency on data handling and your rights." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <PrivacyPolicyPage onBackClick={handleBackToMain} />
    </>
  );
}