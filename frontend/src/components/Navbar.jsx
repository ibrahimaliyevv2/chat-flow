import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-700 fixed w-full top-0 z-40
    backdrop-blur-xl shadow-lg"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:scale-105 transition-all duration-300"
            >
              <div className="size-9 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-md">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ChatFlow
              </h1>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {authUser && (
              <>
                <Link
                  to={"/profile"}
                  className="btn btn-sm gap-2 transition-all duration-300 hover:scale-105 bg-blue-500 hover:bg-blue-600 text-white"
                >
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  className="flex gap-2 items-center px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 hover:scale-105"
                  onClick={logout}
                >
                  <LogOut className="size-5 text-red-500" />
                  <span className="hidden sm:inline text-red-500 font-medium">
                    Logout
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
