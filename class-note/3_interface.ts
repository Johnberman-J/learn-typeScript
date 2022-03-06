interface User {
    name: string;
    age: number;
    height: number;
    address: string;
}

// 변수에 활용한 인터페이스 예시
const friend1: User = {
    name: "jake",
    age: 19,
    height: 111,
    address: "torronto"
}

//  함수에 활용한 인터페이스 예시
function getUser(user: User) {
    console.log(user)
}
const freind2 = {
    name: "park",
    age: 27,
    height: 123,
    address: "tokyo"
}
getUser(freind2)  // friend2에 address가 정의 되어 있지 않아서 오류가 뜨고 있음을 알 수 있다!

// 함수구조에 활용한 인터페이스 예시
interface SumFucntion {
    (a: number, b: number): number
}

var sum: SumFucntion;
sum = function(a: number, b: number): number  {
    return a + b
}

// 인덱싱 => index의 타입은 number, 배열(array)의 타입은 string
interface StringArray {
    [index: number]: string
}

var arr = ['a', 'a', 'c'];
arr[0] = "d"  // 위 편에서 string으로 정의 되어있는데 10이라서 문제가 발생함

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/
}

obj['cssFile'] = /abc/ // 위편에서 정규표현식으로 정의 되어있는데 string이라서 문제가 발생함

//인터페이스 확장(상속)
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    // Developer는 Person 인터페이스를 상속 받았기때문에 name과 age도 명시해줘야한다
    language: string;
}

var johnberman: Developer = { // johnberman은 name, age, language 3가지 속성이 정의 되어야 한다
    name: 'jason',
    age: 19,
    language: 'NodeJS',
}

interface personAge {
    age: number,
}

function printAge(obj: personAge) {
    console.log(obj.age)
}

let person = { name: "jake", age: 28}
printAge(person)