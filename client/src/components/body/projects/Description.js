import React, { Component } from 'react';
import {Button, Table, CardBody, Card} from "reactstrap";
import "../../../static/css/project.css"
export default class Description extends Component{
    render(){
        const {dataSet} = this.props
        return(
            <React.Fragment>
                <div>
                    <h3>프로젝트 개요</h3>
                    <p>프로젝트 기간 {dataSet.startDate} ~ {dataSet.endDate}</p>
                    <p>{dataSet.description}</p>
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
                    <h3>개발 내용 상세</h3>
                </div>
                <div>
                    <h3>관련 자료 및 링크</h3>
                    {dataSet.links == undefined?null:dataSet.links.map(linkItem=>
                        <Button outline className={"project-link-btn"} color="primary" onClick={()=>window.open(linkItem.link)}>{linkItem.title}</Button>
                    )}
                </div>
            </React.Fragment>
        )
    }
}