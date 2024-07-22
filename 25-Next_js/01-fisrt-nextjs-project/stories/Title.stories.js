import React from 'react';
import Title from './Title';

// 어떤 이름으로 스토리북에 올릴 것인지, 어떤 설정으로 렌더링할지 정의
export default {
  title: 'Components/Title', //  스토리북에 올릴 component폴더 계층 구조
  component: Title, // 스토리를 만들 컴포넌트 이름
};

// <Component {...args} / > : 해당 스토리에서 테스트할 인자가 담긴 컴포넌트
const Template = (args) => <Title {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: 'Basic Title',
};

export const Empty = Template.bind({});
Empty.args = {
  text: '',
};

export const CustomText = Template.bind({});
CustomText.args = {
  text: 'Custom Title Text',
};
