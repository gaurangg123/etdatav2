import { Reveal } from './Reveal'

const steps = [
  { n: '01', title: 'Brief', body: "You share what's slowing you down. A 30-minute call is enough." },
  { n: '02', title: 'Match', body: 'We assemble a small team — usually 2-4 people — vetted for your stack.' },
  { n: '03', title: 'Pilot', body: 'First deliverable inside 7 days. You approve before we scale.' },
  { n: '04', title: 'Run',   body: 'Steady weekly cadence with a single point of contact in your timezone.' },
]

export function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">About</div>
          <h2>Quietly excellent work, <span className="serif-italic">delivered on time</span>.</h2>
          <p className="lede" style={{ marginTop: 24 }}>
            Since 2014, we've built a team in Indore, India that operates as a calm extension of yours — no scope drift, no surprise invoices, no chase-ups. Just work that arrives finished.
          </p>
        </Reveal>
        <Reveal stagger>
          <div className="process">
            {steps.map((s) => (
              <div key={s.n} className="step">
                <span className="step-num">{s.n}</span>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
