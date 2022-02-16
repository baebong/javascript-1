// heading 변수를 선언하고 h1태그를 값으로써 저장
let heading = document.querySelector("#heading");
// h1태그를 클릭하면 글자색깔을 "red"로 설정
heading.onclick = function () {
    heading.style.color = "red";
}