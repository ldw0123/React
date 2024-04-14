// Image Picker

'use client'; // 이벤트 핸들러(onClick 등..)들은 client component에서만 사용 가능

import { useRef } from 'react'; // DOM 요소에 접근하기 위해 사용되는 React Hook
import classes from './image-picker.module.css';

// 마크업을 출력하고 골라내는 함수
export default function ImagePicker({ label, name }) {
  const imageInput = useRef();

  // 버튼 클릭을 핸들링하는 함수
  function handlePickClick() {
    imageInput.current.click(); // 실제 연결된 요소와 객체에 접근하여(.current), 클릭 메서드 작동(.click())
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        {/* id={name} 로 해서 <label>을 이 input에 연결시키고,
        accept 속성으로 .png, .jpeg 이미지 파일이 접수되도록 제어하고,
        name={name} 로 해서 나중에 업로드 된 이미지를 추출하고,
        ref={imageInput} 속성으로 click 메서드를 작동시킨다
        */}
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          사진을 고르세요
        </button>
      </div>
    </div>
  );
}
