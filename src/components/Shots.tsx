import type { ReactNode } from 'react'
import { useState } from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { translate } from '@docusaurus/Translate'
import styles from './shots.module.css'

type Item = { name: string; caption: string }

// A slider of real screenshots. Files: /img/screenshots/<locale>/<name>.png, falling back to English;
// an image that does not exist yet is skipped, so a page never shows a broken picture.
export default function Shots({ items }: { items: Item[] }): ReactNode {
  const { i18n } = useDocusaurusContext()
  const locale = i18n.currentLocale
  const base = useBaseUrl('/img/screenshots')
  const [index, setIndex] = useState(0)
  const [missing, setMissing] = useState<Record<string, boolean>>({})
  const [fallback, setFallback] = useState<Record<string, boolean>>({})
  const shown = items.filter((it) => !missing[it.name])
  if (shown.length === 0) return null
  const pos = Math.min(index, shown.length - 1)
  const cur = shown[pos]
  const useEn = fallback[cur.name] || locale === 'en'
  const src = `${base}/${useEn ? 'en' : locale}/${cur.name}.png`
  const go = (n: number) => setIndex(((n % shown.length) + shown.length) % shown.length)
  const onError = () => {
    if (!useEn) setFallback((f) => ({ ...f, [cur.name]: true }))
    else setMissing((m) => ({ ...m, [cur.name]: true }))
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.frame}>
        <img key={src} className={styles.img} src={src} alt={cur.caption} onError={onError} loading="lazy" />
        {shown.length > 1 && (
          <>
            <button type="button" className={`${styles.arrow} ${styles.prev}`} onClick={() => go(pos - 1)} aria-label={translate({ id: 'shots.prev', message: 'Previous screenshot' })}>‹</button>
            <button type="button" className={`${styles.arrow} ${styles.next}`} onClick={() => go(pos + 1)} aria-label={translate({ id: 'shots.next', message: 'Next screenshot' })}>›</button>
          </>
        )}
        <div className={styles.caption}>{cur.caption}</div>
      </div>
      {shown.length > 1 && (
        <div className={styles.dots}>
          {shown.map((it, i) => (
            <button key={it.name} type="button" className={styles.dot} data-active={i === pos} onClick={() => go(i)} aria-label={it.caption} />
          ))}
        </div>
      )}
    </div>
  )
}
