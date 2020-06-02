import React,{Component} from 'react';

import { Link } from 'react-router-dom';


class Landing extends Component {

 

    render() {
        return (
          <div className="container">
          
          <div class="center">
           <div class="row"></div>
           <div class="row"></div>
           <div class="row"></div>
           <div class="row"></div>
           <div class="row"></div>
          <div class="row">
            <div class="col-10">
            <div style={{fontSize:35}}>
              <p><b>Login</b></p>
            </div>
          </div>
          </div>
          <div class="row"></div>
           <div class="row">
           <div class="sm-col-12">
           <a href="http://localhost:5000/api/users/auth/google">
             <button type="submit" class="btn btn-large waves-effect waves-light hoverable blue accent-3"
             onClick={this.onLoginClick }
             >
                <i class="material-icons left">https</i>
                Login with Google
              
               
             </button>
          </a>
            
            </div>
           </div>
           <div class="row">
             <div class="sm-col-12">
             <div style={{fontFamily:"Times New Roman",fontSize:18}}>
               <p><b>
                 Note.You have agreed to the <Link to="/Terms">Terms and Conditions</Link> upon Signing In.
                 </b>
               </p>
               </div>
             </div>
           </div>
           <div class="row"></div>
           <div class="row"></div>
           <div class="row">
             <div class="col-11">
               <p>
               <b>
                <Link to="/login">Login with Email</Link> || <Link to="/register">Register</Link>
                </b>
               </p>
             </div>
           </div>
          </div>
          </div>
        
        );
    }
}

export default Landing;