// Date 객체 생성
const date = new Date();

const renderCalendar = () => {

  // year-month 채우기
 
  // 지난 달 마지막 Date, 이번 달 마지막 Date

  // Dates 기본 배열들
  const prevDates = [];
  const thisDates = [];
  const nextDates = [];

  // prevDates 계산

  // nextDates 계산

  // Dates 합치기
  const dates = prevDates.concat(thisDates, nextDates);

  // Dates 정리
  
  // Dates 그리기

  // 오늘 날짜 그리기

}
renderCalendar();

// 이번달, 다음달을 보여줄 nav 구현
const prevMonth = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
}

const nextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
}

const goToday = () => {
  date = new Date();
  renderCalendar();
}