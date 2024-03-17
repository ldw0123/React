// 🔥class

// 생성자
// constructor() 메서드. 매개변수를 가질 수 있다
// 객체의 초기화를 담당. class로부터 객체를 생성할 때 호출된다

// 접근 제한자
// public - 클래스의 외부에서 접근 가능 (default)
// private - 클래스 내부에서만 접근 가능
// protected - 클래스 내부 + 상속받은 자식 클래스에서 접근 가능

abstract class User {
  constructor(
    private firstName: string, // 인스턴스 변수 선언
    private lastName: string,
    public nickname: string
  ) {}
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class People extends User {}

const oreo = new People('nico', 'las', '니꼬');
console.log(oreo.nickname); // 니꼬
console.log(oreo.getFullName()); // nico las
