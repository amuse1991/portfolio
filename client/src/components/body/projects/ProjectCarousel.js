import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import "../../../static/css/carousel.css";

export default class ProjectCarousel extends Component{

    // props: dataSet(ModalContent.js)

    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
    }

    onExiting = ()=> {
        this.animating = true;
    }

    onExited = ()=> {
        this.animating = false;
    }

    next = ()=> {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.dataSet.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous = ()=> {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.dataSet.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex = (newIndex)=> {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render(){
        const {dataSet} = this.props;
        const { activeIndex } = this.state;
        const slides = dataSet.map((item) => {
            return (
                <CarouselItem
                className="project-carosel-item"
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={item.src}
                >
                <img src={item.src} alt={item.caption} /><br/>
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return(
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                ride={false}
            >
                <CarouselIndicators items={dataSet} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}
