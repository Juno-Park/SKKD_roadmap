

 //welcome1, welcome2, welcome3 중 하나.


let items = document.getElementsByClassName('item'); 
// const ranItemNum = Math.floor(Math.random()*31)+1 // = 1~31(item들 중 하나)

for(let i=0; i<items.length; i++){
  let ranNum = Math.floor(Math.random()*7)+1;
  let ranWel = 'welcome' + ranNum;
  items[i].classList.add(ranWel);
}

// 32개 중 랜덤 item 뽑은 후 ranWel을 할당 
//할당받은 랜덤 item은 itemlist에서 삭제

//여기서 부터 모달창 관련 스크립트

let openBtns = document.getElementsByClassName('item');
let modals = document.getElementsByClassName('modal');
let closeBtns = document.getElementsByClassName('close-btn');
let modBackground = document.getElementById('modBackground');

let oBtnLen = openBtns.length;
let cBtnLen = closeBtns.length;

for(let i = 0; i<oBtnLen; i++){
  openBtns[i].addEventListener('click',function(){
    modBackground.classList.add('active');
    modals[i].classList.add('active');
  })
}

for(let i = 0; i<cBtnLen; i++){
  closeBtns[i].addEventListener('click',function(){
    modBackground.classList.add('popup-close');
    modals[i].classList.add('popup-close'); //모달창이 닫히는 애니메이션과 관련된 class 추가
    setTimeout(function(){  //setTimeout은 설정한 지연시간 뒤에 실행되는 함수임.
      modBackground.classList.remove('active');
      modals[i].classList.remove('active'); 
      modBackground.classList.remove('popup-close');
    modals[i].classList.remove('popup-close');
    },400) //400 = 0.4s 애니메이션이 실행되는 0.4초의 지연시간을 가진 뒤에, active와 popup-close class를 동시에 삭제 함.
  })
}

for(let i = 0; i<cBtnLen; i++){
  modBackground.addEventListener('click',function(){
    modBackground.classList.add('popup-close');
    modals[i].classList.add('popup-close');
    setTimeout(function(){
      modBackground.classList.remove('active');
      modals[i].classList.remove('active');
      modBackground.classList.remove('popup-close');
      modals[i].classList.remove('popup-close');
    },400)
  })
}
//여기까지 모달창 관련 스크립트



//여기서 부터 마우스오버 이벤트 관련 스크립트

let hoverArr = [];
let hoverEventArr = [];

for(let i=1; i<=10; i++){ //hover~ 클래스를 가진 요소가 총 10개임.
  let h = 'hover';
  hoverArr.push(h + i);  // hoverArr = ["hover1","hover2","hover3","hover4","hover5" ... ]
  hoverEventArr.push(document.getElementsByClassName(hoverArr[i-1]));  
} 
// hoverEventArr = [["hover1","hover1"],["hover2","hover2"],["hover3","hove3r"],["hover4","hover4"], ... ]

let eventLen = hoverEventArr.length;

for(let i=0; i<eventLen; i++){
  let k = hoverEventArr[i];
  for(j=0; j<2; j++){ // ["hover~,hover~"] 2개의 index 밖에 없으므로..
    k[j].addEventListener('mouseover',function(){
      k[0].classList.add('hover');
      k[1].classList.add('hover');
    })}
}


for(let i=0; i<eventLen; i++){
  let k = hoverEventArr[i];
  for(j=0; j<2; j++){
    k[j].addEventListener('mouseout',function(){
      k[0].classList.remove('hover');
      k[1].classList.remove('hover');
    })}
}

//여기까지 마우스오버 이벤트 관련 스크립트


//여기서부터 하트이모지 이벤트 관련 스크립트

let hearts = document.getElementsByClassName('heart');
// let likedhearts = document.getElementsByClassName('likedheart');


let count = 1;

for(let i=0; i<hearts.length; i++){
  hearts[i].addEventListener('click', function(){
    
    if(count == 1){
      hearts[i].style.background = 'rgb(188, 130, 255)';
      count = 0;
    }
    else{
      hearts[i].style.background = 'rgb(209, 202, 226)';
      count = 1;   
    }
  }) 
}




