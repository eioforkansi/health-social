import "./Leftbar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbar-wrapper">
        <ul className="leftbar-list">
          <li className="leftbar-item">
            <RssFeed className="leftbar-icon" />
            <span className="leftbar-text">Feed</span>
          </li>
          <li className="leftbar-item">
            <Chat className="leftbar-icon" />
            <span className="leftbar-text">Chat</span>
          </li>
          <li className="leftbar-item">
            <PlayCircleFilledOutlined className="leftbar-icon" />
            <span className="leftbar-text">Video</span>
          </li>
          <li className="leftbar-item">
            <Group className="leftbar-icon" />
            <span className="leftbar-text">Group</span>
          </li>
          <li className="leftbar-item">
            <Bookmark className="leftbar-icon" />
            <span className="leftbar-text"> Bookmark</span>
          </li>
          <li className="leftbar-item">
            <HelpOutline className="leftbar-icon" />
            <span className="leftbar-text">Help</span>
          </li>
          <li className="leftbar-item">
            <WorkOutline className="leftbar-icon" />
            <span className="leftbar-text">Jobs</span>
          </li>
          <li className="leftbar-item">
            <Event className="leftbar-icon" />
            <span className="leftbar-text">Event</span>
          </li>
          <li className="leftbar-item">
            <School className="leftbar-icon" />
            <span className="leftbar-text">Courses</span>
          </li>
        </ul>
        <button className="leftbar-button">Show More</button>
        <hr className="leftbar-hr" />
        <ul className="leftbar-friend-list">
          <li className="leftbar-friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="leftbar-friend-img"
            />
            <span className="leftbar-friend-name">Emeka Oforkansi</span>
          </li>
          <li className="leftbar-friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="leftbar-friend-img"
            />
            <span className="leftbar-friend-name">Emeka Oforkansi</span>
          </li>
          <li className="leftbar-friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="leftbar-friend-img"
            />
            <span className="leftbar-friend-name">Emeka Oforkansi</span>
          </li>
          <li className="leftbar-friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="leftbar-friend-img"
            />
            <span className="leftbar-friend-name">Emeka Oforkansi</span>
          </li>
          <li className="leftbar-friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="leftbar-friend-img"
            />
            <span className="leftbar-friend-name">Emeka Oforkansi</span>
          </li>
          <li className="leftbar-friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="leftbar-friend-img"
            />
            <span className="leftbar-friend-name">Emeka Oforkansi</span>
          </li>
          <li className="leftbar-friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="leftbar-friend-img"
            />
            <span className="leftbar-friend-name">Emeka Oforkansi</span>
          </li>
          <li className="leftbar-friend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="leftbar-friend-img"
            />
            <span className="leftbar-friend-name">Emeka Oforkansi</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
