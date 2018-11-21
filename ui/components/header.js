import React from 'react';
import Link from 'next/link';

const Header = ({ siteTitle }) => (
  <div>
    <div>
      <h1>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
