import styles from './index.module.scss';
import packageJson from '../../../package.json';

export function Footer() {
  return (
    <p className={styles.footer}>
      This is Footer. version: {packageJson.version}
    </p>
  );
}
