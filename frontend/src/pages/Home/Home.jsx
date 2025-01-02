import Feeds from "../../components/Feeds/Feeds";
import Leftbar from "../../components/Leftbar/Leftbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Topbar from "../../components/Topbar/Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <div style={{ display: "flex", width: "100%" }}>
        <Leftbar />
        <Feeds />
        <Rightbar />
      </div>
    </>
  );
}
