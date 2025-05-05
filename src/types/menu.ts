export type Menus = {
  id: number;
  title: string;
  path?: string;
  newTab?: boolean;
  submenu?: SubMenu[];
};

export type SubMenu = {
  title: string;
  path?: string;
  newTab?: boolean;
};
