// 함수 calc() 선언과 구현
function calc() {
    // 올해 년도를 변수 cuurentYear에 저장
    let currentYear = 2021;
    // 사용자로부터 입력을 받은 값을 변수 birthYear에 저장
    let birthYear = prompt("태어난 년도를 입력하세요.", "YYYY");
    // 변수 age를 0으로 초기화
    let age = 0;
    // 실제 나이를 구하기 위한 코드
    age = currentYear - birthYear + 1;
    // document : 현재 웹브라우저의 페이지 querySelector() : id가 result인 웹 요소(div의 id값)를 의미
    // innerHTML : 대입한 값으로 html문서에 대체
    document
        .querySelector("#result")
        .innerHTML = "당신의 나이는 " + age + "세 입니다.";
}