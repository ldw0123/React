// 단어사전 프로그램

type Words = {
  [key: string]: string; // 인덱스 시그니처(Index Signature). 객체의 키(key)를 어떤 타입으로, 그에 상응하는 값(value)을 어떤 타입으로 가지는지를 정의
  // 위는, Words 타입이 string타입의 key, value를 property로 가지는 객체
};

class Dict {
  // 객체 words 를 초기화 없이 선언해주고, 생성자에서 수동으로 초기화
  // 생성자 메서드: 모든 class는 constructor() 메서드를 가질 수 있다. 생성자는 객체를 초기화한다
  private words: Words; // 인스턴스 변수 선언
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    // 클래스(Word)를 타입으로 사용!
    // 단어사전에 단어를 추가하는 메서드
    if (this.words[word.term] === undefined)
      // 주어진 단어가 아직 사전에 없으면
      this.words[word.term] = word.def;
  }
  def(term: string) {
    // term을 이용해 단어를 불러오기
    return this.words[term];
  }
  update(word: Word) {
    // 단어사전을 수정하는 메서드
    if (this.words[word.term] !== undefined) this.words[word.term] = word.def;
  }
  del(term: string) {
    // 단어를 삭제하는 메서드
    if (this.words[term] !== undefined) {
      delete this.words[term]; // delete 연산자: 객체의 속성을 삭제
    }
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word('kimchi', '완벽한 한국의 음식');
const bibimbap = new Word('bibimbap', 'super cool food');

const dict = new Dict();

dict.add(kimchi);
dict.add(bibimbap);
console.log('kimchi: ', dict.def('kimchi')); // kimchi의 word.def
console.log('bibimbap: ', dict.def('bibimbap'));

dict.update(new Word('kimchi', 'very incredible super food'));
console.log('UPDATED KIMCHI: ', dict.def('kimchi'));
console.log('NOT UPDATED BIBIMBAP: ', dict.def('bibimbap'));

dict.del('pizza');
console.log('DELETED BIBIMBAP', dict.def('bibimbap'));
console.log('NOT DELETED KIMCHI: ', dict.def('kimchi'));
