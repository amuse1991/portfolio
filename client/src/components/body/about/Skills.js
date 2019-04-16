import React, {Component} from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Button, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import classnames from 'classnames'
import '../../../static/css/card.css'

import SkillTab from "./SkillTab";

export default class Skills extends Component{
    
    javaSkills = [
        {
            title:"Java",
            level:3,
            imgName:"java-logo.png",
            tag:["Spring"],
            description:["가장 자신있는 언어", "대학 생활을 함께한 언어"]
        },
        {
            title:"Spring MVC",
            level:1,
            tag:["Spring"],
            imgName:"spring-logo.png",
            description:["팀 프로젝트 경험","관련 교육 이수"]
        },
        {
            title:"Spring Boot",
            level:2,
            tag:["Spring"],
            imgName:"springboot-logo.png",
            description:["개인 프로젝트 경험", "관련 스터디 참여중"]
        }
    ]

    javaScriptSkills = [
        {
            title:"JavaScript(ES6)",
            level:2,
            tag:["Node.js"],
            imgName:"js-logo.png",
            description:["졸업 프로젝트 경험"]
        },
        {
            title:"Node.js",
            level:2,
            tag:["Node.js"],
            imgName:"nodejs-logo.png",
            description:["졸업 프로젝트 경험", "express를 이용한 서버 구축 경험", "웹 소켓 사용 경험"]
        },
        {
            title:"React.js",
            level:2,
            tag:["Node.js"],
            imgName:"react-logo.png",
            description:["졸업 프로젝트 경험","현재 포트폴리오에 사용"]
        }
    ]

    pythonSkills = [
        {
            title:"Python",
            level:2,
            tag:["Others"],
            imgName:"python-logo.png",
            description:["네트워크 프로그래밍 경험","토이 프로젝트에 자주 사용"]
        }
    ]

    // dotNetSkills = [
    //     {
    //         title:"C#",
    //         level:1,
    //         tag:"Django/.NET MVC",
    //         imgName:"",
    //         description:["인턴쉽 경험"]
    //     },
    //     {
    //         title:".NET MVC5",
    //         level:1,
    //         tag:"Django/.NET MVC",
    //         imgName:"",
    //         description:["인턴쉽 경험"]
    //     }
    // ]

    dbSkills = [
        {
            title:"MySQL",
            level:2,
            tag:["DB/Server"],
            imgName:"mysql-logo.png",
            description:["개인 프로젝트 진행 경험"]
        },
        {
            title:"SQL Server",
            level:2,
            tag:["DB/Server"],
            imgName:"sqlserver-logo.png",
            description:["졸업 프로젝트 진행 경험"]
        },
        {
            title:"AWS",
            level:1,
            tag:["DB/Server"],
            imgName:"aws-logo.png",
            description:["다수 프로젝트에서 사용 경험","EC2","RDS"]
        }
    ]

    otherSkills = [
        {
            title:"git",
            level:2,
            tag:["Others"],
            imgName:"git-logo.png",
            description:["다수 프로젝트에서 사용"]
        },
        {
            title:"JIRA",
            level:1,
            tag:["Others"],
            imgName:"jira-logo.png",
            description:["인턴쉽 수행 중 사용"]
        },
        {
            title:"Unit Test(Junit)",
            level:1,
            tag:["Spring","Others"],
            imgName:"junit-logo.png",
            description:["개인 프로젝트에 사용 경험","TDD를 하는 개발자가 되기 위해 꾸준히 학습중"]
        },
        {
            title:"REST API 설계",
            level:1,
            tag:["Others"],
            imgName:"rest-logo.png",
            description:["개인 프로젝트에서 수행 경험","관심을 가지고 학습중"]
        }
    ]

    constructor(props){
        super(props)
        this.colCount = 0
        this.rowCount = 0
        this.maxCol = 5
        this.tags = ['ALL','Spring','Node.js','DB/Server','Others']
        this.state = {
          activeTab: 'ALL'
        };
    }

    toggle = (tab)=>{
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

    makeTabNav = ()=>{
        return(
            <Nav tabs>
                {this.tags.map((tag,idx)=>{
                    return(
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === `${tag}` })}
                            onClick={() => { this.toggle(`${tag}`); }}
                            >
                            {tag}
                            </NavLink>
                        </NavItem>
                    )
                })}
            </Nav>
        )
    }

    makeTabContent = (contentData)=>{
        // 데이터의 tag 배열에 해당하는 기술이 있는 것들을 필터링한다.
        let springData = contentData.filter(item=>item["tag"].some(el=>el ==="Spring"))
        let nodeData = contentData.filter(item=>item["tag"].some(el=>el ==="Node.js"))
        let dbAndServerData = contentData.filter(item=>item["tag"].some(el=>el === "DB/Server"))
        let otherData = contentData.filter(item=>item["tag"].some(el=>el === "Others"))

        return(
            <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="ALL">
                    <SkillTab skills={contentData}/>
                </TabPane>
                <TabPane tabId="Spring">
                    <SkillTab skills={springData}/>
                </TabPane>
                <TabPane tabId="Node.js">
                    <SkillTab skills={nodeData}/>
                </TabPane>
                <TabPane tabId="DB/Server">
                    <SkillTab skills={dbAndServerData}/>
                </TabPane>
                <TabPane tabId="Others">
                    <SkillTab skills={otherData}/>
                </TabPane>
            </TabContent>
        )   
    }


    render(){
        let skills = this.javaSkills
                        .concat(this.javaScriptSkills)
                        .concat(this.dbSkills)
                        .concat(this.pythonSkills)
                        .concat(this.otherSkills)
        return(
            <div>
                {this.makeTabNav()}
                {this.makeTabContent(skills)}
            </div>

            
        );
    }
}