import './index.scss';
import { ReactComponent as ReactLogo } from '@assets/images/react.svg';

export function Header() {
  return (
    <p className="header">
      This is Header
      <ReactLogo />
    </p>
  );
}
