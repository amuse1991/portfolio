import React, {Component} from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Button,  TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import classnames from 'classnames'
import '../../../static/css/card.css'

export default class Skills extends Component{
    
    javaSkills = [
        {
            title:"Java",
            level:3,
            imgName:"java-logo.png",
            tag:"Spring",
            description:["가장 자신있는 언어", "대학 생활을 함께한 언어"]
        },
        {
            title:"Spring MVC",
            level:1,
            tag:"Spring",
            imgName:"spring-logo.png",
            description:["팀 프로젝트 경험","관련 교육 이수"]
        },
        {
            title:"Spring Boot",
            level:2,
            tag:"Spring",
            imgName:"springboot-logo.png",
            description:["개인 프로젝트 경험", "관련 스터디 참여중"]
        }
    ]

    javaScriptSkills = [
        {
            title:"JavaScript(ES6)",
            level:2,
            tag:"Node.js",
            imgName:"js-logo.png",
            description:["졸업 프로젝트 경험"]
        },
        {
            title:"Node.js",
            level:2,
            tag:"Node.js",
            imgName:"nodejs-logo.png",
            description:["졸업 프로젝트 경험", "express를 이용한 서버 구축 경험", "웹 소켓 사용 경험"]
        },
        {
            title:"React.js",
            level:2,
            tag:"Node.js",
            imgName:"react-logo.png",
            description:["졸업 프로젝트 경험","현재 포트폴리오에 사용"]
        }
    ]

    pythonSkills = [
        {
            title:"Python",
            imgName:"",
            description:["네트워크 프로그래밍 경험","토이 프로젝트에 자주 사용"]
        }
    ]

    dotNetSkills = [
        {
            title:"C#",
            imgName:"",
            description:["인턴쉽 경험"]
        },
        {
            title:".NET MVC5",
            imgName:"",
            description:["인턴쉽 경험"]
        }
    ]

    dbSkills = [
        {
            title:"MySQL",
            imgName:"",
            description:["개인 프로젝트 진행 경험"]
        },
        {
            title:"SQL Server",
            imgName:"",
            description:["졸업 프로젝트 진행 경험"]
        }
    ]

    otherSkills = [
        {
            title:"git",
            imgName:"",
            description:["다수 프로젝트에서 사용"]
        },
        {
            title:"JIRA",
            imgName:"",
            description:["인턴쉽 수행 중 사용"]
        },
        {
            title:"Unit Test",
            imgName:"",
            description:["개인 프로젝트에 사용 경험","TDD를 하는 개발자가 되기 위해 꾸준히 학습중"]
        },
        {
            title:"REST API 설계",
            imgName:"",
            description:["개인 프로젝트에서 수행 경험","관심을 가지고 학습중"]
        },
        {
            title:"AWS",
            imgName:"",
            description:["다수 프로젝트에서 사용 경험","EC2","RDS"]
        }
    ]

    constructor(props){
        super(props)
        this.colCount = 0
        this.rowCount = 0
        this.maxCol = 5
        this.tags = ['ALL','Spring','Node.js','DB','Others']
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

      
    getCardColor = (level)=>{
        switch(level){
            case 3:
                return "primary"
            case 2:
                return "info"
            case 1:
                return "warning"
        }
    }

    makeCard = (cardData, color)=>{
        if(color==undefined){
            color = "primary"
        }

        const imageContext = require.context('../../../../public/icons', true);
        let imageSrc = imageContext(`./${cardData.imgName}`)

        return(
            <Card body outline className="text-center" color={color}>
                {/* 이미지가 정상적으로 로드된 경우에만 이미지 표시 */}
                {imageSrc==undefined?null:<CardImg width="15%" height="auto" top src={imageSrc}/>} 
                <CardTitle>{cardData.title}</CardTitle>
                {cardData.description.map((descItem)=>
                    descItem==undefined?null:<CardText>{descItem}</CardText>
                )}
            </Card>
        )
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
        let springData = contentData.filter(item=>item["tag"] === "Spring")
        let nodeData = contentData.filter(item=>item["tag"] === "Node.js")

        return(
            <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="ALL">
                    <Row>
                        {contentData.map((content)=>{
                            let color = this.getCardColor(content.level)
                            return(
                                    <Col>{this.makeCard(content,color)}</Col>
                                
                            )
                        })}
                    </Row>
                </TabPane>
                <TabPane tabId="Spring">
                    <Row>
                        {springData.map((content)=>{
                            let color = this.getCardColor(content.level)
                            return(
                                    <Col>{this.makeCard(content,color)}</Col>
                                
                            )
                        })}
                    </Row>
                </TabPane>
                <TabPane tabId="Node.js">
                    <Row>
                        {nodeData.map((content)=>{
                            let color = this.getCardColor(content.level)
                            return(
                                    <Col>{this.makeCard(content,color)}</Col>
                                
                            )
                        })}
                    </Row>
                </TabPane>
            </TabContent>
        )   
    }


    render(){
        let skills = this.javaSkills.concat(this.javaScriptSkills)
        return(
            <div>
                {this.makeTabNav()}
                {this.makeTabContent(skills)}
            </div>

            
        );
    }
}