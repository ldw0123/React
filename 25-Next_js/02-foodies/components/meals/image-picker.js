// Image Picker

import classes from './image-picker.module.css';

// 마크업을 출력하고 골라내는 함수
export default function ImagePicker({ label, name }) {
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
        />
        {/* id={name} 로 해서 <label>을 이 input에 연결시키고,
        accept 속성으로 .png, .jpeg 이미지 파일이 접수되도록 제어하고,
        name={name} 로 해서 나중에 업로드 된 이미지를 추출한다
      */}
      </div>
    </div>
  );
}
