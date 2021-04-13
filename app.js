window.onload = function() {
  let openBtns = document.getElementsByClassName('item');
  let modals = document.getElementsByClassName('modal');
  let closeBtns = document.getElementsByClassName('close-btn');

  // getElementById와 다르게, 변수에 ClassName으로 가져온 요소(단일객체) 를 할당하게 되면
  // 변수에는 NodeCollection(뭔 소린지 모르겠음) 이라는 형식으로 요소들이 할당됨
  // NodeCollection은 배열처럼(배열은 아님) 숫자 인덱스와 length속성을 가지고 있음
  // ㅅㅂ 이거 모르고 있다가 왜 오류뜨는지도 모르고 졸라 해맸음 이런 시발


  let oBtnLen = openBtns.length;
  let cBtnLen = closeBtns.length;

  for(let i = 0; i<oBtnLen; i++){
    openBtns.item(i).addEventListener('click',function(){
      modals.item(i).classList.add('active');
    })
  }

  for(let i = 0; i<cBtnLen; i++){
    closeBtns.item(i).addEventListener('click',function(){
      modals.item(i).classList.remove('active');
    })
  }
}
// openBtns[0].addEventListener('click',function(){
//   modBackground.classList.add('active');
//   modals[0].classList.add('active');})

// closeBtns[0].addEventListener('click',function(){
//   modBackground.classList.remove('active');
//   modals[0].classList.remove('active');})
  
// openBtns[1].addEventListener('click',function(){
//   modBackground.classList.add('active');
//   modals[1].classList.add('active');})

// closeBtns[1].addEventListener('click',function(){
//   modBackground.classList.remove('active');
//   modals[1].classList.remove('active');})

// openBtns[2].addEventListener('click',function(){
//   modBackground.classList.add('active');
//   modals[2].classList.add('active');})

// closeBtns[2].addEventListener('click',function(){
//   modBackground.classList.remove('active');
//   modals[2].classList.remove('active');})