import "./Profile.css";
import Leftbar from "../../components/Leftbar/Leftbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Topbar from "../../components/Topbar/Topbar";
import Feeds from "../../components/Feeds/Feeds";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="profile-left">
          <Leftbar />
        </div>
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img
                src="assets/post/3.jpeg"
                className="profile-cover-img"
                alt=""
              />

              <img
                src="assets/person/7.jpeg"
                className="profile-user-img"
                alt=""
              />
            </div>
            <div className="profile-info">
              <h3 className="profile-username">Emeka Oforkansi</h3>
              <span className="profile-description">Never Give Up</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feeds />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
