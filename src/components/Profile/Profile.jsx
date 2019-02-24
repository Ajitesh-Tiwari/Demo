import React from 'react';
import './Profile.style.scss';

const colors = ['#f6efed', '#ffe1be', '#f7be6c', '#ff8100', '#d86d00'];

const Profile = ({ profile }) => {

  return (
    <div>
      {profile.name && <div className='profile'>
        <div className='card'>
          <div className='row no-gutters'>
            <div className='col-md-2 profile__image'>
              <img src={profile.avatar_url} className='card-img img-fluid' alt=''/>
            </div>
            <div className='col-md-10 col-xs-12'>
              <div className='card-body profile__body'>
                <h5 className='card-title'>{profile.name}</h5>
                <p className='card-text m-0'>{`${profile.current_job_designation} at ${profile.current_company}`}</p>
                <p className='card-text'>
                  <small className='text-muted'>{profile.current_location}</small>
                </p>

                {profile.skills && <div className='profile__skills'>
                  {profile.skills.map((skill, index) => {

                    const activePosition = Math.trunc((skill.score * 100) / 20);
                    return <div className='profile__skills__item' key={index}>
                      <span>{skill.skill_name}</span>
                      <ul className='profile__skills__color'>

                        <li style={{ background: colors[activePosition] }} className='rate-low trigger-popup-selector'>
                          <span/>
                        </li>

                      </ul>
                    </div>;
                  })}
                </div>
                }
              </div>
              <div className='bg-light profile__body__footer'>
                <a href={profile.url}>{profile.url}</a>
              </div>
            </div>
          </div>
        </div>
        <div className='profile__bio card'>
          <h3>'{profile.bio}'</h3>
        </div>
      </div>
      }
    </div>
  );
};

export default Profile;