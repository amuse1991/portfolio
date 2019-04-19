import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ProjectCarousel from "./ProjectCarousel";
import Sidebar from "./Sidebar";
import Description from "./Description";
import '../../../static/css/project-modal.css';

export default class ModalContent extends Component{

    // props: modalContent(Projects.js)

    makeCarouselDataSet = (imgs)=>{
        const imageContext = require.context('../../../../public/projects', true);
        let result = []
        imgs.map(img=>{
            let imgSrc = imageContext(`./${img.imgName}`);
            result.push({
                src:imgSrc,
                caption:img.caption
            })
        });
        return result;
    }

    render(){
        const {modalContent} = this.props
        return(
            <div className="modal-wrapper">
                <Row>
                    <Col className="title-wrapper">
                        <h1 className="title">{modalContent.name}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm="3">
                        <Sidebar/>
                    </Col>
                    <Col sm="9">
                        <ProjectCarousel dataSet={this.makeCarouselDataSet(modalContent.imgs)}/>
                        <Description dataSet={modalContent}/>
                    </Col>
                </Row>
            </div>
        )
    }
}
