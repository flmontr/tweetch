import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {fetchStreams} from '../../actions'

class StreamList extends React.Component {

  componentDidMount = () => {
    this.props.fetchStreams()
  }

  renderButtons = stream => {
    if(stream.userId === this.props.currentUserId){
      return(
        <div className="right floated content">
          <Link to={`streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
          <Link to={`streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
        </div>
      )
    }
  }

  renderList = () => {
    return this.props.streams.map(stream => {
      return(
        <div className="item" key={stream.id}>
          {this.renderButtons(stream)}
          <i className="large middle aligned icon video" />
          <div className="content">
            <Link to={`streams/${stream.id}`} className="header">
              {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      )
    })
  }

  renderCreateButton = () => {
    if(this.props.signedIn){
      return(
        <div style={{textAlign: 'right'}}>
          <Link to='/streams/new' className='ui button primary'>
            Create stream
          </Link>
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreateButton()}
      </div>
    )
  }
}

const mapStateToProps = ({streams, auth}) => {
  return {
    streams: Object.values(streams),
    currentUserId: auth.userId,
    signedIn: auth.signedIn
  }
  /*
  Transforming object to array to map over it. Streams is kept as
  an object in state since itś easier to manipulate it inside reducer
  */
}

export default connect(mapStateToProps, {fetchStreams})(StreamList)
