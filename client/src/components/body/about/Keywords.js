import React, {Component} from 'react';
import { Media } from 'reactstrap';


export default class Keywords extends Component{
    //props : title (Intro.js)
    keywordDataSet = [
        {
            title:"Can-Do Attitude",
            imgName:"015-hand.png",
            description:""
        },
        {
            title:"Responsible",
            imgName:"022-target.png",
            description:""
        },
        {
            title:"Self-Motivated",
            imgName:"002-growth.png",
            description:""
        },
        {
            title:"Cooperative",
            imgName:"007-support.png",
            description:""
        }
    ]
    render(){
        let data = this.keywordDataSet.find(data=>data["title"]===this.props.title)
        if(data == undefined){
            return null
        }
        const imageContext = require.context('../../../../public/icons/keyword_icon', true);
        let imageSrc = imageContext(`./${data.imgName}`)
        
        return(
            <div>
                <Media className="mt-1">
                    <Media left middle>
                        <img src={imageSrc} style={{width:"5vw", marginRight:"1vw"}} />
                    </Media>
                    <Media body>
                        <Media heading>{data.title}</Media>
                        {data.description}
                    </Media>
                </Media>
            </div>
        )
    }
}