// Call Signature

type Add = (a: number, b: number) => number;

// O
const add: Add = (a, b) => a + b;

// 에러!
// const add: Add = (a, b) => {
//   a + b;
// };
