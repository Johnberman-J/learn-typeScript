// JS 문자열 선언
const str1 = "Hello";

// TS 문자열 선언
const str2: string = "Hello";

// TS 숫자
const num: number = 10;

// TS 배열 => 배열의 타입을 지정해주면 해당 타입만 배열에 담을 수 있다.
const arr1: number[] = [1, 2, 3];
const friends: Array<string> = ["jake", "park", "WTNM", "Michael"];

// TS 튜플 : 배열의 특정 index에서 해당 index의 타입까지 정의하는 것.
// 즉 index의 타입이 정해져있는 배열
const address: [string, number] = ["Seoul", 2];

// TS 객체
const obj: object = {};
const person: { name: string; age: number } = {
  name: "Jason",
  age: 19,
};

// TS 진위값
const check: boolean = true;
