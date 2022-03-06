// string이라는 타입을 사용하여 타입정의
const myName: string = "jake";

// 타입 별칭을 사용하여 타입 정의
type firstName = string
const friendName: firstName = "park"

// interface(인터페이스)에서의 타입 별칭을 사용한 타입 정의
type Teacher = {
    name: string;
    subject: string;
}

// interface와 type별칭의 비교
// interface teamMate {
//     name: string;
//     age: number;
// }

type teamMate = {
    name: string;
    age: number;
}

const jake: teamMate = {
    name: "재익",
    age: 30
}

type MyString = string;
const str: MyString = "Hello"

type Todo = {
    id: string;
    title: string;
    done: boolean;
}

function getTodo(todo: Todo) {

}