<<<<<<< HEAD
// 변수가 재선언 되는 것을 방지하기 위해 필요 시 재할당 하였음

// 1. 다음 string의 평균값을 구하세요.

let s = '5, 4, 10, 2, 5'
let sum = 0;
s = s.split(',');
for (let i of s) {
    sum += parseInt(i);
}
console.log(sum/s.length);

// 2. 다음 array의 각 자리수 합을 구하세요.
let a = [11, 22, 33, 111, 2]
sum = 0;
for (i of a) {
    i = i + '';
    for (c of i ) {
        sum += +c;
    }
}
console.log(sum);

// 3. 반복문만 사용하여 숫자 단위 콤마 찍기
let num = 1000000;
num = num + '';
temp = '';
for (let i = 0; i < num.length; i++) {
    temp = num[num.length - i - 1] + temp;
    if ((i + 1) % 3 ==0) {
        temp = ',' + temp;
    }
}
console.log(temp)

// 4. 반복문만 사용하여 숫자단위 콤마 없애기
num = '1,000,000';
temp = 0
for (c of num) {
    if (c ==',') {
        continue
    } else {
        temp = +c + 10*temp
    }
}
console.log(temp)

// 5. 문자열 뒤집기
s = 'hello world'
temp = ''
for (let c of s) {
    temp = c + temp;
}
console.log(temp)



// 추가
// 콤마 찍기 1
const n = 12345.6789;
const comma = n.toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

document.writeln(comma);

// 콤마 찍기 2
navigator.language
const n = 12345.6789;
n.toLocaleString('ko-KR');

// 콤마 찍기 3
let n = 12345678;
n += '';
reverse = '';
// 문자열 뒤집기
for (let i = 0; i < n.length; i++) {
  reverse = n[i] + reverse;
}
console.log(reverse);

let sample = '';
count = 0;
for (let i = 0; i < reverse.length; ++i) {
  if (count < 2){
    sample += reverse[i];
    ++count;
  } else {
    sample += reverse[i];
    sample += ','
    count = 0;
  }
}
console.log(sample);
=======
// 변수가 재선언 되는 것을 방지하기 위해 필요 시 재할당 하였음

// 1. 다음 string의 평균값을 구하세요.

let s = '5, 4, 10, 2, 5'
let sum = 0;
s = s.split(',');
for (let i of s) {
    sum += parseInt(i);
}
console.log(sum/s.length);

// 2. 다음 array의 각 자리수 합을 구하세요.
let a = [11, 22, 33, 111, 2]
sum = 0;
for (i of a) {
    i = i + '';
    for (c of i ) {
        sum += +c;
    }
}
console.log(sum);

// 3. 반복문만 사용하여 숫자 단위 콤마 찍기
let num = 1000000;
num = num + '';
temp = '';
for (let i = 0; i < num.length; i++) {
    temp = num[num.length - i - 1] + temp;
    if ((i + 1) % 3 ==0) {
        temp = ',' + temp;
    }
}
console.log(temp)

// 4. 반복문만 사용하여 숫자단위 콤마 없애기
num = '1,000,000';
temp = 0
for (c of num) {
    if (c ==',') {
        continue
    } else {
        temp = +c + 10*temp
    }
}
console.log(temp)

// 5. 문자열 뒤집기
s = 'hello world'
temp = ''
for (let c of s) {
    temp = c + temp;
}
console.log(temp)
>>>>>>> 422828b1abb04aeb7baf3f52505b46d5d1c43165
