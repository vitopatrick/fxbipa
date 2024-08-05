import Link from "next/link";
// import { Menu } from "lucide-react";
import RespronsiveNavbar from "../responive/RespronsiveNavbar";

type Props = {};

const links = [
  {
    id: 3,
    name: "About Us",
    path: "/about",
  },
  {
    id: 5,
    name: "Prime",
    path: "/prime",
  },
];

const Navbar = (props: Props) => {
  return (
    <nav className="flex p-4 sticky top-0 z-50 justify-between items-center bg-white">
      <Link href="/" className="w-[100px]">
        <img
          src="https://bitpay.com/_nuxt/img/bitpay-logo-blue.1c0494b.svg"
          alt="logo"
          className="w-full h-full"
        />
      </Link>
      {/* links */}
      <div className="space-x-4 hidden lg:block">
        {links.map((link) => (
          <Link href={link.path} key={link.id}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="space-x-4 hidden lg:block">
        <Link
          href="/get-started"
          className="bg-purple-900 px-6 py-3 rounded-lg text-white"
        >
          Get Started
        </Link>
        <Link
          href="/login"
          className="border border-purple-800 rounded-lg px-6 py-3 text-purple-800"
        >
          login
        </Link>
      </div>
      <RespronsiveNavbar />
    </nav>
  );
};

export default Navbar;
