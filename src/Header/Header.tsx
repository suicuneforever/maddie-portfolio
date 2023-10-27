import './Header.scss';

import { Link, Outlet } from 'react-router-dom';

const className = `Header`;

function Header() {
  return (
    <>
      <div className={className}>
        <Link to="/">
          <a className={`${className}__name`}>Header</a>
        </Link>

        <div className={`${className}__navigation`}>
          <Link to="/work">Work</Link>
          <a>Resume</a>
          <a>About</a>
          {/* <TextSplitter text="testing" /> */}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
