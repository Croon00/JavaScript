// DOM 이란? 
// Document Object Model 
// HTML 요소를 제어하는 역할 
// 노드 
// 부모, 자식, 자손, 형제 
// 트리구조 

// HTML 노드 접근 메서드 
// - getElementsByTagName(태그명) 
//  : 태그 이름을 통해 태그 객체를 가져온다. 배열 
// - getElementById(아이디명) 
// : id 속성을 통해 태그 객체를 가져온다.
// - getElementsByClassName(클래스명) 
// : class 속성을 통해 태그 객체를 가져온다. 배열 

// 속성 
// length 길이 
// innerHTML : 내용 표시 getter  
// innerHTML = 태그 setter
// tagName 해당요소의 태그명 반환 
// childNodes 자식요소 

// getElementsByTagName(태그명)
// 모든 li 노드 접근 
var liNode = document.getElementsByTagName('li');
console.log(liNode, typeof(liNode)); // "object"
console.log(liNode.length);
console.log(liNode.tagName); // undefined
console.log(liNode[0].tagName); // LI
// 첫번째 요소의 컨텐츠 
console.log(liNode[0].innerHTML); // 목록
// 두번째 요소의 컨텐츠 교체 
liNode[1].innerHTML = "DOM";
console.log(liNode[1].innerHTML);

// 모든 h2 노드 접근 
var h2Node = document.getElementsByTagName('h2');
console.log(h2Node);
h2Node[0].innerHTML = "<span style='color:red'>오늘</span>도 <br> 좋은 하루";
console.log(h2Node[0].childNodes);
// [span, text, br, text]

// getElementById(아이디명)
var box1 = document.getElementById('box1');
console.log("=================")
console.log(box1); // HTML 태그 
console.log(typeof(box1));
console.log(box1.innerHTML); // 삽입된 모든 소스 
console.log(box1.childNodes);
console.log(box1.tagName);
console.log(box1.textContent); // 삽입된 텍스트만 표시 

// box3안에 n단 출력 
var box3 = document.getElementById('box3');
// box3.innerHTML= " 3 X 1 = 3 <br>  3 X 2 = 6 ... ";
var n = 3;
for (var i=1; i<=9; i++) {
    // = 내용 교체 
    // += 기존 데이타에 새로운 데이타가 누적 
    box3.innerHTML += n + " X " + i + " = " + (n*i) + "<br>";
}

// getElementsByClassName(클래스명)
var pBox = document.getElementsByClassName('pBox');
// 태그명.클래스명 으로 구성된 배열로 반환 
console.log(pBox);
//[p.pBox, p.pBox, p.pBox, div.pBox]
console.log(pBox[0]);

// pBox 클래스가 적용된 div 태그안에 
// 1~50사이의 숫자중에서 3의 배수만 
// 출력하기 

pBox[3].innerHTML = '';
for (var i=1; i<=50; i++) {
    if (i%3==0) {
     pBox[3].innerHTML += i + " ";
    //  pBox.innerHTML += i + " ";
   }
}
