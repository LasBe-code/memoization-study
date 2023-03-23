import { useCallback, useState } from 'react';
import { GlassButton } from '../../components/GlassButton';
import React from 'react';

type PropType = {
  data: number;
};

const Element = ({ data }: PropType) => {
  console.log(data);
  return (
    <div
      style={{ width: '100%', height: '50px', background: `#${(data * 2) % 10}77777`, margin: '1rem', color: 'white' }}
    >
      {data}
    </div>
  );
};

// const MemoizationElement = React.memo(Element);

export const Memoization = () => {
  const [state, setState] = useState<number[]>([0, 1]);
  const onClick = () => {
    setState((prev) => {
      if (prev.length === 10) return [0];
      return [...prev, state[state.length - 1] + 1];
    });
  };
  // const mapElements = () => {
  //   const dataList = state.map((data) => {
  //     return <MemoizationElement data={data} key={data} />;
  //   });
  //   return dataList;
  // };

  const Element2 = useCallback(({ data }: PropType) => {
    console.log(data);
    return (
      <div
        style={{
          width: '100%',
          height: '50px',
          background: `#${(data * 2) % 10}77777`,
          margin: '1rem',
          color: 'white',
        }}
      >
        {data}
      </div>
    );
  }, []);

  const mapElements2 = () => {
    const dataList = state.map((data) => {
      return <Element2 data={data} />;
    });
    return dataList;
  };

  return (
    <div>
      <GlassButton onClick={onClick}>CLICK</GlassButton>
      {mapElements2()}
    </div>
  );
};
