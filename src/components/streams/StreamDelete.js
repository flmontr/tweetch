import React from 'react'
import Modal from '../modal'
import history from '../../history'


const StreamDelete = () => {

  const actions = (
    <>
      <div className="button ui negative">Delete</div>
      <div className="button ui">Cancel</div>
    </>
  )
  
  return(
    <div className="">
      StreamDelete
      <Modal 
        title='Delete Stream'
        content='Are you sure?'
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </div>
  )
}

export default StreamDelete
