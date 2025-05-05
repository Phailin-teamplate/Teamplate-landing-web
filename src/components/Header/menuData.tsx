export type Menus = {
  id: number;
  title: string;
  path?: string;
  newTab?: boolean;
  submenu?: Menus[];
};

export const menuData: Menus[] = [
  {
    id: 1,
    title: "About",
    newTab: false,
    path: "#about",
  },
  {
    id: 2,
    title: "Service",
    newTab: false,
    path: "#services",
  },
  {
    id: 2.1,
    title: "Contact",
    newTab: false,
    path: "#contact",
  },
];
