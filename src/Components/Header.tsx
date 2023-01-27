import { useState } from 'react';
import { GlassButton } from './GlassButton';

export const Header = () => {
  const [state, setState] = useState(false);
  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(10px)',
        width: '100%',
        height: '75px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <GlassButton className={`${state && 'slide-animation'}`} onClick={() => setState(!state)}>
        ON/OFF
      </GlassButton>
      {state && (
        <>
          <GlassButton className="slide-animation">ONE</GlassButton>
          <GlassButton className="slide-animation">TWO</GlassButton>
          <GlassButton className="slide-animation">THREE</GlassButton>
        </>
      )}
    </div>
  );
};
