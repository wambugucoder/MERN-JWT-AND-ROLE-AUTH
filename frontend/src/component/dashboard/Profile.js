import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  googleLogin} from '../../actions/authActions';
import PropTypes from 'prop-types';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = { profile: [] };
  }

  
    async componentDidMount() {
      await this.props.googleLogin();
      // if (!this.props.auth.isAuthenticated) {
      //   this.props.history.push("/");
      // }
    }
   
    render() {
      if (this.props.auth.isAuthenticated) {
        const{user}=this.props.auth;
        return (
          <div className="jumbotron">
            <h1 className="display-4">Howdy, {user.name}!</h1>
            <p className="lead">We got these details about you.</p>
            <hr className="my-4" />
            <center>
              <div className="profile-container">
                <div className="profile-item">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <div>
                        <b>Name</b>: {user.name.split(" ")[0]}
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div>
                        <b>Email</b>: {user.email}
                      </div>
                    </li>
                  </ul>
                </div>
               
              </div>
            </center>
          </div>
        );
      } else return <div>Loading...</div>;
    }
  }
Profile.propTypes = {
  googleLogin:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
};

const mapStateToProps = state => ({
 auth:state.auth
});
export default connect(mapStateToProps,
   {googleLogin})(Profile);