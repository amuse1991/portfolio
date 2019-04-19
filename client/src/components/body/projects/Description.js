import React, { Component } from 'react';
import {Button, Table, CardBody, Card} from "reactstrap";
export default class Description extends Component{
    render(){
        const {dataSet} = this.props
        return(
            <React.Fragment>
                <div>
                    <h3>프로젝트 개요</h3>
                    <p>프로젝트 기간 {dataSet.startDate} ~ {dataSet.endDate}</p>
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
                                        <p>{role.part}</p>
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
                    <h3>프로젝트 상세</h3>
                </div>
                <div>
                    <h3>프로젝트 결과</h3>
                </div>
                <div>
                    <h3>결과 자료</h3>
                </div>
            </React.Fragment>
        )
    }
}