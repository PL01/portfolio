import Script from 'next/script';
import Package from '@root/package.json';
import { headers } from 'next/headers';

import '@root/global.scss';

import DefaultLayout from '@components/DefaultLayout';
import Navbar from '@components/Navbar';
import Profile from '@root/components/Profile';
import ProfileGrid from '@root/components/ProfileGrid';

export async function generateMetadata({ params, searchParams }) {
  const title = Package.name;
  const description = Package.description;
  const url = 'https://wireframes.internet.dev';
  const handle = '@internetxstudio';

  return {
    metadataBase: new URL('https://wireframes.internet.dev'),
    title,
    description,
    url,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [
        {
          url: 'https://intdev-global.s3.us-west-2.amazonaws.com/template-twitter-summary-large.png',
          width: 1200,
          height: 628,
        },
      ],
    },
    twitter: {
      title,
      description,
      url,
      handle,
      card: 'summary_large_image',
      images: ['https://intdev-global.s3.us-west-2.amazonaws.com/template-twitter-summary-large.png'],
    },
    icons: {
      icon: '/favicon-32x32.png',
      shortcut: '/favicon-16x16.png',
      apple: [{ url: '/apple-touch-icon.png' }, { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/apple-touch-icon-precomposed.png',
        },
      ],
    },
  };
}

export default async function Page(props) {
  const headersList = headers();
  const host = headersList.get('host');
  const protocol = headersList.get('x-forwarded-proto');
  const absoluteURL = `${protocol}://${host}`;

  const response = await fetch(`${absoluteURL}/api`);
  const { text } = await response.json();

  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      
      <Navbar></Navbar>
      <Profile></Profile>
      <ProfileGrid></ProfileGrid>

      <div className='templateLinks'>
        Explore the array of templates offered by{' '}
        <a href="https://github.com/internet-development/nextjs-sass-starter" target="_blank">
          nextjs-sass-starter
        </a>
        , designed to kick-start your upcoming projects. These templates serve as an ideal foundation, and some even feature real APIs that you can access and integrate if they meet
        your project's needs.
        <ul>
          <li>
            <a href="/examples">Navigation, hero text</a>
          </li>
          <li>
            <a href="/examples/full-section">Navigation, full browser height sections</a>
          </li>
          <li>
            <a href="/examples/half-section">Navigation, half browser height sections</a>
          </li>
          <li>
            <a href="/examples/no-sections">Navigation, no sections, just components</a>
          </li>
          <li>
            <a href="/examples/forms">Navigation, form components</a>
          </li>
          <li>
            <a href="/examples/authentication">Authentication</a>
          </li>
          <li>
            <a href="/examples/files">File upload and management</a>
          </li>
          <li>
            <a href="/examples/post">Navigation, blog post, footer</a>
          </li>
          <li>Invoices</li>
          <li>Surveys</li>
          <li>Blog Posts</li>
          <li>Statements of Work</li>
          <li>Payment Flow</li>
          <li>Subscription management</li>
          <li>Messages</li>
        </ul>
      </div>
    </DefaultLayout>
  );
}
