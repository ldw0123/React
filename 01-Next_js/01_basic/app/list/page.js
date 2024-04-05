export default function List() {
  let 상품 = ['Tomoto', 'Pasta', 'Coconut', 'carrot'];

  return (
    <>
      <div>
        <h4 className="title">상품목록</h4>
        {상품.map((a, index) => {
          return (
            <div className="food" key={index}>
              <img
                src={`/food${index}.jpg`}
                alt="토마토"
                className="food-img"
              />
              <h4>{a} $40</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}

// ⭐️ map 함수
// 배열의 각 요소를 순회해서 처리하고, 새로운 배열을 반환하는 함수
// React에서 반복문을 쓸 때, key 속성을 권장
// arr.map((배열의 요소, 인덱스)=> {})
