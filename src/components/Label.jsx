import { GREEN } from '../data/data';

function Label({ children, center = false }) {
  return (
    <p
      style={{
        fontSize: 11,
        fontWeight: 700,
        color: GREEN,
        letterSpacing: 3,
        textTransform: 'uppercase',
        marginBottom: 10,
        textAlign: center ? 'center' : 'left',
      }}
    >
      {children}
    </p>
  );
}

export default Label;
