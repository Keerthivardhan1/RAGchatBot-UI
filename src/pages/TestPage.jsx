// App.jsx
import { Link } from "react-router-dom";
import Home from "./Home";
import { useAuth } from "../context/AuthContext";
//  h-[calc(100vh-4.5rem)]
export default function TestPage() {
  const user = useAuth()
  return (
    <div className="flex p-2">
      {/* Sidebar */}
      <aside className="
        fixed left-4 top-2 bottom-2 /* sits below header */
       
        w-64
        border rounded-2xl
        bg-white/70 backdrop-blur-md
        p-4
      ">
        <nav className="space-y-4">
          <Link to="#section1" className="block hover:underline">Home</Link>
          <Link to="#section2" className="block hover:underline">{user ? 'Login' : 'Logout'}</Link>
          <Link to="#section3" className="block hover:underline">Upload docs</Link>
          <Link to="#section4" className="block hover:underline">Chat with your docs</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="
          fixed top-0 left-70  right-0
          h-[4.5rem]
          
          bg-white/70 backdrop-blur-md
          flex items-center justify-between
          
          px-6
          z-10
        ">
          <h1 className="text-xl font-semibold">My Site</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Link A</a>
            <a href="#" className="hover:underline">Link B</a>
          </nav>
        </header>

        {/* Scrollable Home Sections */}
        <main className="pt-[4.5rem] px-6">
          <Home />
        </main>
      </div>
    </div>
  );
}
