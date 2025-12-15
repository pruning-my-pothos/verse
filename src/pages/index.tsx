import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type FocusCard = {
  title: string;
  body: string;
  cta: string;
  href: string;
};

const focusCards: FocusCard[] = [
  {
    title: 'Start with intent',
    body: 'See how documentation types map to reader needs before you draft anything.',
    cta: 'Read Start Here',
    href: '/docs/start-here/',
  },
  {
    title: 'Platform discipline',
    body: 'Platform sections keep overview, setup, usage, and API pages together for clarity.',
    cta: 'Edge Messaging platform',
    href: '/docs/platforms/edge-messaging/overview',
  },
  {
    title: 'Systems thinking',
    body: 'Patterns explain the why: architecture, trade-offs, and when to apply them.',
    cta: 'Context routing pattern',
    href: '/docs/systems-patterns/context-routing/overview',
  },
  {
    title: 'Guides and exploration',
    body: 'How-to guides give steps; exploration notes capture learning in progress with clear disclaimers.',
    cta: 'Browse guides and notes',
    href: '/docs/how-to-guides/publish-a-new-platform-guide',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Verse is a concise technical documentation and study space built on Docusaurus.">
      <main className={styles.landing}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <Heading as="h1" className={styles.heroTitle}>
              Documentation as a system, not a content dump.
            </Heading>
            <p className={styles.heroSubtitle}>
              Verse shows how to separate concepts, procedures, references, and exploration while
              keeping navigation calm and predictable.
            </p>
            <div className={styles.ctaRow}>
              <Link className="button button--primary button--lg" to="/docs/start-here/">
                Start with the guide
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/platforms/edge-messaging/overview">
                See platform example
              </Link>
            </div>
          </div>
          <div className={styles.heroMeta}>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Docs title</span>
              <span className={styles.metaValue}>Verse</span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Site URL</span>
              <a className={styles.metaValue} href="https://pruning-my-pothos.github.io/verse">
                pruning-my-pothos.github.io/verse
              </a>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Search</span>
              <span className={styles.metaValue}>Enabled (local index)</span>
            </div>
          </div>
        </section>

        <section className={styles.focusGrid}>
          {focusCards.map((card) => (
            <article key={card.title} className={styles.card}>
              <Heading as="h3" className={styles.cardTitle}>
                {card.title}
              </Heading>
              <p className={styles.cardBody}>{card.body}</p>
              <Link className={styles.cardLink} to={card.href}>
                {card.cta}
              </Link>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
}
