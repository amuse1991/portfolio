import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ProjectCarousel from "./ProjectCarousel";
import ProjectNav from "./ProjectNav";
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
            <ProjectNav title={modalContent.name}/>
                <Row>
                    <Col className="project-header">
                        <h1 className="title">{modalContent.name}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProjectCarousel dataSet={this.makeCarouselDataSet(modalContent.imgs)}/>
                        <Description dataSet={modalContent}/>
                    </Col>
                </Row>
            </div>
        )
    }
}
