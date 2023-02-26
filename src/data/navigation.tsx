import { NavItem } from "../components/Menu/types";

import { RoutesPath } from "../types/routes";

export const navItems: NavItem[] = [
  {
    icon: (
      <img
        src={
          "https://s.sde.globo.com/media/organizations/2019/02/04/botafogo-svg.svg"
        }
        alt="Home Component"
      />
    ),
    path: RoutesPath.HOME,
  },
  {
    icon: (
      <img
        src={
          "https://s.sde.globo.com/media/organizations/2019/02/04/botafogo-svg.svg"
        }
        alt="Settings Component"
      />
    ),
    path: RoutesPath.SETTINGS,
  },
];
