// 해당 프로젝트의 모든 Story에 전역으로 적용될 포맷을 세팅하는 파일

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
