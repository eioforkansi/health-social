import Online from "../Online/Online";
import "./Rightbar.css";
import { Users } from "../../dummyData";

export default function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="rightbar-birthday">
          <img src="/assets/gift.png" alt="" className="birthday-img" />
          <span className="birthday-text">
            <b>Emeka Oforkansi</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbar-ad" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">
          {Users.map((item) => (
            <Online key={item.id} user={item} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbar-title">User Information</h4>
        <div className="rightbar-info">
          <span className="rightbar-info-key">City:</span>
          <span className="rightbar-info-value">Anambra</span>
        </div>
        <div className="rightbar-info">
          <span className="rightbar-info-key">From:</span>
          <span className="rightbar-info-value">Nando</span>
        </div>
        <div className="rightbar-info">
          <span className="rightbar-info-key">Relationship:</span>
          <span className="rightbar-info-value">Single</span>
        </div>
        <div className="rightbar-info">
          <span className="rightbar-info-key">Education:</span>
          <span className="rightbar-info-value">University of Anambra</span>
        </div>
        <hr className="rightbar-hr" />
        <h4 className="rightbar-title">User Friends</h4>
        <div className="rightbar-followings">
          <div className="rightbar-following">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbar-following-img"
            />
            <span className="rightbar-following-name">Emeka Oforkansi</span>
          </div>
          <div className="rightbar-following">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbar-following-img"
            />
            <span className="rightbar-following-name">Emeka Oforkansi</span>
          </div>
          <div className="rightbar-following">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightbar-following-img"
            />
            <span className="rightbar-following-name">Emeka Oforkansi</span>
          </div>
          <div className="rightbar-following">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbar-following-img"
            />
            <span className="rightbar-following-name">Emeka Oforkansi</span>
          </div>
          <div className="rightbar-following">
            <img
              src="assets/person/7.jpeg"
              alt=""
              className="rightbar-following-img"
            />
            <span className="rightbar-following-name">Emeka Oforkansi</span>
          </div>
          <div className="rightbar-following">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightbar-following-img"
            />
            <span className="rightbar-following-name">Emeka Oforkansi</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="rightbar">
        <div className="rightbar-wrapper">
          {profile ? <ProfileRightBar /> : <HomeRightBar />}
        </div>
      </div>
    </>
  );
}
