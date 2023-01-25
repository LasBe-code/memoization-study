type PropType = {
  children: JSX.Element;
};
export const Container = ({ children }: PropType) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '1rem',
        boxShadow: '0 2rem 5rem 0.1rem gray',
        margin: '3rem auto',
        padding: '3rem',
        width: '80%',
        maxWidth: '50rem',
      }}
    >
      {children}
    </div>
  );
};
