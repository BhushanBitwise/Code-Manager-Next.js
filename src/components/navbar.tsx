import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="px-20 pt-10 border-b-2 pb-5">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-gray-800 text-2xl font-bold">Code Manager</h1>
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="bg-zinc-900 text-white px-4 py-2 rounded">Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;