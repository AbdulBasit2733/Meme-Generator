import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500">
    <nav className=' flex justify-center space-x-4'>
        <Link className=' font-bold  px-3 py-2 mt-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900' to="/">Home</Link>
        <Link className=' font-bold  px-3 py-2 mt-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900' to="/about">About</Link>
        <Link className=' font-bold  px-3 py-2 mt-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900' to="/contact">Contact</Link>
    </nav>
    </div>
  )
}

export default Header;