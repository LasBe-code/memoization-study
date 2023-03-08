type PropType = {
  children: JSX.Element;
};
export const Container = ({ children }: PropType) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        borderRadius: '10px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        margin: '3rem auto',
        padding: '3rem',
        maxWidth: '30rem',
        backdropFilter: 'blur(3px)',
      }}
    >
      {children}
    </div>
  );
};
