// 객체지향

// 1. 모듈 패턴
function person() {
  // 클로저 공간
  let age = 35;

  return {
    getAge: function () {
      return age;
    },
    setAge: function (data) {
      age = data;
    },
    // 얘네 둘이 클로저 공간에 접근할 수 있는 클로저 함수
  };
}

const person1 = person();
console.log(person1.getAge());

// 2. 사용자 정의 타입 패턴
function PersonType() {
  this.age = 35;
  // 이 값은 외부에서 은닉되지 않는다. 값을 숨길 수 없다.
}

PersonType.prototype.getAge = function () {
  return this.age;
};

// new는 this가 인스턴스를 가리키게 한다.
const instancePerson = new PersonType();
console.log(instancePerson.getAge());

// 3. 모듈 + 사용자 정의 타입

function PersonType2() {
  let age = 25;

  function innerPersonType() {}

  innerPersonType.prototype.getAge = function () {
    return age;
  };

  return innerPersonType;
}

const Person3 = PersonType2();
const person3 = new Person3();
console.log(person3.getAge());

// IIFE 패턴

const PersonType3 = (function PersonType3() {
  let age = 25;

  function innerPersonType() {}

  innerPersonType.prototype.getAge = function () {
    return age;
  };

  return innerPersonType;
})();
