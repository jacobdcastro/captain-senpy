import React from 'react';
import Layout from '../components/layout/Layout';

const NotFoundPage = () => {
  const seo = { title: '404: Page Not Found' };
  return (
    <Layout seo={seo}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;
