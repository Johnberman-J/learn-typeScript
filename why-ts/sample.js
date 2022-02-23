// 자바스크립트를 타입스크립트처럼 사용하는법
// jsdoc을 사용해서 자바스크립트도 TS 처럼 검증 할 수 있다.
// 마지막에 ts-check 써줘야한다.

/**
 *
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */

// @ts-check

function sum(a, b) {
  return a + b;
}

sum(10, "20"); // @ts-check을 통해 오류가 있다는것을 알아냄.
