const clockTitle = document.querySelector(".js-clock");

function getTime() {
    const date = new Date();

    const years = date.getFullYear();
    const months = date.getMonth() + 1;
    const dates = date.getDate();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    clockTitle.innerText = `${years}-${months}-${dates} ${hours}:${minutes}:${seconds}`;
}
getTime();
setInterval(getTime, 1000);

/*
실시간 시계
로컬 스토리지를 사용한 로그인
로컬 스토리지를 사용한 투두리스트
랜덤 배경 이미지
날씨와 위치 (geolocation)
여러분의 CSS 실력을 뽐내주세요
*/