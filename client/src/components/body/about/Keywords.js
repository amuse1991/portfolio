import React, {Component} from 'react';
import { Media } from 'reactstrap';


export default class Keywords extends Component{
    //props : title (Intro.js)
    keywordDataSet = [
        {
            title:"Can-Do Attitude",
            imgName:"015-hand.png",
            description:"주어진 문제가 어렵더라도 해결 가능하다는 마음가짐으로 임합니다."
        },
        {
            title:"Responsible",
            imgName:"022-target.png",
            description:"주어진 업무에 대해 책임감을 가지고 정해진 기한 내에 최선의 결과를 내려 노력합니다."
        },
        {
            title:"Self-Motivated",
            imgName:"002-growth.png",
            description:"능동적으로 해야 할 일을 찾고 그 일을 해결하기 위해 필요한 기술을 학습합니다."
        },
        {
            title:"Cooperative",
            imgName:"007-support.png",
            description:"동료의 이야기를 경청하고 비판을 합리적으로 수용합니다."
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