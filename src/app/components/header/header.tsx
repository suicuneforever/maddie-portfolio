'use client';

import './Header.scss';

import Link from 'next/link';

const className = `Header`;

function Header() {
  return (
    <>
      <div className={className}>
        <Link href="/">Header</Link>

        <div className={`${className}__navigation`}>
          <Link href="/work">Work</Link>
          <a>Resume</a>
          <a>About</a>
          {/* <TextSplitter text="testing" /> */}
        </div>
      </div>
    </>
  );
}

export default Header;
