import styles from './Link.module.scss';
console.log(styles);
export const Link = ({ path, title, children }) => {
  // || &&
  return (
    <a className={styles.link} href={path || '/home'} title={title}>{children}</a>
  )
}