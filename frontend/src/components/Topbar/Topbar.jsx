import "./Topbar.css";
import { Badge } from "@material-ui/core";
import { Chat, Notifications, Person, Search } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="topbar-logo">
          <h1>
            Health<span>Social</span>
          </h1>
        </div>
      </div>
      <div className="topbar-center">
        <Search className="topbar-search" />
        <input placeholder="search for post, people or video" type="text" />
      </div>

      <div className="topbar-right">
        <div className="topbar-links">
          <h1>Home</h1>
          <h1>Timeline</h1>
        </div>
        <div className="topbar-icons">
          <Badge className="topbar-badge" badgeContent={1} color="secondary">
            <Person />
          </Badge>
          <Badge className="topbar-badge" badgeContent={1} color="secondary">
            <Chat />
          </Badge>
          <Badge className="topbar-badge" badgeContent={1} color="secondary">
            <Notifications />
          </Badge>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbar-profile" />
      </div>
    </div>
  );
}
