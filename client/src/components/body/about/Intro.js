import React, {Component} from 'react';
import Keywords from "./Keywords";
import { Button, UncontrolledTooltip } from 'reactstrap';
import "../../../static/css/intro.css";

export default class Intro extends Component{

    render(){
        return(
            <div className="intro-wrapper">
                <p className="text-center">
                    안녕하세요. <br/>
                    신입 백엔드 개발자 신윤호입니다.<br/>
                    백엔드 개발에 흥미를 가지고 컴퓨터공학과에 편입하여 본격적으로 개발을 시작했으며<br/>
                    재학 기간 동안 
                    <span id="popover-related-class" className="popover-span">관련 수업 이수</span>, 
                    <span id="popover-internship" className="popover-span">웹 개발 직무 인턴쉽</span>을 수행했습니다.<br/> 
                    뿐만 아니라 웹을 주제로 
                    <span id="popover-graduation-project" className="popover-span">졸업 프로젝트</span>
                    를 진행했으며, 
                    <span id="popover-personal-project" className="popover-span">개인 프로젝트</span>
                    또한 진행했습니다.<br/>
                    <br/>
                    저는 개발자로써 다음과 같은 가치관과 역량을 지니고 있습니다. 
                </p>
                <Keywords title="Can-Do Attitude"/>
                <Keywords title="Responsible"/>
                <Keywords title="Self-Motivated"/>
                <Keywords title="Cooperative"/>

                <UncontrolledTooltip placement="top" target="popover-related-class">
                    1
                </UncontrolledTooltip>
                <UncontrolledTooltip placement="top" target="popover-internship">
                    2
                </UncontrolledTooltip>
                <UncontrolledTooltip placement="top" target="popover-graduation-project">
                    3
                </UncontrolledTooltip>
                <UncontrolledTooltip placement="top" target="popover-personal-project">
                    4
                </UncontrolledTooltip>
            </div>
        );
    }
}