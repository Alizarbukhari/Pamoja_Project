import { APP_LINKS } from "../utils/constant";

import Link from "next/link";

export function InputDemo() {
  return;
}

function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-white p-4">
      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4 md:gap-10 justify-center md:justify-start mb-4 md:mb-0">
        {APP_LINKS.map((link, index) => (
          <Link href={link.href} key={index}>
            <p className="font-normal text-sm md:text-base">{link.name}</p>
          </Link>
        ))}
      </div>

      {/* Placeholder for Additional Content */}
      <div className="w-full md:w-auto">
        {/* Add any content here if needed */}
      </div>
    </div>
  );
}

export default Header;
