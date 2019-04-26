import React, {Component} from 'react';
import { Media } from 'reactstrap';

export default class ContactItem extends Component{
    // props : title, imgName, content (Contact.js)
    render(){
        const {title,imgName,content} = this.props;
        const imageContext = require.context('../../../../public/icons/contact_icon', true);
        let imgSrc = imageContext(`./${imgName}`);
        return(
            <Media className="mt-1 contact-item">
                    <Media left middle>
                        <img src={imgSrc} style={{width:"3vw", marginRight:"1vw"}} />
                    </Media>
                    <Media body>
                        <Media heading>{title}</Media>
                        {title==="Mobile"||title=="Email"?content:<a href={content}>{content}</a>}
                    </Media>
            </Media>
        )
        
    }
}