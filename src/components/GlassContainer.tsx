type PropType = {
  children: JSX.Element | JSX.Element[];
};
export const GlassContainer = ({ children }: PropType) => {
  return (
    <div style={{ padding: '1rem' }}>
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(10px)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.18)',

          display: 'flex',
          flexDirection: 'column',
          margin: '0rem auto',
          padding: '1rem',
          maxWidth: '30rem',
          color: 'white',
        }}
      >
        {children}
      </div>
    </div>
  );
};
