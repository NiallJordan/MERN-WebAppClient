import React, {Fragment, Component} from 'react';
import Comment from '../comment';

export default class CommentList extends Component {
    render() {
        console.log('render of Comments')
        const items = this.props.comments.map(
        (com,index) =>
           ( <Comment key={index} comment={com} downvoteHandler={this.props.downvoteHandler} upvoteHandler={this.props.upvoteHandler}/>
    ));
    return (
        <Fragment>
            {items}
        </Fragment>
    );
}
}