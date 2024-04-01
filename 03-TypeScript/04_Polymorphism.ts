// 다형성: 다른 모양의 코드를 가질 수 있게 해 주는 것. 하나의 인터페이스나 메소드가 다양한 타입의 객체를 처리할 수 있도록 하는 기능
// 다형성을 이룰 수 있는 방법은 제네릭을 이용하는 것!

/* 
  제네릭: 코드를 작성할 때 구체적인 타입을 명시하지 않고, 그 자리를 일종의 변수로 두어 나중에 어떤 타입이든 그 자리에 넣을 수 있게 하는 기능
        마치 함수에 파라미터를 넣는 것처럼, 타입에도 파라미터를 넣을 수 있어서 다양한 타입에 대응할 수 있게 한다
        제네릭을 사용하면 하나의 함수나 클래스가 다양한 타입의 인자나 인스턴스에 대해 작동할 수 있다
        제네릭은 concrete타입이 아닌, placeholder타입
*/

// 로컬 스토리지 API 만들기 (모양만 내기)
interface SStorage<T> {
  [key: string]: T;
}

// SStorage<T> 인터페이스를 사용하는 클래스.
class LocalStorage<T> {
  // 제네릭을 클래스로 보내고, 클래스는 제네릭을 인터페이스로 보낸 뒤에, 인터페이스는 제네릭을 사용한다
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    // 타입스크립트가 하는 것은, T인 value값을 string인 value로 바꿔주는 것! 아래에서 LocalStorage를 string을 사용하여 만들었기 때문
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

// string 타입의 key를 사용해서 string을 받는다. 타입스크립트가 이걸 concrete 타입으로 바꿔주기 때문
const stringsStorage = new LocalStorage<string>();

stringsStorage.get('key'); // string을 받아옴
stringsStorage.set('hello, ', 'how are you?'); // key: 'hello', value: 'how are you?'

// string 타입의 key, boolean 타입의 value인 데이터를 저장
const booleansStorage = new LocalStorage<boolean>();

booleansStorage.get('xxx'); // string을 보내고 boolean을 받아옴
booleansStorage.set('hello', true); // key: 'hello', value: true
