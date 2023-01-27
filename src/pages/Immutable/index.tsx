/* eslint-disable */

import { useState } from 'react';

// export const Immutable = () => {
// const person = {
//     name: "jang",
//     age: 26,
// };

// return (
//     <div>
//         <span>{person.name}</span>
//         <span>{person.age}</span>
//         <button
//         onClick={() => {
//             person.age = 27;
//             console.log(person.age);
//                     // 콘솔에는 27이 찍히지만 상태를 감지할 수 없어 리렌더링은 일어나지 않는다.
//         }}
//         >
//         Change Age
//         </button>
//     </div>
// );
// };

export const Immutable = () => {
  let person = 26;

  console.log(person);
  return (
    <div>
      {person}
      <button
        onClick={() => {
          person = person + 1;
        }}
      ></button>
    </div>
  );
};
