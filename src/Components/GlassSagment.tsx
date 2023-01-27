type PropType = {
  children: JSX.Element;
};

export const GlassSagment = ({ children }: PropType) => {
  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(1px)',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        padding: '1rem',
        margin: '0.5rem',
      }}
    >
      {children}
    </div>
  );
};
