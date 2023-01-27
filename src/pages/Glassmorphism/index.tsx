import { useState } from 'react';
import './Glassmorphism.css';
import { GlassContainer } from '../../Components/GlassContainer';
import { GlassSagment } from '../../Components/GlassSagment';
import { GlassButton } from '../../Components/GlassButton';
import { GlassInput } from '../../Components/GlassInput';
export const Glassmorphism = () => {
  const [inputState, setInputState] = useState<{ [idx: number]: string }>();

  console.log(inputState);

  return (
    <GlassContainer>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 8fr' }}>
        <GlassSagment>
          <div style={{ textAlign: 'center' }}>
            <h2>1</h2>
          </div>
        </GlassSagment>
        <GlassSagment>
          <h2>hello</h2>
        </GlassSagment>
      </div>

      <GlassSagment>
        <span>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
          nec, pellentesque eu, pretium quis, sem.
        </span>
      </GlassSagment>
      <>
        {inputState &&
          Object.keys(inputState).map((key) => {
            return (
              inputState[Number(key)] !== undefined && (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '8fr 2fr' }}>
                    <GlassInput
                      className="slide-animation"
                      key={`key-${key}`}
                      type="text"
                      value={inputState[Number(key)]}
                      onChange={(e) => {
                        setInputState((prev) => {
                          return { ...prev, [Number(key)]: e.target.value };
                        });
                      }}
                    />
                    <GlassButton
                      className="slide-animation"
                      onClick={() => {
                        delete inputState[Number(key)];
                        setInputState((prev) => {
                          if (prev) {
                            // 객체 key 순서 1부터 재정렬
                            let newData = {};
                            Object.keys(prev).forEach((key, idx) => {
                              newData = { ...newData, [idx + 1]: inputState[Number(key)] };
                            });
                            return { ...newData };
                          }
                        });
                      }}
                    >
                      삭제
                    </GlassButton>
                  </div>
                </>
              )
            );
          })}
      </>
      <GlassButton
        onClick={() => {
          setInputState((prev) => {
            if (inputState && Object.keys(inputState).length) {
              const keys: number[] = [];
              Object.keys(inputState).map((key) => keys.push(Number(key)));
              const maxIdx = Math.max.apply(null, keys);
              return { ...prev, [maxIdx + 1]: '' };
            } else {
              return { 1: '' };
            }
          });
        }}
      >
        질문 추가
      </GlassButton>
      <GlassButton
        onClick={() => {
          setInputState({});
        }}
      >
        전체 삭제
      </GlassButton>
    </GlassContainer>
  );
};
