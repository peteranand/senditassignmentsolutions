export interface ContentLoaderProps {
  /**
   * boolean values specifies if loading status
   */
  loading: boolean;
  /**
   * child components renderd when not loading
   */
  children: React.ReactNode;
}
