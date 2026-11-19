import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { translate } from '@docusaurus/Translate'
import styles from './index.module.css'

const t = (id: string, message: string) => translate({ id, message })

const cards = [
  {
    "key": "start",
    "to": "/docs/getting-started/overview",
    "title": "Getting started",
    "text": "What the portal is and how to sign in."
  },
  {
    "key": "business",
    "to": "/docs/customers/organizations",
    "title": "Customers and users",
    "text": "Distributors, resellers, customers and their users."
  },
  {
    "key": "fleet",
    "to": "/docs/fleet/firewalls",
    "title": "Fleet",
    "text": "Firewalls, licences and alerts of all your customers."
  },
  {
    "key": "reports",
    "to": "/docs/reports/protection-reports",
    "title": "Reports and brand",
    "text": "Protection reports and your own brand."
  },
  {
    "key": "help",
    "to": "/docs/help/troubleshooting",
    "title": "Help",
    "text": "Fix the most common problems."
  }
]

const slides = [
  {
    "key": "dashboard",
    "caption": "The whole fleet at a glance"
  },
  {
    "key": "customers",
    "caption": "Customers, resellers and distributors"
  },
  {
    "key": "firewalls",
    "caption": "Every firewall, one click from its controller"
  },
  {
    "key": "licences",
    "caption": "Licences and expiry dates"
  },
  {
    "key": "reports",
    "caption": "Protection reports for your customers"
  }
]

function HeroSlider(): ReactNode {
  const { i18n } = useDocusaurusContext()
  const base = useBaseUrl('/img/screenshots')
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [gone, setGone] = useState<Record<string, boolean>>({})
  const [fallback, setFallback] = useState<Record<string, boolean>>({})
  const reduced = useRef(false)
  const shown = slides.filter((s) => !gone[s.key])
  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])
  useEffect(() => {
    if (paused || reduced.current || shown.length < 2) return
    const id = window.setInterval(() => setIndex((c) => (c + 1) % shown.length), 5000)
    return () => window.clearInterval(id)
  }, [paused, shown.length])
  if (shown.length === 0) return null
  const goTo = (n: number) => setIndex(((n % shown.length) + shown.length) % shown.length)
  const pos = Math.min(index, shown.length - 1)
  const cur = shown[pos]
  const folder = (s: { key: string }) => (fallback[s.key] || i18n.currentLocale === 'en' ? 'en' : i18n.currentLocale)
  return (
    <div className={styles.slider} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className={styles.sliderFrame}>
        {shown.map((s) => (
          <img
            key={s.key + folder(s)}
            className={styles.sliderImage}
            data-active={s.key === cur.key}
            src={`${base}/${folder(s)}/${s.key}.png`}
            alt={t(`home.slide.${s.key}`, s.caption)}
            aria-hidden={s.key === cur.key ? undefined : true}
            onError={() => (folder(s) === 'en' ? setGone((g) => ({ ...g, [s.key]: true })) : setFallback((f) => ({ ...f, [s.key]: true })))}
          />
        ))}
        <button type="button" className={`${styles.sliderArrow} ${styles.sliderArrowPrev}`} onClick={() => goTo(pos - 1)} aria-label={t('home.slide.prev', 'Previous screenshot')}>‹</button>
        <button type="button" className={`${styles.sliderArrow} ${styles.sliderArrowNext}`} onClick={() => goTo(pos + 1)} aria-label={t('home.slide.next', 'Next screenshot')}>›</button>
        <div className={styles.sliderCaption}>{t(`home.slide.${cur.key}`, cur.caption)}</div>
      </div>
      <div className={styles.sliderDots}>
        {shown.map((s, i) => (
          <button key={s.key} type="button" className={styles.sliderDot} data-active={s.key === cur.key} onClick={() => goTo(i)} aria-label={t('home.slide.goTo', 'Show screenshot {n}').replace('{n}', String(i + 1))} />
        ))}
      </div>
    </div>
  )
}

export default function Home(): ReactNode {
  return (
    <Layout title={t('home.title', "Nexwall Partner Portal Documentation")} description={"Nexwall Partner Portal Documentation"}>
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>{t('home.title', "Nexwall Partner Portal Documentation")}</h1>
        <p className={styles.heroSubtitle}>{t('home.subtitle', "Manage resellers and customers, watch every firewall, licence and alert, and deliver protection reports under your own brand.")}</p>
        <div className={styles.buttons}>
          <Link className="button button--lg button--secondary" to="/docs/getting-started/overview">
            {t('home.start', 'Get started')}
          </Link>
        </div>
      </header>
      <main className="container">
        <div className={styles.grid}>
          {cards.map((card) => (
            <Link key={card.key} className={styles.card} to={card.to}>
              <h2 className={styles.cardTitle}>{t(`home.card.${card.key}.title`, card.title)}</h2>
              <p className={styles.cardText}>{t(`home.card.${card.key}.text`, card.text)}</p>
            </Link>
          ))}
        </div>
        <HeroSlider />
      </main>
    </Layout>
  )
}
