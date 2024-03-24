// module 선언. TypeScript가 node_modules 내의 정의 파일(declaration file)로 인식하게 만듦
interface Config {
  url: string; // url을 보냄
}

declare module 'myPackage' {
  // 구현을 적는 것이 아닌 호출 시그니처(call signature) 즉, 타입을 적어주어야 한다.
  function init(config: Config): boolean;
  function exit(code: number): number;
}
