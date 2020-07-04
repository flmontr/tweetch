import React from 'react'
import Modal from '../modal'
import history from '../../history'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchStream, deleteStream } from '../../actions'


class StreamDelete extends React.Component {

  componentDidMount = () => {    
    this.props.fetchStream(this.props.match.params.id)
  }


  renderActions(){
    const {id} = this.props.match.params

    return (
      <>
        <div onClick={() => this.props.deleteStream(id)} className="button ui negative">Delete</div>
        <Link to="/" className="button ui">Cancel</Link>
      </>
    )
  }

  render(){
    return(
      <Modal 
        title='Delete Stream'
        content={(this.props.stream) ? `Are you sure you want to delete "${this.props.stream.title}"?` : ''}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete)
