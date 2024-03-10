// 💫 Call Signature: 함수 이름 위에 커서를 올렸을 때, 뜨는 매개변수 타입 정보와 반환 타입 정보 -> 함수가 어떻게 호출되는지와 반환이 어떻게 되는지 알려주는 정보

function funcA(a: number, b: number) {
  return a + b;
}

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

// 에러! -> 화살표 함수에서 {}를 사용하면, 그 안의 값은 함수의 내용으로써 처리되므로 함수의 타입은 반환값이 없는 void가 된다
// const add: Add = (a, b) => {
//   a + b;
// };

// 💫 Overloading
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  // config는 string | Config 타입이다
  if (typeof config === 'string') {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};
