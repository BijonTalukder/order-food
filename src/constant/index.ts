export type IconType = "file" | "folder";

export interface BreadcrumbItem {
  title: string;
  path: string;
  icon?: JSX.Element;
  iconType?: IconType;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}
