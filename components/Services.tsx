'use client'
import { PointerEvent } from 'react'
import { Users, Database, CheckSquare, Stack } from './Icons'
import { Reveal } from './Reveal'

const services = [
  {
    icon: <Users size={20} />,
    title: 'Staffing & Virtual Assistants',
    body: 'Hand-picked, English-fluent VAs and back-office staff working in your timezone. Vetted for skill and judgment, not just availability.',
    tags: ['Executive support', 'Research', 'Inbox triage'],
  },
  {
    icon: <Database size={20} />,
    title: 'Data entry & processing',
    body: "High-volume, high-accuracy work with multi-level QC. We'll structure your spreadsheets, clean your CRM, or process forms at scale.",
    tags: ['CRM cleanup', 'Form processing', 'Data migration'],
  },
  {
    icon: <CheckSquare size={20} />,
    title: 'Manual QA testing',
    body: "Detailed test plans, exploratory sessions, and regression sweeps written in plain English. We catch the bugs your CI doesn't.",
    tags: ['Web & mobile', 'Regression', 'Bug triage'],
  },
  {
    icon: <Stack size={20} />,
    title: 'Data engineering',
    body: "ETL pipelines, dashboards, warehouse setup. Modern stack — Snowflake, BigQuery, dbt, Airflow — written by engineers who've shipped to production.",
    tags: ['ETL pipelines', 'Warehouse', 'Dashboards'],
  },
]

export function Services() {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const t = e.currentTarget
    const r = t.getBoundingClientRect()
    t.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
    t.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
  }
  return (
    <section id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">Services</div>
          <h2>Four practices, <span className="serif-italic">one standard</span>.</h2>
          <p className="lede" style={{ marginTop: 24 }}>
            Each service runs on documented SOPs, multi-pass quality checks, and weekly metrics you can audit. Pick one, or let us run all four end-to-end.
          </p>
        </Reveal>
        <Reveal stagger>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service" onPointerMove={onMove}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className="service-tags">
                  {s.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
