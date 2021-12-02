import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="columns has-text-grey-light my-4 is-centered">
      <div className="column is-narrow has-text-centered">
        <Link href="/" passHref>
          <a>hotspots</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
