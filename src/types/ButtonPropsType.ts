export interface ButtonPropsType {
  title: string,
  size: string,
  icon?: React.ReactElement,
  isBordered: boolean,
  isWhite?: boolean,
}

export interface ButtonLinkPropsType {
  title: string,
  size: string,
  icon?: React.ReactElement,
  isBordered: boolean,
  isWhite?: boolean,
  to: string,
}