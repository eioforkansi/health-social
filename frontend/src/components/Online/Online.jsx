import "./Online.css";

export default function Online({ user }) {
  console.log(user);
  return (
    <>
      <li className="rightbar-friend">
        <div className="rightbar-profile">
          <img src={user.profilePicture} alt="" className="profile-img" />
          <span className="rightbar-online"></span>
        </div>
        <span className="rightbar-username">{user.username}</span>
      </li>
    </>
  );
}
