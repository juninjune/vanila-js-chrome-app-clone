const quotes = [
  {
    quote: "자유롭고 놀랍게",
    author: "1악장",
  },
  {
    quote: "그녀의 공연 영상들이 전시되어있다.",
    author: "샬롯의 방",
  },
  {
    quote: "연주자가 커다란 가방을 질질 끌고 들어온다.",
    author: "샬롯",
  },
  {
    quote: "음악은 가방 속 연주자의 움직임 속에,",
    author: "가방이 만드는 소리 속에",
  },
  {
    quote: "가방 안에서 움직이면서 자신의 의상, 첼로, 활을 밖으로 내어놓는다.",
    author: "다양한 소품s",
  },
  {
    quote: "공을 울려 1악장이 끝났음을 알린다.",
    author: "관객",
  },
  {
    quote: "사랑스럽고 용감하게",
    author: "2악장",
  },
  {
    quote: "연주자는 오페라 샬로트로니크의 악보를 관객에게 나눠준다.",
    author: "0.",
  },
  {
    quote: "백조의 첫 소절을 연주한다.",
    author: "따라라란",
  },
  {
    quote: "대야 안으로 들어갈 때, 나올 때, 목소리로 선율을 이어간다.",
    author: "짜라랏짜짜",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
