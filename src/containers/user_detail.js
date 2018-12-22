import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserDetail extends Component {
  render() {
    const {myActiveUser} = this.props
    if(!myActiveUser){
      return <div>Selectionnez un utilisateur pour demarrer</div>
    }
    return (
        <div className="col-md-5 card">
          <div className="card-body">
            <h5 className="card-title">Détail de {myActiveUser.name}</h5>
            <ul className="list-group list-group-flush">
             <li className="list-group-item">Id : {myActiveUser.id}</li>
             <li className="list-group-item">Role : {myActiveUser.role}</li>
             <li className="list-group-item">Actif : {myActiveUser.active}</li>
            </ul>
          </div>
        </div>
    )
  }
}

function mapStateToProps(state){
  return {
    myActiveUser : state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail)