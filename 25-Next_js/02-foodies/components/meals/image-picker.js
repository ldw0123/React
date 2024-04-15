// Image Picker

'use client'; // 이벤트 핸들러(onClick 등..)들은 client component에서만 사용 가능

import { useRef, useState } from 'react';
import Image from 'next/image';

import classes from './image-picker.module.css';

// 마크업을 출력하고 골라내는 함수
export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef(); // DOM 요소에 접근하기 위해 사용되는 React Hook

  // 버튼 클릭을 핸들링하는 함수
  function handlePickClick() {
    imageInput.current.click(); // 실제 연결된 요소와 객체에 접근하여(.current), 클릭 메서드 작동(.click())
  }

  // input이 새로운 값을 지닐 때마다 작동되는 함수
  function handleImageChange(event) {
    const file = event.target.files[0]; // 첫 번째 파일만 접근

    // 유저가 파일을 선택하지 않았을 경우
    if (!file) {
      setPickedImage(null); // 미리보기된 이미지를 재설정
      return;
    }

    // 미리보기를 하려면 Data URL(파일의 데이터를 직접 URL 문자열로 인코딩한 것) 을 사용해야 한다
    const fileReader = new FileReader();

    fileReader.onload = (url) => {
      setPickedImage(fileReader.result); //  읽어온 이미지 데이터(URL)를 저장
    };

    fileReader.readAsDataURL(file); // 선택된 이미지 파일을 Data URL 형식으로 읽는다
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {/* 선택된 이미지가 없을 때 */}
          {!pickedImage && <p>선택된 이미지가 없습니다</p>}
          {/* 선택된 이미지가 있을 때 */}
          {pickedImage && (
            <Image src={pickedImage} alt="유저가 선택한 이미지" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name} // <label>을 이 input에 연결
          accept="image/png, image/jpeg" // .png, .jpeg 이미지 파일이 접수되도록 제어
          name={name} // 나중에 업로드 된 이미지를 추출
          ref={imageInput} // click 메서드를 작동
          onChange={handleImageChange} // input이 새로운 값을 지닐 때마다 함수를 호출
          required // 반드시 이미지를 선택하도록 함
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
