// interface: 객체의 속성과 타입을 정의하는 키워드
// interface는 클래스나 객체가 특정 구조를 따르도록 강제하는 역할을 한다. 객체의 속성과 함수(메서드)의 시그니처(입력 매개변수와 반환 타입)를 정의할 수 있다. 클래스가 특정 메서드를 반드시 구현하도록 강제하는데도 사용될 수 있다

// interface와 type은 매우 유사하다!
type StudentA = {
  nickname: string;
  studentNum: number;
};

interface StudentB {
  nickname: string;
  studentNum: number;
}

// type은 interface에 비해 더 많이 활용할 수 있다
type A = string; // 타입 별칭 (Type Alias) 가능
// interface B = string; // 에러! 인터페이스는 객체의 모양을 정의한다

// 똑같은 이름의 인터페이스를 3번 만들어도, 타입스크립트가 알아서 합쳐준다 (type은 불가능)
interface Character {
  name: string;
}

interface Character {
  lastName: string;
}

interface Character {
  health: number;
}

// interface 상속
interface Man extends Character {
  name: string;
}

const nicco: Man = {
  name: 'nicco',
  lastName: 'n',
  health: 10,
};

// 추상 클래스: 객체를 생성할 수 없는 클래스. 다른 클래스가 상속받아 구현할 수 있다
// 추상 메서드: 선언만 있고 구현 내용이 없는 메서드
abstract class User {
  // 접근 제어자     해당 클래스 내   자식 클래스 내    인스턴스
  // public           o             o            o
  // protected        o             o            x
  // private          o             x            x
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string; // 추상 메서드
  abstract fullName(): string; // 추상 메서드
}

class Player extends User {
  // Player 클래스에서 User 추상 클래스를 구현
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}
