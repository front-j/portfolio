import React from "react";
import vegemate from "./images/vegemate.gif";
import naum from "./images/naum.gif";

const projects = [
  {
    id: 1,
    title: "ToDoList",
    description: (
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li>React</li>
        <li>HTML/CSS</li>
        <li>styled-components</li>
        <li>ContextAPI</li>
      </ul>
    ),
    modalDes: (
      <>
        <p>React 실습으로 만든 TodoList입니다.</p>
        <p>
          JavaScript의 Date객체를 사용해 상단에서 오늘의 날짜를 표시해주고, 할
          일 목록을 체크하고 추가, 삭제할 수 있도록 기능을 구현하였습니다.
        </p>
        <p>디자인에 사용된 아이콘은 react-icons 라이브러리를 사용하였습니다.</p>
      </>
    ),
    url: "https://github.com/front-j/react-todo-list/raw/main/result.gif",
    link: (
      <a
        href="https://github.com/front-j/react-todo-list"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repository 바로가기
      </a>
    ),
  },
  {
    id: 2,
    title: "Calendar",
    description: (
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
      </ul>
    ),
    modalDes: (
      <>
        <p>Vanilla JavaScript로 구현한 캘린더입니다.</p>
        <p>
          JavaScript의 Date객체를 사용하여 날짜를 가져오고, 좌측에서는 오늘의
          날짜를 표시해주고, 우측에서는 월간 달력을 볼 수 있습니다.
        </p>
        <p>
          또한, 색상 버튼을 추가하여 색상을 변경할 수 있는 기능을
          추가하였습니다.
        </p>
      </>
    ),
    url: "https://github.com/front-j/js-calendar/raw/main/result.gif",
    link: (
      <a
        href="https://github.com/front-j/js-calendar"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repository 바로가기
      </a>
    ),
  },
  {
    id: 3,
    title: "AI Naum Service",
    description: (
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li>Django</li>
        <li>HTML/CSS</li>
        <li>Python</li>
        <li>Selenium</li>
        <li>MongoDB</li>
        <li>Bootstrap</li>
      </ul>
    ),
    modalDes: (
      <>
        <p>팀 프로젝트로 진행한 Naum 웹서비스입니다.</p>
        <p>
          네이버 쇼핑의 식품 카테고리 상품에 관하여 상품제목을 분석하는 AI
          기능을 구현하고, 추가적으로 해당 상품의 트렌드를 분석해주는 서비스를
          제공합니다.
        </p>
        <p>
          Django 프레임워크를 사용하여 웹을 구현하고, Selenium과 openAPI를
          활용한 크롤링을 진행하였으며, 상품과 상품제목에 대한 텍스트 분석을
          진행하였습니다.
        </p>
      </>
    ),
    url: `${naum}`,
    link: (
      <a
        href="https://github.com/kim-so-hyeon/Naver-Shopping-Title-Recommendation-Service"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repository 바로가기
      </a>
    ),
  },
  {
    id: 4,
    title: "채식메이트",
    description: (
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li>(진행 중)</li>
        <li>Django</li>
        <li>HTML/CSS</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
      </ul>
    ),
    modalDes: (
      <>
        <p>
          팀 프로젝트로 공공데이터활용 아이디어 공모전에 참가했던 아이디어를 웹
          구현 진행 중에 있습니다.
        </p>
        <p>
          goormIDE를 이용하여 협업을 진행하였으며, Django 프레임워크와
          Bootstrap을 활용하였습니다.
        </p>
        <p>아직 미완성의, 진행 중인 프로젝트입니다.</p>
      </>
    ),
    url: `${vegemate}`,
    link: "링크가 없습니다.😭",
  },
];

export default projects;
