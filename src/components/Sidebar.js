import React, { useState } from "react";
import Nav from "../styles/nav";
import NavIcon from "../styles/navIcon";
import SidebarNav from "../styles/SidebarNav";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SidebarWrap from "../styles/SidebarWrap";
function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Nav>
        <NavIcon>
          <FaIcons.FaBars onClick={showSidebar}/>
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon>
            <AiIcons.AiOutlineClose onClick={showSidebar}/>
          </NavIcon>
        </SidebarWrap>
      </SidebarNav>
    </>
  );
}

export default Sidebar;
