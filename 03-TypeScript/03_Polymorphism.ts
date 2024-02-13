// 다형성: 다른 모양의 코드를 가질 수 있게 해 주는 것
// 다형성을 이룰 수 있는 방법은 제네릭을 이용하는 것!
// 제네릭은 concrete타입이 아닌, placeholder타입

// 로컬 스토리지 API 만들기 (모양만 내기)
interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  // 제네릭을 클래스로 보내고, 클래스는 제네릭을 인터페이스로 보낸 뒤에, 인터페이스는 제네릭을 사용한다
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
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

const stringsStorage = new LocalStorage<string>();

stringsStorage.get('ket');
stringsStorage.set('hello, ', 'how are you?');

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.get('xxx');
booleansStorage.set('hello', true);
