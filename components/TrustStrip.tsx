const regions = ['United States', 'United Kingdom', 'Canada', 'Australia', 'Singapore']

export function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="wrap">
        <span className="trust-strip-label">Trusted across</span>
        <div className="trust-strip-logos">
          {regions.map((r) => (
            <span key={r}>{r}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
