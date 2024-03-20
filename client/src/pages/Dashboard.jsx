import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../componets/DashSidebar";
import DashProfile from "../componets/DashProfile";
import DashPosts from "../componets/DashPosts";
import DashUsers from "../componets/DashUsers";
import DashComments from "../componets/DashComments";
import DashBoardCom from "../componets/DashBoardCom";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === "profile" && <DashProfile />}
      {/* post... */}
      {tab === "posts" && <DashPosts />}
      {tab === "users" && <DashUsers />}
      {tab === "comments" && <DashComments />}
      {tab === "dash" && <DashBoardCom />}


    </div>
  );
};

export default Dashboard;
