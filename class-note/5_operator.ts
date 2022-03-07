function logMessage(value: string | number) {
    console.log(value);
}

logMessage("Hello World!");
logMessage(100);

// any를 사용하는 경우
// function getAge(age: any) {
//     // age의 타입이 any로 추론되기 때문에 숫자 관련된 코드가 자동 완성되지 않는다.
//     age.toFixe(); 
//     return age;
//   }
  
//   유니온 타입을 사용하는 경우
  function getAge(age: number | string) {
    if (typeof age === 'number') {
      // age의 타입이 `number`로 추론되기 때문에 쉽게 자동완성 할 수 있다.  
      age.toFixed(); 
      return age;
    }
    if (typeof age === 'string') {
      return age;
    }
    return new TypeError('age must be number or string');
  }

  interface Developer {
      name: string;
      skill: string;
  }

  interface Person {
      name: string;
      age: number;
  }

  function getSomeone(someone: Developer & Person) {
      someone.name;
      someone.skill;
      someone.age;
  }