import { useState } from 'react';

const debounce = <T extends (...args: any[]) => any>(fn: T, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): ReturnType<T> => {
    let result: any;
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      result = fn(...args);
    }, delay);
    return result;
  };
};

// 1초 후 return 하는 Promise 함수
const promiseFun = async (value: string) => {
  console.log('Call');
  await new Promise((resolve) => setTimeout(resolve, 500));
  return 'abcd' === value;
};

const debouncedPromiseFun = debounce<typeof promiseFun>(promiseFun, 500)

export const Debounce = () => {
  const [state, setState] = useState(false);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = await promiseFun(e.target.value);
    setState(result);
  };

  const debouncedOnChange = debounce<typeof onChange>(onChange, 500);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <h3>{state ? 'true' : 'false'}</h3>
      <input type="text" onChange={debouncedOnChange} />
    </div>
  );
};
