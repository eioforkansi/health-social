import Post from "../Post/Post";
import Share from "../Share/Share";
import "./Feeds.css";
import { Posts } from "../../dummyData";

export default function Feeds() {
  return (
    <div className="feeds">
      <div className="feed-wrapper">
        <Share />
        {Posts.map((item) => (
          <Post key={item.id} post={item} />
        ))}
      </div>
    </div>
  );
}
