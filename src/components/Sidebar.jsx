import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineSpaceDashboard, MdOutlineReportProblem, MdOutlineEngineering, MdOutline6FtApart, MdOutlineRouter, MdSettingsSystemDaydream } from "react-icons/md";
import { FiMapPin, FiUsers,FiActivity } from "react-icons/fi";
import { BsDiagram3} from "react-icons/bs";
import { HiOutlineOfficeBuilding, HiOutlineTicket } from "react-icons/hi";
import { AiOutlineProject, AiOutlineDashboard } from "react-icons/ai";
import { RiSignalTowerFill } from "react-icons/ri";
import { BiSitemap } from "react-icons/bi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useStateContext } from "../contexts/ContextProvider";
import logo from "../assets/Logo_D-Net.svg";

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center ml-3 mt-3 flex"
            >
              <img className="w-24" src={logo} alt="logo-dnet" />
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 mt-3 hover:bg-light-gray block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            <div>
              <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase"> Dashboard </p>
              <NavLink to="/" onClick={handleCloseSideBar} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : "" })} className={({ isActive }) => isActive ? activeLink : normalLink } >
                <MdOutlineSpaceDashboard/>
                <span className="capitalize">Overview</span>
              </NavLink>
            </div>
            <div>
              <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase"> Monitoring </p>
              <NavLink to="/maps" onClick={handleCloseSideBar} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : "" })} className={({ isActive }) => isActive ? activeLink : normalLink } >
                <FiMapPin/>
                <span className="capitalize">Maps</span>
              </NavLink>
              <NavLink to="/network-diagram" onClick={handleCloseSideBar} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : "" })} className={({ isActive }) => isActive ? activeLink : normalLink } >
                <BsDiagram3 />
                <span className="capitalize">Network Diagram</span>
              </NavLink>
              <NavLink to="/problems" onClick={handleCloseSideBar} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : "" })} className={({ isActive }) => isActive ? activeLink : normalLink } >
                <MdOutlineReportProblem />
                <span className="capitalize">Problems</span>
              </NavLink>
            </div>
            <div>
              <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase"> Ticket </p>
              <NavLink to="/ticketing" onClick={handleCloseSideBar} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : "" })} className={({ isActive }) => isActive ? activeLink : normalLink } >
                <HiOutlineTicket />
                <span className="capitalize">Ticketing</span>
              </NavLink>
            </div>
            <div>
              <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase"> Administration </p>
              <NavLink to="/project-company" onClick={handleCloseSideBar} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : "" })} className={({ isActive }) => isActive ? activeLink : normalLink } >
                <HiOutlineOfficeBuilding />
                <span className="capitalize">Project Company</span>
              </NavLink>
              <NavLink to="/user" onClick={handleCloseSideBar} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : "" })} className={({ isActive }) => isActive ? activeLink : normalLink } >
                <FiUsers />
                <span className="capitalize">User</span>
              </NavLink>
              <NavLink to="/project" onClick={handleCloseSideBar} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : "" })} className={({ isActive }) => isActive ? activeLink : normalLink } >
                <AiOutlineProject />
                <span className="capitalize">Project</span>
              </NavLink>
              <NavLink to="/field-engineer" onClick={handleCloseSideBar} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : "" })} className={({ isActive }) => isActive ? activeLink : normalLink } >
                <MdOutlineEngineering />
                <span className="capitalize">Field Engineer</span>
              </NavLink>
              <NavLink to="/third-party" onClick={handleCloseSideBar} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : "" })} className={({ isActive }) => isActive ? activeLink : normalLink } >
                <MdOutline6FtApart />
                <span className="capitalize">Third Party</span>
              </NavLink>
              <NavLink to="/pop" onClick={handleCloseSideBar} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : "" })} className={({ isActive }) => isActive ? activeLink : normalLink } >
                <RiSignalTowerFill />
                <span className="capitalize">Pop</span>
              </NavLink>
              <NavLink to="/site" onClick={handleCloseSideBar} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : "" })} className={({ isActive }) => isActive ? activeLink : normalLink } >
                <BiSitemap />
                <span className="capitalize">Site</span>
              </NavLink>
              <NavLink to="/device" onClick={handleCloseSideBar} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : "" })} className={({ isActive }) => isActive ? activeLink : normalLink } >
                <MdOutlineRouter />
                <span className="capitalize">Device</span>
              </NavLink>
            </div>
            <div>
              <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase"> Performance </p>
              <NavLink to="/performance" onClick={handleCloseSideBar} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : "" })} className={({ isActive }) => isActive ? activeLink : normalLink } >
                <AiOutlineDashboard />
                <span className="capitalize">Performance</span>
              </NavLink>
            </div>
            <div>
              <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase"> Activity </p>
              <NavLink to="/log-user" onClick={handleCloseSideBar} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : "" })} className={({ isActive }) => isActive ? activeLink : normalLink } >
                <FiActivity />
                <span className="capitalize">Log User</span>
              </NavLink>
              <NavLink to="/log-system" onClick={handleCloseSideBar} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : "" })} className={({ isActive }) => isActive ? activeLink : normalLink } >
                <MdSettingsSystemDaydream />
                <span className="capitalize">Log System</span>
              </NavLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
