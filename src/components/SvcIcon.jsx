import { GREEN } from '../data/data';

function SvcIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2">
      <rect x="3"  y="3"  width="7" height="7" />
      <rect x="14" y="3"  width="7" height="7" />
      <rect x="3"  y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

export default SvcIcon;
