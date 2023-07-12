var Human = {
  sex: 0,
  age: null,
};

function callTest(name, age) {
  this.name = name;
  this.age = age;
  console.log(this.name, this.age, this.occupation);
}

callTest.call(Human, "moon", 26);
callTest.apply(Human, ["Moon", 24]);

// call은 함수의 인수가 없더라도 그 함수를 실행할 수 있음.
