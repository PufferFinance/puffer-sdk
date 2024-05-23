import { FC } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// Access this at <baseUrl>/puffer-component-example.

const PufferComponentExample: FC = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className={clsx('container', styles.center)}>
          Component page example.
        </div>
      </main>
    </Layout>
  );
};

export default PufferComponentExample;
