import React, { useState } from "react";
import "./Sidebar.css";
import menu from "../../sidebardata/sidebar";
import SidebarItem from "./SidebarItem";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="layout">
      <div className="sidebar" style={{ width: isOpen ? "230px" : "60px" }}>
        <div className="top_section">
          <div className="logo" style={{ display: isOpen ? "block" : "none" }}>
            <i class="fa fa-apple" size={35}
              style={{ cursor: "pointer" }}
              onClick={goHome}></i>
          </div>

          <div
            className="bars"
            style={{ marginLeft: isOpen ? "150px" : "0px" }}
          >
            <i class="fa fa-bars" onClick={toggle}></i>
          </div>
        </div>
        {menu.map((item, index) => {
          return <SidebarItem key={index} item={item} isOpen={isOpen} />;
        })}
      </div>

      <main
        style={{
          paddingLeft: isOpen ? "230px" : "60px",
          transition: "all .5s",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
