import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Main from './Main';
import * as actions from '../redux/actions';

const mapStateToProps = state => {
    return {
        posts: state.post,
        comments: state.comments
    }
}

const mapDistpatchToProps = dispatch => {
    return {
        removePhoto: (index)=> dispatch(actions.removePhoto(index)),
        addPhoto: (post) => dispatch(actions.addPhoto(post)),
        addComment: (comment, postId) => dispatch(actions.addComment(comment, postId))
    }
}

const App = withRouter(connect(mapStateToProps, mapDistpatchToProps)(Main));

export default App;