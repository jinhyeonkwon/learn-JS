const quotes = [
  {
    quote : "하루에 3시간을 걸으면 7년 후에 지구를 1바퀴 돌 수 있다.",
    author : "사무엘 존슨",
  },
  {
    quote : "절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는 것이다.",
    author : "L.론허바드",
  },
  {
    quote : "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
    author : "앙드레 말로",
  },
  {
    quote : "평생 살 것처럼 꿈을 꾸어라. 그리고 내일 죽을 것처럼 오늘을 살아라.",
    author : "제임스 딘",
  },
  {
    quote : "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
    author : "이소룡",
  },
  {
    quote : "진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다.",
    author : "아인슈타인",
  },
  {
    quote : "겨울이 오면 봄이 멀지 않으리",
    author : "셸리",
  },
  {
    quote : "성공으로 가는 엘리베이터는 고장입니다. 당신은 계단을 이용해야만 합니다. 한 계단 한 계단씩",
    author : "조 지라드",
  },
  {
    quote : "중요한 건 당신이 어떻게 시작했는가가 아니라 어떻게 끝내는가이다.",
    author : "앤드류 매튜스",
  },
  {
    quote : "행운은 자주 문을 두드리나 미련한 자는 그것을 받아들이지 않는다.",
    author : "덴마크 속담",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");



const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = "- " + todaysQuote.author;