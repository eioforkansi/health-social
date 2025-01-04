import "./Friends.css";

export default function Friends({ user }) {
  return (
    <>
      <li className="leftbar-friend">
        <img src={user.profilePicture} alt="" className="leftbar-friend-img" />
        <span className="leftbar-friend-name">{user.username}</span>
      </li>
    </>
  );
}
