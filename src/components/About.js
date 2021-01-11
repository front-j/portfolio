import React from "react";
import "./Style.scss";
import { FaGraduationCap, FaBuilding, FaBookOpen } from "react-icons/fa";

function About() {
  return (
    <div className="about">
      <h1 className="table">ABOUT</h1>
      <div>
        <div className="introduce">
          안녕하세요. 주니어 프론트엔드 개발자 정아영입니다😊
          <br />
          빅데이터 분석 과정을 배우다가 웹서비스를 만드는 팀 프로젝트를 진행하며
          웹 제작에 흥미를 느꼈습니다. 대학교를 다니면서도 프로그래밍에 관심이
          있어 공대 수업을 들었고, 디자인에도 관심이 많아 퇴근 후에 컴퓨터
          그래픽 교육을 수강하곤 했습니다.
          <br />
          데이터와 UI를 잘 이해하는 개발자가 되고 싶습니다. 비교적 늦은 출발일
          수도 있지만, 프론트엔드 개발자로 새로운 도전을 하고자 합니다.
        </div>
        <div className="career">
          <ul>
            <li>
              <FaGraduationCap />
              <p className="date">2017.08</p>대구대학교 문헌정보학과 졸업
            </li>
            <li>
              <FaBuilding />
              <p className="date">2018.02-2020.02</p> 대학병원 계약직 의학사서
            </li>
            <li>
              <FaBookOpen />
              <p className="date">2020.03-2020.08</p> SD아카데미-빅데이터 분석
              전문가 양성과정 이수
            </li>
            <li>
              <FaBookOpen />
              <p className="date">2020.08</p> 공공데이터 청년 인턴십 직무교육
              이수
            </li>
            <li>
              <FaBuilding />
              <p className="date">2020.09-2020.12</p> 공공데이터 청년 인턴십
            </li>
            <li>
              <FaBookOpen />
              <p className="date">2020.11-</p> 패스트캠퍼스 프론트엔드 개발
              올인원 과정 수강
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
