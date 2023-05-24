import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Button, Dropdown, Input, Menu } from "antd";
import {
  FaSearch,
  FaLanguage,
  FaExpand,
  FaCompress,
  FaUserCircle,
  FaCog,
  FaInbox,
  FaHandsHelping,
  FaPowerOff,
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookReader,
  FaUsers,
  FaUserCheck,
  FaCogs,
} from "react-icons/fa";
import Logo from "../../Assets/Imgs/Demo-School-4.png";
import I from "../../Assets/Imgs/my-photo.jpg";
import Home from "../../Pages/Home/Home";
import Students from "../../Pages/Students/Students";
import Teachers from "../../Pages/Teachers/Teachers";
import Courses from "../../Pages/Courses/Courses";
import Groups from "../../Pages/Groups/Groups";
import "./Sidenav.scss";
import Lids from "../../Pages/Lids/Lids";
import Settings from "../../Pages/Settings/Settings";

const Sidenav = () => {
  return (
    <div>
      <Header />
      <div className="sidenav">
        <SideMenu />
        <Content />
      </div>
    </div>
  );
};

function Header() {
  const [open, setOpen] = useState(false);

  const itemsLanguage = [
    {
      key: "1",
      label: <div className="header__lang">uz</div>,
    },
    {
      key: "2",
      label: <div className="header__lang">ru</div>,
    },
    {
      key: "3",
      label: <div className="header__lang">en</div>,
    },
  ];

  const itemsProfile = [
    {
      key: "1",
      label: (
        <div className="header__profile-item">
          <FaUserCircle /> My Profile
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="header__profile-item">
          <FaCog /> Edit Profile
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="header__profile-item">
          <FaInbox /> Inbox
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div className="header__profile-item">
          <FaHandsHelping /> Help
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div className="header__profile-item">
          <FaPowerOff /> Sign Out
        </div>
      ),
    },
  ];

  return (
    <div className="header">
      <div>
        <Input className="header__input" placeholder="Qidiruv" />
        <button className="header__search">
          <FaSearch />
        </button>
      </div>
      <div>
        <img className="header__logo" src={Logo} alt="Logo" />
      </div>
      <div className="header__box">
        <Dropdown menu={{ items: itemsLanguage }} placement="bottom" arrow>
          <Button className="header__btn">
            <FaLanguage style={{ fontSize: "30px" }} />
          </Button>
        </Dropdown>
        <button
          className="header__display"
          onClick={() => {
            setOpen(!open);
          }}>
          {open ? <FaCompress /> : <FaExpand />}
        </button>
        <Dropdown menu={{ items: itemsProfile }} placement="bottomRight" arrow>
          <Button className="header__btn">
            <img className="header__profile" src={I} alt="Profile" />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
}

function SideMenu() {
  const navigate = useNavigate();

  return (
    <Menu
      className="sidenav__menu"
      onClick={({ key }) => {
        if (key) {
          navigate(key);
        }
      }}
      defaultSelectedKeys={[window.location.pathname]}
      items={[
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "1px 1px 1px",
          },
          label: "Bosh sahifa",
          key: "/dashboard",
          icon: <FaHome className="sidenav__icon" />,
        },
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "1px 1px 1px",
          },
          label: "Talabalar",
          key: "/students",
          icon: <FaUserGraduate className="sidenav__icon" />,
        },
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "1px 1px 1px",
          },
          label: "O'qituvchilar",
          key: "/teachers",
          icon: <FaChalkboardTeacher className="sidenav__icon" />,
        },
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "1px 1px 1px",
          },
          label: "Kurslar",
          key: "/courses",
          icon: <FaBookReader className="sidenav__icon" />,
        },
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "1px 1px 1px",
          },
          label: "Guruhlar",
          key: "/groups",
          icon: <FaUsers className="sidenav__icon" />,
        },
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "1px 1px 1px",
          },
          label: "Lidlar",
          key: "/lids",
          icon: <FaUserCheck className="sidenav__icon" />,
        },
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "1px 1px 1px",
          },
          label: "Sozlamalar",
          key: "/settings",
          icon: <FaCogs className="sidenav__icon" />,
          danger: true,
        },
      ]}></Menu>
  );
}

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/lids" element={<Lids />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default Sidenav;
