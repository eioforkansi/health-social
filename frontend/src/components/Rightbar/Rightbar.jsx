import Online from "../Online/Online";
import "./Rightbar.css";
import { Users } from "../../dummyData";

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
          {Users.map((item) => (
            <Online key={item.id} user={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
