import React from "react";
import * as Style from "./style";
import { Page } from "../../constants/Pages";
import { Pages } from "../../constants/Route";
import { Temp } from "../TempToggle/Temp";
import { Menu } from "../Navbar/style";

const Navbar: React.FC = () => {
  return (
    <Style.Header>
      <Temp />
      <Menu>
        <Style.WrapLink to={Pages.Home}>{Page.Home}</Style.WrapLink>
        <Style.WrapLink to={Pages.Cities}>{Page.Cities}</Style.WrapLink>
      </Menu>
    </Style.Header>
  );
};

export default Navbar;
