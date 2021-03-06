// String.prototype.indexOf()
// const result = 'Hello world!'.indexOf('Hello') 
// -1 반환 : 일치하는 값이 없으면 -1을 반환
// console.log(result)

// const str = '0123'

// console.log(str.length)
// console.log('0123'.length)

// const str = 'Hello world!'

// console.log(str.indexOf('HEROPY') !== -1)
// console.log(str.slice(0, 3))
// console.log(str.replace('world', 'HEROPY'))

// const str = 'sjsj123455@naver.com'
// const str1 = '   Hello world   '

// console.log(str.match(/.+(?=@)/)[0]) // 정규표현식
// console.log(str.trim()) // 앞과 뒤 공백 문자 제거

// const pi = 3.14159265358979
// console.log(pi)

// const str = pi.toFixed(2)
// console.log(str)
// console.log(typeof str)




// const integer = parseInt(str)
// const float = parseFloat(str)
// console.log(integer)
// console.log(float)
// console.log(typeof integer, typeof float)

// console.log('abs: ', Math.abs(-12))

// console.log('min: ', Math.min(2, 8))

// console.log('max: ', Math.max(2, 8))

// console.log('ceil: ', Math.ceil(3.14))

// console.log('floor: ', Math.floor(3.14))

// console.log('round: ', Math.round(3.14))

// console.log('random: ', Math.random())

// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry'] //'Apple', 'Banana', 'Cherry' <- index

// console.log(numbers[1])
// console.log(fruits[2]) // indexing



// .length 
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(numbers.length)
// console.log(fruits.length)
// console.log([1, 2].length)
// console.log([].length)



// .concat 
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(numbers.concat(fruits))
// console.log(numbers)
// console.log(fruits)

// .forEach() : 배열 데이터의 아이템에 갯수 만큼 특정한 콜백함수를 반복적으로 처리하는 것
// const fruits = ['Apple', 'Banana', 'Cherry']

// fruits.forEach(function (element, index, array) {
//     console.log(element, index, array)
// });



// .map() : 인수로 사용하는 콜백의 내부에서 반환하는 하나의 데이터를 가지고 그 데이터를 모아놓은 새로운 배열을 만들어서 반환한다
// const fruits = ['apple', 'banana', 'cherry']

// const a = fruits.forEach(function(fruit, index) {
//     console.log(`${fruit}-${index}`)
// })
// const a = fruits.forEach((fruit, index) => {
//     console.log(`${fruit}-${index}`)
// })

// console.log(a)

// const b = fruits.map(function (fruit, index) {
//     return `${fruit}-${index}`
// })

// 하나의 객체 데이터를 기호를 사용해서 만들어내는 객체 리터럴 방식
// const b = fruits.map(function (fruit, index) {
//     return {
//         id: index,
//         name: fruit
//     }
// })

// 화살표 함수
// const b = fruits.map((fruit, index) => ({
//     id: index,
//     name: fruit
// }))

// console.log(b)





// .filter() :
// map()은 map()이라는 메소드가 사용된 그 배열 데이터의 갯수만큼 반복적으로 동작하면서 새롭게 반환된 배열데이터도 그 원본의 아이템의 갯수만큼 똑같이 만들어짐
// filter()는 일부내용을 걷어내서 새로운 배열을 만드는 개념
// const numbers = [1, 2, 3, 4]

// const a = numbers.map(number => number < 3)
// console.log(a)

// const b = numbers.filter(number => number < 3)
// console.log(b)

// console.log(numbers)



// .find() .findIndex()
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = fruits.find(fruit => /^B/.test(fruit))
// console.log(a)

// const b = fruits.findIndex(fruit => /^C/.test(fruit))
// console.log(b)

// .includes()
// const numbers = [1, 2, 3, 4]
// const fruits = ['apple', 'banana', 'cherry']

// const a = numbers.includes(3)
// console.log(a)

// const b = fruits.includes('HEROPY')
// console.log(b)

// .push() .unshift()
// 원본 수정됨 주의!
// push는 맨 뒤에 특정한 데이터 삽입
// unshift는 맨 앞에 특정한 데이터 삽입

// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// numbers.push(5)
// console.log(numbers)

// numbers.unshift(0)
// console.log(numbers)

// .reverse()
// 원본 수정됨 주의!

// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// numbers.reverse()
// fruits.reverse()

// console.log(numbers)
// console.log(fruits)

// .splice()
// 원본 수정됨 주의!
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// numbers.splice(2, 1)
// console.log(numbers)

// fruits.splice(2, 0, 'Orange')
// console.log(fruits)





// .assign : 출처 객체로부터 모든 열거할 수 있는(enumerable) 하나 이상의 속성(own properties)들을 목표 객체로 복사합니다. 이는 수정된 목표 객체를 반환합니다.
// const userAge = {
//     // key: value
//     name: 'Heropy',
//     age: 85 
// }
// const userEmail = {
//     name: 'Heropy',
//     email: 'sjsj123455@naver.com'
// }

// const target = Object.assign(userAge, userEmail)
// console.log(target)
// console.log(userAge)
// console.log(target === userAge) // 결과는 true 하지만 생긴게 똑같아서 같다고 나온 것이 아님

// const target = Object.assign({}, userAge)
// console.log(target)
// console.log(userAge)
// console.log(target === userAge) // false
// 똑같이 생긴 두개의 객체지만 사실상 다르다 이유는 userAge란 원본의 객체를 손상하지 않고 그대로 복사하여 target이라는 복사본을 만듬
// 결국 내용은 같지만 userAge가 바라보는 메모리 영역이 하나 있고 그것이 복사되서 새로운 메모리 주소로 할당이 되었기 때문에 서로 다르다


// const a = { k: 123 }
// const b = { k: 123 }
// console.log(a === b) // false


// keys(정적메소드)
// const user = {
//     name: 'Heropy',
//     age: 85,
//     email: 'sjsj123455@naver.com'
// }

// const keys = Object.keys(user)
// console.log(keys)
// // ['name', 'age', 'email']

// console.log(user['email']) // user부분의 email이라는 property의 값을 출력

// const values = keys.map(key => user[key])
// console.log(values)



// 구조 분해 할당(Destructuring assignment) = 비구조화 할당

// const user = {
//     name: 'Heropy',
//     age: 85,
//     email: 'sjsj123455@naver.com'
// }

// const { name: heropy, age, email, address = 'Korea' } = user
// E.g, user.address
// 만약에 user라는 객체 안에 속성의 값이 없는 경우 =을 사용하여 기본 값을 정해줄 수 있다
// 만약 name이라는 변수가 맘에 들지 않을 경우 :을 사용하여 대체 변수명을 써줄 수 있다. 

// console.log(`사용자의 이름은 ${name}입니다.`)
// console.log(`${name}의 나이는 ${age}세 입니다.`)
// console.log(`${name}의 이메일 주소는 ${email}입니다.`)
// console.log(address)


// const fruits = ['Apple', 'Banana', 'Cherry']
// const [a, b, c, d] = fruits
// console.log(a, b, c, d)
// 배열데이터는 객체데이터와 다르게 이름으로 추출하는 것이 아니고 순서대로 추출한다.
// 즉, 가운데에 Banana만 추출하고 싶은 경우
// const [, b] = fruits
// console.log(b)


// 전개 연산자 (Spread) : ...
// const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
// console.log(fruits)
// console.log(...fruits) // = console.log('Apple', 'Banana', 'Cherry', 'Orange')

// function toObject(a, b, c) {
//     return {
//         a: a,
//         b: b,
//         c: c
//     }
// }

// ...c: 나머지 모든 인수를 받는다. (rest parameter) 
// 배열의 값이 늘어날 경우 계속해서 매개변수를 추가할 수 없기 때문에 이 방법을 사용한다.
// function toObject(a, b, ...c) {
//     return {
//         a: a,
//         b: b,
//         c: c
//     }
// }

// const toObject = (a, b, ...c) => ({a, b, c})
// console.log(toObject(...fruits))



// 데이터 불변성 (Immutability)
// 따로 의도한 것이 아니라면 복사개념으로 실제 메모리상에서 분리해줘야함

// 원시 데이터 : String, Number, Boolean, undefined, null

// let a = 1
// let b = 4
// console.log(a, b, a === b)

// b = a
// console.log(a, b, a === b)

// a = 7
// console.log(a, b, a === b)

// let c = 1
// console.log(b, c, b === c)

// --------------------------------------------------
// |1:   1     |2:   4      |3:         |4:
// a에 1을 할당하고 새로운 데이터이기 때문에 1번 메모리에 들어가고 a는 1번을 가리킨다 b도 동일한 과정으로 2번 메모리를 가리킨다
// |1:   1     |2:   4      |3:         |4:
// b = a는 2번 메모리 값이 4에서 1로 바뀌는 것이 아니고 b는 2번 메모리에서 1번 메모리를 가리킨다
// |1:   1     |2:   4      |3:   7     |4:
// a에 7을 할당하는데 7은 새로운 데이터이기 때문에 3번 메모리로 들어가고 a는 3번 메모리를 가리킨다
// |1:   1     |2:   4      |3:   7     |4:
// c는 4번 메모리를 새롭게 만드는 것이 아니고 1번 메모리를 가리킨다


// => 즉, 원시 데이터는 새로운 데이터가 아니면 새롭게 만드는것이 아니고 항상 불변한다.
// --------------------------------------------------


// 참조형 데이터 : Object, Array, Function

// let a = { k : 1 }
// let b = { k : 1 }
// console.log(a, b, a === b) // false

// a.k = 7
// b = a
// console.log(a, b, a === b)

// a.k = 2
// console.log(a, b, a === b)

// let c = b
// console.log(a, b, a === c)

// a.k = 9
// console.log(a, b, c, a === c)

// --------------------------------------------------

// |1: { k : 1 } |2: { k : 1 } |3:         |4:
// a와 b는 각각 다른 메모리에 만들어진다

// |1: { k : 7 } |2: { k : 1 } |3:         |4:
// a.k는 값이 1이었지만 7을 할당하여 a.k는 7이 되었고 b에 변수 a를 할당함으로써 b는 2번 메모리 주소에서 1번 메모리 주소를 가리킨다

// |1: { k : 2 } |2: { k : 1 } |3:         |4:
// a.k에 2를 할당하여 a와 b는 모두 1번 메모리를 가리키기 때문에 값은 true다

// |1: { k : 9 } |2: { k : 1 } |3:         |4:
// a.k에 9를 할당하여 a와 b는 모두 1번 메모리를 가리키기 때문에 값은 true다

// => 참조형 데이터는 생긴것이 똑같아도 서로 같은 것이 아닐수도있다
// 복사개념 x 참조개념 o
// 한쪽을 수정하면 다른곳도 수정될 수 있음
// --------------------------------------------------



// 얕은 복사

// const user = {
//     name: 'Heropy',
//     age: 85,
//     emails: ['sjsj123455@naver.com']    
// }

// const copyUser = user
// const copyUser = Object.assign({}, user)
// const copyUser = {...user}
// console.log(copyUser === user)

// user.age = 22
// console.log('user', user)
// console.log('copyUser', copyUser)
// copyUser도 수정됨
// 이유 : user와 copyUser가 바라보는 메모리주소가 같기 때문이다

// console.log('------')
// console.log('------')


// 깊은 복사
// import _ from 'lodash'

// const user = {
//     name: 'Heropy',
//     age: 85,
//     emails: ['sjsj123455@naver.com']    
// }

// const copyUser = _.cloneDeep(user) // 깊은 복사 (lodash 사용)
// // console.log(copyUser === user)

// // user.age = 22
// // console.log('user', user)
// // console.log('copyUser', copyUser)

// console.log('------')
// console.log('------')

// user.emails.push('sjsj123455@naver.com')
// console.log(user.emails === copyUser.emails)
// console.log('user', user)
// console.log('copyUser', copyUser)

// 객체나 배열을 복사할 떄는 그 내부에 또 다른 참조 데이터가 없다는 전제하에서는 얕은 복사를 사용해도 되지만
// 또 다른 참조데이터가 있다면 깊은 복사를 사용하여한다. lodash를 사용한다


// 데이터 실습

// 가져오기 & 내보내기
// js는 import로 외부의 파일을 가져와서 사용할 수 있고 
// default export(따로 이름을 지정할 필요가 없는 통로), named export(이름을 지정할 필요가 있는 통로)가 존재한다
// main.js는 나가는 두 통로는 따로 활용하지 않고 가져오는(import) 것만 활용하고
// module.js(ex: getType.js, getRandom.js 등)는 가져오는 코드는 사용하지 않고 내보내는 코드를 사용하여
// 어느 특정파일에서 사용할 수 있도록 파일을 만들어 줄 수 있다 이것을 모듈이라고 한다
// 모든 js파일은 모듈이 될 수 있고 꼭 내보내는 파일이 있어야지만 모듈이 되는 것은 아니다

// 기본 통로로 내보내는 것은 이름을 작성하지 않아도 된다
// 마찬가지로 import할 때도 이름을 변경하여 작성해도 된다
// export default는 해당 js파일 내에서 딱 한번만 작성할 수 있다

// import _ from 'lodash' // from 'node_modules'!
// import checkType from './getType' // getType.js
// import random from './getRandom' // getRandom.js
// // import { random, user as heropy } from './getRandom'
// // named export는 {}로 묶어서 작성해줘야 한다

// // getRandom.js에서 random과 user를 한번에 꺼내오고 싶을 때는
// import * as R from './getRandom';

// console.log(_.camelCase('the hello world'))
// console.log(checkType([1, 2, 3]))
// console.log(random(), random())
// console.log(R)




// lodash 사용법

// 예제1
// import _ from 'lodash' // 기본통로로 가져오기

// const usersA = [
//     {userId: '1', name: 'HEROPY'},
//     {userId: '2', name: 'Neo'}
// ]

// const usersB = [
//     {userId: '1', name: 'HEROPY'},
//     {userId: '3', name: 'Amy'}
// ]

// const usersC = usersA.concat(usersB)
// console.log('concat', usersC)

// 이미 중복이 발생했을 경우 uniqBy
// .uniqBy(중복된 데이터가 들어있는 그 배열데이터, '중복을 구분할 고유한 속성')
// console.log('uniqBy', _.uniqBy(usersC, 'userId'))

// 중복이 발생할 수 있는 배열이 두개가 있고 이것을 아직 합치기 전이라면 unionBy
// .unionBy(배열1, 배열2, '중복을 구분할 고유한 속성')
// const usersD = _.unionBy(usersA, usersB, 'userId')
// console.log('unionBy', usersD)

// 즉, 배열데이터가 하나일 경우에는 uniqBy를 사용하고
// 배열데이터가 여러개일 경우에는 unionBy를 사용하는 개념이다

// 예제2
// import _ from 'lodash'

// const users = [
//     { userId: '1', name: 'HEROPY' },
//     { userId: '2', name: 'Neo' },
//     { userId: '3', name: 'Amy' },
//     { userId: '4', name: 'Evan' },
//     { userId: '5', name: 'Lewis' },
// ]

// const foundUser = _.find(users, {name: 'Amy'})
// const foundUserIndex = _.findIndex(users, {name: 'Amy'})
// console.log(foundUser)
// console.log(foundUserIndex)

// _.remove(users, {name: 'HEROPY'})
// console.log(users)




// JSON(JavaScript Object Notation)
// 자바스크립트의 객체 표기법
// 최대한 경량화를 시켜야하는 구조이고 단순하게 하나의 메모리만 참조할 수 있는 큰 덩어리의 문자 데이터로 관리가 되고
// 이것을 우리가 쓸 수 있는 실제 js형태로 변경이 되려면 JSON.parse()를 사용하고
// 이것을 다시 json 형태로 변경하려면 JSON.stringify()를 사용한다

// js파일 내에 속성에 '속성'으로 작성해도 무방하다
// 하지만 매번 그렇게 작성하는 것이 힘들기 때문에 특정상황이 아니면 그냥 작성한다
// 예외 사항은 속성이름 안에 특수기호가 들어가는 경우이다

// import myData from './myData.json'

// console.log(myData)

// const user = {
//     name: 'HEROPY',
//     age: 85,
//     emails: [
//         'sjsj123455@naver.com',
//         'HEROPY@naver.com'
//     ]
// }
// console.log('user', user)

// const str = JSON.stringify(user)
// console.log('str', str)
// console.log(typeof str)

// const obj = JSON.parse(str)
// console.log('obj', obj)



// Storage
// const user = {
//     name: 'HEROPY',
//     age: 85,
//     emails: [
//         'sjsj123455@naver.com',
//         'HEROPY@naver.com'
//     ]
// }

// localStorage.setItem('user', user) // 이렇게 하면 user의 값이 제대로 저장되지 않음
// localStorage.setItem('user', JSON.stringify(user))
// console.log(JSON.parse(localStorage.getItem('user')))
// localStorage.removeItem('user')

// 수정
// const str = localStorage.getItem('user')
// const obj = JSON.parse(str)

// obj.age = 22
// console.log(obj)

// localStorage.setItem('user', JSON.stringify(obj))


// OMDb API
// npm install axios를 터미널에 작성해서 설치를 해준다 개발 서버가 열려있으면 닫고 설치한다

// import axios from 'axios'

// function fetchMovies() {
//     axios
//     .get('http://www.omdbapi.com/?apikey=7035c60c&s=frozen')
//     .then(res => {
//         console.log(res)
//         const h1El = document.querySelector('h1')
//         const imgEl = document.querySelector('img')

//         h1El.textContent = res.data.Search[0].Title
//         imgEl.src = res.data.Search[0].Poster
//     })
// }

// fetchMovies()

const str = `
    010-1234-5678
    sjsj123455@naver.com
    http://www.omdbapi.com/?apikey=7035c60c&s=frozen
    The quick brown fox jumps over the lazy dog.
    abbcccdddd
`

// const regexp = new RegExp('the', 'gi') // 생성자 방식
const regexp = /fox/gi  // 리터럴 방식
console.log(str.match(regexp))
console.log(regexp.test(str))
console.log(str.replace(regexp, 'AAA'))
console.log(str) // 원본 데이터는 손상되지 않음 즉, 재할당을 해줘야함

// 재할당이 가능하게 하기 위해서는 재할당이 가능한 let을 사용해야함

// let str = `
//     010-1234-5678
//     sjsj123455@naver.com
//     http://www.omdbapi.com/?apikey=7035c60c&s=frozen
//     The quick brown fox jumps over the lazy dog.
//     abbcccdddd
// `

// const regexp = /fox/gi  
// str = str.replace(regexp, 'AAA')
// console.log(str) 


// 플래그
// let str = `
//     010-1234-5678
//     sjsj123455@naver.com
//     http://www.omdbapi.com/?apikey=7035c60c&s=frozen
//     The quick brown fox jumps over the lazy dog.
//     abbcccdddd
// `

// g : 전체 영역에서 본다
// m : 각각의 줄을 시작과 끝으로 본다

// const regexp = /\.$/gim
// console.log(str.match(regexp))


// 패턴

// let str = `
// 010-1234-5678
// sjsj123455@naver.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://localhost:1234
// 동해물과_백두산이 마르고 닳도록
// `

// console.log(str.match(/d$/gm))
// console.log(str.match(/^t/gim))
// console.log(str.match(/./g))
// console.log(str.match(/fox|dog/gm))
// console.log(str.match(/fox|dog/))
// console.log(str.match(/https?/g))

// console.log(str.match(/d{2}/g))
// console.log(str.match(/d{2,}/g))
// console.log(str.match(/d{2,3}/g))
// console.log(str.match(/\w{2,3}/g))

// 숫자를 포함한 영어 알파벳이 아닌 경계를 만든다 즉, 숫자나 알파벳이 2글자 이상 3글자 이하 연속 일치를 찾는다
// console.log(str.match(/\b\w{2,3}\b/g))

// console.log(str.match(/[fox]/g))
// console.log(str.match(/[0-9]/g))
// console.log(str.match(/[0-9]{1,}/g))
// console.log(str.match(/[가-힣]{1,}/g))

// console.log(str.match(/\w/g))
// console.log(str.match(/\b/g))
// console.log(str.match(/\bf\w{1,}\b/g))
// console.log(str.match(/\d/g))
// console.log(str.match(/\d{1,}/g))
// console.log(str.match(/\s/g))

// const h = `  the hello  world!  

// `
// console.log(h.match(/\s/g))
// console.log(h.replace(/\s/g, ''))

// console.log(str.match(/.{1,}(?=@)/g))
// console.log(str.match(/(?<=@).{1,}/g))

