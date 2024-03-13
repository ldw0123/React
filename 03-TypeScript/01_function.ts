// 1️⃣ Call Signature: 함수 이름 위에 커서를 올렸을 때, 뜨는 매개변수 타입 정보와 반환 타입 정보 -> 함수가 어떻게 호출되는지와 반환이 어떻게 되는지 알려주는 정보

function funcA(a: number, b: number) {
  return a + b;
}

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

// 에러! -> 화살표 함수에서 {}를 사용하면, 그 안의 값은 함수의 내용으로써 처리되므로 함수의 타입은 반환값이 없는 void가 된다
// const add: Add = (a, b) => {
//   a + b;
// };

// 2️⃣ Overloading
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

// 3️⃣ Polymorphism & Generic
// 1) Concrete type (string, number, boolean)
// 아래의 타입에 맞게 타입을 직접 설정해주어야 한다
type SuperPrint1 = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
  (arr: (number | boolean)[]): void;
};

const superPrint1: SuperPrint1 = (arr) => {
  arr.forEach((i) => console.log(i)); // forEach()로 배열을 순회하며, arr의 요소를 출력
};

superPrint1([1, 2, 3, 4]);
superPrint1([true, false, true]);
superPrint1(['a', 'b', 'c']);
superPrint1([1, 2, true, false]);

// 2) Generic: 선언이 아닌 생성 시점에 타입을 명시하여, 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법
// 제네릭은 call signature를 작성할 때 어떤 타입이 들어올지 모를 때 사용한다
// 제네릭을 사용하면 타입스크립트가 알아서 타입을 유추하고, 발견한 타입으로 바꿔준다
// 구체적인 타입을 지정하지 않고 다양한 인수와 리턴 값에 대한 타입을 처리할 수 있다!
type SuperPrint2 = {
  <TypePlaceholder>(arr: TypePlaceholder[]): void; // 반환 타입이 없으므로, void
};

const superPrint2: SuperPrint2 = (arr) => {
  arr.forEach((i) => console.log(i)); // forEach()로 배열을 순회하며, arr의 요소를 출력
};

// superPrint2에 마우스를 갖다 대면, 타입스크립트가 유추한 타입으로 call signature를 보여준다
superPrint2([1, 2, 3, 4]);
superPrint2([true, false, true]);
superPrint2(['a', 'b', 'c']);
superPrint1([1, 2, true, false]);
superPrint2([1, 2, true, false, '2']);

// 3) Generic 변형 - 리턴 타입 바꾸기
type SuperPrint3 = {
  <T>(arr: T[]): T;
};

const superPrint3: SuperPrint3 = (arr) => arr[0]; // superPrint3함수는 배열의 첫 번째 요소의 타입과 동일한 타입을 반환 -> T

const a = superPrint3([1, 2, 3, 4]); // 0번 인덱스인 1의 타입은 number이므로, T(반환 타입)는 number로 유추된다
const b = superPrint3([true, false, true]); // T는 boolean으로 유추
const c = superPrint3(['a', 'b', 'c']); // T는 string
const d = superPrint3([1, 2, true, false, '2']); // T는 number

// 4) Generic 변형 - 제네릭 추가
type SuperPrint4 = {
  <T, M>(arrayyy: T[], bbb: M): T; // 함수의 첫 번째 매개변수로 T 배열, 두 번째로 M이 들어옴
};

const superPrint4: SuperPrint4 = (arrayyy) => arrayyy[0]; // superPrint3함수는 배열의 첫 번째 요소의 타입과 동일한 타입을 반환 -> T

const e = superPrint4([1, 2, 3, 4], 'x'); // T(반환 타입)는 number로, M은 string으로 유추
const f = superPrint4([true, false, true], 1); // T는 boolean으로, M은 number으로 유추
const g = superPrint4(['a', 'b', 'c'], false); // T는 string, M은 boolean으로 유추
const h = superPrint4([1, 2, true, false, '2'], []); // T는 number, M은 never[]으로 유추
