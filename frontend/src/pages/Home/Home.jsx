import "./Home.css";
import Feeds from "../../components/Feeds/Feeds";
import Leftbar from "../../components/Leftbar/Leftbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Topbar from "../../components/Topbar/Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="home">
        <Leftbar />
        <Feeds />
        <Rightbar />
      </div>
    </>
  );
}
