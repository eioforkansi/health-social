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
      <div className="wrapper">
        <ul className="list">
          <li className="item">
            <RssFeed className="icon" />
            <span className="text">Feed</span>
          </li>
          <li className="item">
            <Chat className="icon" />
            <span className="text">Chat</span>
          </li>
          <li className="item">
            <PlayCircleFilledOutlined className="icon" />
            <span className="text">Video</span>
          </li>
          <li className="item">
            <Group className="icon" />
            <span className="text">Group</span>
          </li>
          <li className="item">
            <Bookmark className="icon" />
            <span className="text"> Bookmark</span>
          </li>
          <li className="item">
            <HelpOutline className="icon" />
            <span className="text">Help</span>
          </li>
          <li className="item">
            <WorkOutline className="icon" />
            <span className="text">Jobs</span>
          </li>
          <li className="item">
            <Event className="icon" />
            <span className="text">Event</span>
          </li>
          <li className="item">
            <School className="icon" />
            <span className="text">Courses</span>
          </li>
        </ul>
        <button className="button">Show More</button>
        <hr className="hr" />
        <ul className="friend-list">
          <li className="friend">
            <img src="/assets/person/2.jpeg" alt="" className="friend-img" />
            <span className="friend-name">Emeka Oforkansi</span>
          </li>
        </ul>
        <ul className="friend-list">
          <li className="friend">
            <img src="/assets/person/2.jpeg" alt="" className="friend-img" />
            <span className="friend-name">Emeka Oforkansi</span>
          </li>
        </ul>
        <ul className="friend-list">
          <li className="friend">
            <img src="/assets/person/2.jpeg" alt="" className="friend-img" />
            <span className="friend-name">Emeka Oforkansi</span>
          </li>
        </ul>
        <ul className="friend-list">
          <li className="friend">
            <img src="/assets/person/2.jpeg" alt="" className="friend-img" />
            <span className="friend-name">Emeka Oforkansi</span>
          </li>
        </ul>
        <ul className="friend-list">
          <li className="friend">
            <img src="/assets/person/2.jpeg" alt="" className="friend-img" />
            <span className="friend-name">Emeka Oforkansi</span>
          </li>
        </ul>
        <ul className="friend-list">
          <li className="friend">
            <img src="/assets/person/2.jpeg" alt="" className="friend-img" />
            <span className="friend-name">Emeka Oforkansi</span>
          </li>
        </ul>
        <ul className="friend-list">
          <li className="friend">
            <img src="/assets/person/2.jpeg" alt="" className="friend-img" />
            <span className="friend-name">Emeka Oforkansi</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
