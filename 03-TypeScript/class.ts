// 단어사전 프로그램

type Words = {
  [key: string]: string; // Words 타입이 string만을 property로 가지는 객체
};

class Dict {
  private words: Words;
}
