// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 11;
}

// 함수에 타입을 정의하는 방식
function substract(a: number, b: number): number {
  return a - b;
}

// 함수 파라미터를 제한하는 특성 => sum함수는 인자가 2개 정의 되어있다
// 그러나 3개를 인자로 입력하고 있기때문에 오류가 발생
sum(10, 20, 30);

// 함수의 옵셔널 파라미터: 이를 통해서 함수의 인자갯수를 선택적으로 사용 할 수 있다.
function log(a: string, b?: string, c?: string) {
  return;
}

log("Hello World");
log("Hello", " ", "World", "!"); // 3개까지 optional parameter를 사용 할 수 있는데 4개를 써서 오류발생
