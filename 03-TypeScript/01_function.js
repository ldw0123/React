// 1️⃣ Call Signature: 함수 이름 위에 커서를 올렸을 때, 뜨는 매개변수 타입 정보와 반환 타입 정보 -> 함수가 어떻게 호출되는지와 반환이 어떻게 되는지 알려주는 정보
function funcA(a, b) {
    return a + b;
}
var add = function (a, b) { return a + b; };
var push = function (config) {
    // config는 string | Config 타입이다
    if (typeof config === 'string') {
        console.log(config);
    }
    else {
        console.log(config.path, config.state);
    }
};
var superPrint1 = function (arr) {
    arr.forEach(function (i) { return console.log(i); }); // forEach()로 배열을 순회하며, arr의 요소를 출력
};
superPrint1([1, 2, 3, 4]);
superPrint1([true, false, true]);
superPrint1(['a', 'b', 'c']);
superPrint1([1, 2, true, false]);
var superPrint2 = function (arr) {
    arr.forEach(function (i) { return console.log(i); }); // forEach()로 배열을 순회하며, arr의 요소를 출력
};
// superPrint2에 마우스를 갖다 대면, 타입스크립트가 유추한 타입으로 call signature를 보여준다
superPrint2([1, 2, 3, 4]);
superPrint2([true, false, true]);
superPrint2(['a', 'b', 'c']);
superPrint1([1, 2, true, false]);
superPrint2([1, 2, true, false, '2']);
var superPrint3 = function (arr) { return arr[0]; }; // superPrint3함수는 배열의 첫 번째 요소의 타입과 동일한 타입을 반환 -> T
var a = superPrint3([1, 2, 3, 4]); // 0번 인덱스인 1의 타입은 number이므로, T(반환 타입)는 number로 유추된다
var b = superPrint3([true, false, true]); // T는 boolean으로 유추
var c = superPrint3(['a', 'b', 'c']); // T는 string
var d = superPrint3([1, 2, true, false, '2']); // T는 number
