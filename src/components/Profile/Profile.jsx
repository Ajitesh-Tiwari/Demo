import React from "react";
import "./Profile.style.scss";

class Profile extends React.Component {
  render() {
    return (
      <div className="profile card">
        <div className='row no-gutters'>
          <div className='col-md-2 profile__image'>
            <img src={process.env.PUBLIC_URL + "/img/kartik.jpg"} className="card-img img-fluid"/>
          </div>
          <div className='col-md-10 col-xs-12'>
            <div className="card-body profile__body">
              <h5 className="card-title">Kartik Mandaville</h5>
              <p className="card-text m-0">CEO at SpringRole</p>
              <p className="card-text">
                <small className="text-muted">India</small>
              </p>
            </div>
            <div className='bg-light profile__body__footer'>
              <a href='https://springrole.com/kartik'>https://springrole.com/kartik</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;