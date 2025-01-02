import "./Rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
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
          <li className="rightbar-friend">
            <div className="rightbar-profile">
              <img src="assets/person/3.jpeg" alt="" className="profile-img" />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Emeka Oforkansi</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
