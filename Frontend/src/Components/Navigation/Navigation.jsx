import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  AppstoreOutlined,
  DropboxOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const Navigation = () => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
      <Menu.Item icon={<AppstoreOutlined />}>
        <NavLink to="/">Shop</NavLink>
      </Menu.Item>

      <Menu.Item icon={<DropboxOutlined />}>
        <NavLink to="/shopingcart">Shoping Cart</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
