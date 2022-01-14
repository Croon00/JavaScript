// 선택자로 접근하는 메서드 
// querySelector(css선택자) => 첫번째 요소만 
// querySelectorAll(css선택자 ) => 전체 요소. 배열 

// h3 태그 접근 
// document.getElementsByTagName('h3')[0];
var target1 = document.querySelector('h3');
// document.getElementsByTagName('h3');
var target2 = document.querySelectorAll('h3');
console.log('target1 = ', target1);
console.log('target2 = ', target2);

// ulBox1 클래스가 적용된 ul 요소안의 첫번째 li 
// .ulBox1 li:first-child
// .ulBox1 li:nth-child(1)
var target3 = document.querySelector('.ulBox1 li:first-child');
console.log('target3 = ', target3);
target3.innerHTML = 
        '<a href="http://coupang.com">coupang</a>';

// .ulBox2 안의 모든 li 요소안의 모든 a 요소를  
// 배열의 내용으로 교체하여라 
var broad_arr = ['kbs.com', 'mbc.com', 'sbs.com']
var target4 
    = document.querySelectorAll('.ulBox2>li>a');
console.log(target4);   
// [a, a, a]
// a 요소안의 텍스트만 출력 
for (var idx in target4) {
    // console.log(target4[idx].textContent);
    // console.log(target4[idx]);
    console.log(target4[idx].innerHTML);
}
// 배열을 이용하여 내용 교체 
for (var i=0; i<broad_arr.length; i++) {
    target4[i].innerHTML = 'http://'+broad_arr[i];
}

// 속성의 getter, setter
// 타겟노드.getAttribute(속성)
// : 속성값 얻기 
// 타겟노드.setAttribute(속성, 값)
// : 속성값 할당 
// 예) 
// <a href="URL" target="_blank" title="툴팁내용">
// 텍스트 
// </a>

// .ulBox1>li:nth-child(2)>a
var target5 
= document.querySelector('.ulBox1>li:nth-child(2)>a');
console.log(target5);
// <li><a href="#">메뉴B</a></li>
// href 값을 출력하기 
console.log(target5.getAttribute('href'));
// http://google.com
// href, title, target 값 설정 
target5.setAttribute('href','http://naver.com');
target5.setAttribute('title','네이버로 이동하기');
target5.setAttribute('target','_blank');
target5.innerHTML = 'Naver';
console.log(target5);

// box2 아이디안의 모든 img 요소 
var target6 = document.querySelectorAll('#box2 img');
console.log(target6);
// [img, img, img, img, img]
var img_file 
    = ['ah.png', 'cool.png', 'girl.png', 
        'go.png', 'anger.png'];
for  (var i=0; i<target6.length; i++) {
    target6[i].setAttribute('src',
                     'smile/'+img_file[i]); 
    target6[i].setAttribute('alt', img_file[i]); 
}        

// 노드의 css 적용하기 
// 노드.style.CSS속성 
// 노드.style.CSS속성 = 값
// 예) 배경색상 background-color
// 노드.style.backgroundColor
// 노드.style.backgroundColor='red'
// #box3 css 적용 
// 배경색상, 가로, 세로 
var target7 = document.querySelector('#box3');
console.log(target7);
// css 속성과 값 지정 
target7.style.backgroundColor = 'red';
target7.style.width = '100px';
target7.style.height = '200px';
// css 속성과 값 출력 
console.log('가로크기는?', target7.style.width);
console.log('세로크기는?', target7.style.height);
console.log('배경색상?', target7.style.backgroundColor);



