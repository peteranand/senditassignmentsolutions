export interface ListItemProps {
  /**
   * classname
   */
  className?: string;
  /**
   * label for list item
   */
  label: string;
  /**
   * content value of list item
   */
  value?: any;
  /**
   * set true if content is long and needs trimming
   */
  expandable?: boolean;
}
