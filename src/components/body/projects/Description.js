import React, { Component } from 'react';
import {Element} from 'react-scroll';
import {Button, Table, CardBody, Card, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from "reactstrap";
import "../../../static/css/project.css"
export default class Description extends Component{
    

    render(){
        const {dataSet} = this.props
        const imageContext = require.context('../../../../public/projects', true);
        return(
            <React.Fragment>
                <Element name="summary" className="element">
                    <h3>프로젝트 개요</h3>
                    <p>프로젝트 기간 {dataSet.startDate} ~ {dataSet.endDate}</p>
                    <p>{dataSet.description}</p>
                </Element>
                <Element name="devInv" className="element">
                    <h3>개발 환경</h3>
                    <Table>
                        {
                            Object.keys(dataSet.skills).map((key,idx)=>{
                                return(
                                    <tr key={idx}>
                                    <td key={idx}>{key}</td>
                                    {
                                        dataSet.skills[key].data.map((val,i)=>
                                            <td key={i}>{val}</td>
                                        )
                                    }
                                </tr>
                                )
                            })
                        }
                    </Table>
                </Element>
                <Element name="role" className="element">
                    <h3>담당 역할</h3>
                    {
                        dataSet.contribution.map((role,idx)=>
                                <figure key={idx}>
                                    <figcaption>
                                        <h5>{role.part}</h5>
                                        <p>{role.summary}</p>
                                        <ul>
                                            {role.workList.map((item,i)=>
                                                <li key={i}>{item}</li>
                                                )}
                                        </ul>
                                    </figcaption>
                                </figure>        
                            )
                        }
                </Element>
                <Element name="link" className="element">
                    {dataSet.links == undefined?null:<h3>관련 자료 및 링크</h3>}
                    {
                        dataSet.links == undefined?null:dataSet.links.map(linkItem=>
                        <Button outline className={"project-link-btn"} color="primary" onClick={()=>window.open(linkItem.link)}>{linkItem.title}</Button>
                    )}
                </Element>
                
                <br/>
                <Element name="detail" className="element">
                    {dataSet.details == undefined?null:<h3>개발 내용 상세</h3>}
                    <ListGroup>
                    {dataSet.details == undefined?null:dataSet.details.map(item=>{
                        return(
                            <ListGroupItem>
                                <ListGroupItemHeading>{item.title}</ListGroupItemHeading>
                                <ListGroupItemText>{item.description}</ListGroupItemText>
                                {
                                    item.imgs.map(imgItem=>{
                                        let imgSrc = imageContext(`./${imgItem.imgName}`);
                                        return(
                                            <div className="detail-img-wrapper">
                                                <img width="100%" src={imgSrc} alt={imgItem.caption}/>
                                                <p className="text-center">[{imgItem.caption}]</p>
                                            </div>
                                        )
                                    })
                                }
                                
                            </ListGroupItem>
                        )
                    })}
                    </ListGroup>
                </Element>
                
            </React.Fragment>
        )
    }
}