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
    <nav className="sticky top-0 bg-white z-50 p-4 flex justify-between items-center">
      <Link href="/" className="block">
        <h4 className="lg:text-3xl text-xl uppercase  font-mono">Bitpay</h4>
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
