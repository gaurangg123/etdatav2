// Tiny inline SVG icons — no library dependency needed.
type IconProps = { size?: number; className?: string }

const baseProps = (s: number) => ({
  width: s, height: s,
  viewBox: '0 0 24 24',
  fill: 'none', stroke: 'currentColor',
  strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
})

export function ArrowRight({ size = 14, className }: IconProps) {
  return <svg {...baseProps(size)} className={className} strokeWidth={2.5}><path d="M5 12h14M13 5l7 7-7 7" /></svg>
}
export function Shield({ size = 14, className }: IconProps) {
  return <svg {...baseProps(size)} className={className} strokeWidth={2.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
}
export function Clock({ size = 14, className }: IconProps) {
  return <svg {...baseProps(size)} className={className} strokeWidth={2.5}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
}
export function Star({ size = 14, className }: IconProps) {
  return <svg {...baseProps(size)} className={className} strokeWidth={2.5}><path d="M12 2l3 7 7 .8-5.5 4.8 1.7 7.4L12 18.4 5.8 22l1.7-7.4L2 9.8 9 9z" /></svg>
}
export function Logo({ size = 14, className }: IconProps) {
  return <svg {...baseProps(size)} className={className} strokeWidth={2.5}><path d="M3 12h4l3-9 4 18 3-9h4" /></svg>
}
export function Users({ size = 20, className }: IconProps) {
  return <svg {...baseProps(size)} className={className}><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
}
export function Database({ size = 20, className }: IconProps) {
  return <svg {...baseProps(size)} className={className}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
}
export function CheckSquare({ size = 20, className }: IconProps) {
  return <svg {...baseProps(size)} className={className}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>
}
export function Stack({ size = 20, className }: IconProps) {
  return <svg {...baseProps(size)} className={className}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" /></svg>
}
export function Mail({ size = 16, className }: IconProps) {
  return <svg {...baseProps(size)} className={className}><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" /><path d="M22 6l-10 7L2 6" /></svg>
}
export function Phone({ size = 16, className }: IconProps) {
  return <svg {...baseProps(size)} className={className}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" /></svg>
}
export function MapPin({ size = 16, className }: IconProps) {
  return <svg {...baseProps(size)} className={className}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
}
