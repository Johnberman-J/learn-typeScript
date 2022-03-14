// 숫자형 Enum
// enum Shoes {
//     Nike,          // 숫자형 ENUM에서 초기화를 따로 해주지 않으면 0부터 시작
//     Adidas,
//     Converse
// }

// const myShoes = Shoes.Converse;
// console.log(myShoes) // 이때 myShoes의 값은 2가 출력됨

// 문자형 Enum
enum Shoes {
    Nike = "나이키",          
    Adidas = "아디다스",
    Converse = "컨버스"
}

const myShoes = Shoes.Converse;
console.log(myShoes) // 이때 myShoes의 값은 이제 "컨버스"가 됨


// 예제
enum Answer {
    Yes = "Y",
    No = "N"
}

function askQuestion(answer: Answer) {
    if (answer == Answer.Yes) {
        console.log("정답!")
    }
    if (answer == Answer.No) {
        console.log("땡!")
    }
}

askQuestion(Answer.Yes)
askQuestion("Yes")  // 인자인 answer가 enum타입인 Answer를 받기때문에 오류발생



// askQuestion("네")
// askQuestion("y")
// askQuestion("예스")
// askQuestion("Yes")