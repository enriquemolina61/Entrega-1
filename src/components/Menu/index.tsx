/* eslint-disable eqeqeq */
/* eslint-disable no-sequences */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import * as S from "./style";
import { RoutesPath } from "../../types/routes";
import { NavItem } from "./types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface MenuProps {
  active: RoutesPath;
  navItems: NavItem[];
}
type ActiveMenu = "Home" | "Add" | "User";
const Menu = ({}: MenuProps) => {
  const [active, setActive] = useState<ActiveMenu>("Home");
  const navigate = useNavigate();
  return (
    <S.Menu>
      <nav>
        <S.MenuLogo></S.MenuLogo>
        <S.MenuItem>
          <S.MenuItemButton
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              setActive("Home"), navigate("/");
            }}
            className={active == "Home" ? "active" : ""}
          ></S.MenuItemButton>
        </S.MenuItem>

        <S.MenuItem>
          <S.MenuItemButton
            onClick={() => {
              setActive("Add"), navigate("/create-product");
            }}
            className={active == "Add" ? "active" : ""}
          ></S.MenuItemButton>
        </S.MenuItem>

        <S.MenuItem>
          <S.MenuItemButton
            onClick={() => {
              setActive("User"), navigate("/user");
            }}
            type="button"
            className={active == "User" ? "active" : ""}
          ></S.MenuItemButton>
        </S.MenuItem>
      </nav>
      <S.MenuItemLogout
        onClick={() => {
          localStorage.removeItem("accessToken");
          navigate("/login");
        }}
      ></S.MenuItemLogout>
    </S.Menu>
  );
};

export default Menu;
