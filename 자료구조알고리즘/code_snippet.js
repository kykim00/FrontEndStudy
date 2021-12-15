// 플랫폼에 익숙해져야 한다. 프로그래머스, 구름EDU
// - 사용 가능 라이브러리는 미리 확인!
// 언어 선택(속도 : C++, 풀이 : Python)
// 코드 스니펫(트리, 검색, 순열, 조합, 최단경로(예를 들어 다익다익스트라)), Cheat sheet 와 A4용지는 미리 준비
// 유용한 라이브러리는 미리 정리
// 예외처리 기억해두기

// 몸풀기 2문제 -1번

// https://codingdojang.com/scode/393?answer_mode=hide
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

// 빈 배열을 만드는 방법
let s = Array(10);
s[2] = undefined;
s[3] = null;
// [비어있음 x 2, undefined, null, 비어 있음 x 6]
s.length = 20;
// [비어있음 x 2, undefined, null, 비어 있음 x 16]
Array(100)
  .fill(1)
  .map((value, index) => value + index);
[...Array(100)].map((_, i) => i + 1);
Array(100)
  .fill()
  .map((_, i) => i + 1);
// [1, 2, 3 ... 100]
".".repeat(10);
// '..........'
".".repeat(10).split(".");
// ['','', ... ''] (11)
".".repeat(9).split(".");
// ['','', ... ''] (10)
Array.from("abc");
// [a, b, c]
Array.from("a".repeat(10));
// [a, a, a ... a]
Array.from("ab".repeat(10));
// [a, b, a, b .. a, b] (10)

// 정답
(
  Array(100)
    .fill(1)
    .map((value, index) => value + index) + ""
).split("8").length - 1;

///////////////////////////////////
// https://codingdojang.com/scode/408?langby=javascript#answer-filter-area
// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

// 몸풀기 2문제 - 2번
let s = [1, 3, 4, 8, 13, 17, 20];
let arr = new Array();
// for (let i = 0; i < s.length-1; i++) {
//     console.log(s[i+1], s[i])
//     console.log(s[i+1] - s[i])
// }
for (let i = 1; i < s.length; i++) {
  // console.log(s[i], s[i-1])
  // console.log(s[i] - s[i-1])
  arr.push(s[i] - s[i - 1]);
}

// arr.indexOf(5)
// let result = arr.indexOf(Math.min.apply(null, arr));
// Math.min(...arr)
let result = arr.indexOf(Math.min(...arr));
console.log(s[result], s[result + 1]);

// 몸풀기 2문제 - 2번 정답(다른 풀이)
let s = [1, 3, 4, 8, 13, 17, 20];
// let ss = [3, 4, 8, 13, 17, 20];

const zip = (a, b) => a.map((value, index) => [value, b[index]]);
// const zip = (a, b) => a.map((v, i)=>[v, b[i]]);
// zip([1, 3, 4], [10, 20, 30]);
// zip(s.slice(), s.slice(1)).slice(0, -1)
let pairs = zip(s.slice(0, s.length - 1), s.slice(1));

// -1 순서 유지
// 1 순서 바꿈
// 오름차순 정렬 :
//    뒤에 값이 더 크면 순서 유지
//    뒤에 값이 작으면 순서 바꿈

function compare(a, b) {
  if (a[1] - a[0] < b[1] - b[0]) {
    return -1;
  }
  if (a[1] - a[0] > b[1] - b[0]) {
    return 1;
  }
  return 0;
}

pairs.sort(compare);
pairs.sort(compare)[0];

//////// 쉬운 풀이 /////////

let s = [1, 3, 4, 8, 13, 17, 20];

const zip = (a, b) => a.map((value, index) => [value, b[index]]);
let pairs = zip(s.slice(0, s.length - 1), s.slice(1));

// 초기값, for문 안에서는 최솟값을 비교하는 용도로 사용
// MAX_SAFE_INTEGER를 주로 사용합니다!
// let init = Number.MAX_SAFE_INTEGER;
// let init = Number.MIN_SAFE_INTEGER
let init = pairs[0][1] - pairs[0][0];
// result는 최종 결과값
let result = [];

for (let i of pairs) {
  // console.log(i);
  if (init > i[1] - i[0]) {
    init = i[1] - i[0];
    result = i;
  }
}

console.log(result);

// 목차(기본 자료구조 및 알고리즘)
// 1. 스택과 큐
// 2. 연결리스트(linked list)
// 3. 정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회

// 1. 스택과 큐
class Stack {
  constructor() {
    this.arr = [];
  }

  push(data) {
    this.arr.push(data);
  }

  pop(index = this.arr.length - 1) {
    if (index === this.arr.length - 1) {
      return this.arr.pop();
    }

    let result = this.arr.splice(index, 1);
    // let result = this.arr[index]
    // this.arr = [...this.arr.slice(0, index), ...this.arr.slice(index + 1)]
    return result;
  }

  empty() {
    if (this.arr.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  top() {
    return this.arr[this.arr.length - 1];
  }

  bottom() {
    return this.arr[0];
  }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(100);
s.push(200);
s.push(300);

s.pop();
console.log(s);

s.pop(2);
console.log(s);

// 2. 연결리스트(linked list)
// 2.1 첫번째 시간
// 연결리스트, 메모리 효율을 위해 사용되는 경우가 많음
// js에서는 그다지 메모리 효율이 좋지 못함
// 개념 : https://en.wikipedia.org/wiki/Linked_list
// 알고리즘 시각화 : https://visualgo.net/ko

const list = {
  head: {
    value: 90,
    next: {
      value: 2,
      next: {
        value: 77,
        next: {
          value: 35,
          next: null,
        },
      },
    },
  },
};

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;

    this.현재노드 = undefined;
    this.데이터수 = 0;
  }

  length() {
    return this.데이터수;
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
    this.데이터수 += 1;
  }
}

// console
l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
l.length();

/////////

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;

    this.데이터수 = 0;
  }

  get fullData() {
    // return 'hello world'
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    let s = "";
    for (let i = 0; i < this.데이터수; i++) {
      s += `${순회용현재노드.data}, `;
      순회용현재노드 = 순회용현재노드.next;
    }
    return JSON.parse(`[${s.slice(0, -2)}]`);
  }

  length() {
    return this.데이터수;
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
    this.데이터수 += 1;
  }

  toString() {
    // return 'hello world';
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    let s = "";
    for (let i = 0; i < this.데이터수; i++) {
      s += `${순회용현재노드.data},`;
      순회용현재노드 = 순회용현재노드.next;
    }
    return s.slice(0, -1);
  }

  insert(index, data) {
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    for (let i = 0; i < index - 1; i++) {
      순회용현재노드 = 순회용현재노드.next;
    }

    let 새로운노드 = new Node(data);
    새로운노드.next = 순회용현재노드.next;
    순회용현재노드.next = 새로운노드;

    this.데이터수 += 1;
  }
}

// console
l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
l.length();
console.log(l.fullData);

// console
l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
l.length();

////////

// 3. 정렬
// 3.1 선택정렬
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];

let 길이 = 입력값.length;

for (let i = 0; i < 길이; i++) {
  let 최솟값 = Math.min(...입력값);
  정렬된배열.push(최솟값);
  입력값.splice(입력값.indexOf(최솟값), 1);
}

console.log(정렬된배열);

// 3.2 삽입정렬(자기가 들어갈 위치를 찾아감!, O(n**2))
let 전 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 후 = [];

let 전 = [22, 33, 12, 32, 64, 72, 222, 233];
let 후 = [199];

let 전 = [33, 12, 32, 64, 72, 222, 233];
let 후 = [22, 199];

let 전 = [12, 32, 64, 72, 222, 233];
let 후 = [22, 33, 199];

let 전 = [32, 64, 72, 222, 233];
let 후 = [12, 22, 33, 199];

let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

function 삽입값이들어갈인덱스(정렬된배열, 삽입값) {
  for (const i in 정렬된배열) {
    if (삽입값 < 정렬된배열[i]) {
      return i;
    }
  }
  return 정렬된배열.length;
}

for (let i = 0; i < 배열의길이; i++) {
  let 삽입값 = 입력값.shift();
  let 인덱스 = 삽입값이들어갈인덱스(정렬된배열, 삽입값);
  정렬된배열.splice(인덱스, 0, 삽입값);
  console.log(
    `인덱스 : ${인덱스}\n삽입값 : ${삽입값}\n 정렬된배열 : ${정렬된배열}\n`
  );
}

// 3.3 병합정렬(Worst와 Best 모두 O(nlogn), 어떤 정렬보다 빠름, 동일 할 수 있음)
// let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];
// let 정렬된배열 = [];

// step 1
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열) {
  let 입력배열의길이 = 입력배열.length;
  if (입력배열의길이 <= 1) {
    return 입력배열;
  }
  let 중간값 = parseInt(입력배열의길이 / 2);
  let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
  let 그룹둘 = 병합정렬(입력배열.slice(중간값));
  return `그룹하나 : ${그룹하나} \n 그룹둘 : ${그룹둘}\n\n`;
}

console.log(병합정렬(입력값));
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회

// 목차(실전 코딩테스트 풀이)
// 1. 18년도
// 2. 19년도
// 3. 20년도
// 4. 21년도
