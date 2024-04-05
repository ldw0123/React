// JSDoc: HTML 형태의 API 문서를 생성해주는 API 문서 생성기. 주석으로 이루어진 문법

// ts 파일이 js 파일을 확인하도록 한다. js 파일은 그대로 두고 ts 타입 보호를 받고 싶을 때 사용
// @ts-check
/**
 * 프로젝트 초기화
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
  return true;
}

/**
 * 프로그램 종료
 * @param {number} code
 * @returns number
 */
export function exit(code) {
  return code + 1;
}
