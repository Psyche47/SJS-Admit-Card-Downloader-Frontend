import { RxHamburgerMenu as OpenMenu } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";
import { RxDashboard as Home } from "react-icons/rx";

const AdminDashboard = () => {
  return (
    <div className="drawer lg:drawer-open bg-zinc-50 font-inter">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col mt-3 ml-3">
        <div className="flex flex-row-reverse">
          <h1 className="text-lg md:text-3xl mx-auto text-bold text-black my-2 font-semibold">
            Welcome to the Admin Panel
          </h1>
          <label htmlFor="my-drawer-2" className="order-first lg:hidden mr-2">
            <OpenMenu className="text-3xl " />
          </label>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu h-full p-2 md:p-3 w-[15rem] md:w-[19rem] bg-gray-300 text-black text-xs md:text-sm space-y-0.5 md:space-y-1">
          <li className="">
            <Link to="/">
              <Home className="text-xl hover:text-white" />
              Dashboard Home
            </Link>
          </li>
          <li>
            <Link to="/businessApplicants">
              <Home className="text-xl hover:text-white" />
              Business Studies Applicants
            </Link>
            <Link to="/scienceApplicants">
              <Home className="text-xl hover:text-white" />
              Science Applicants
            </Link>
            <Link to="/scienceEvApplicants">
              <Home className="text-xl hover:text-white" />
              Science EV Applicants
            </Link>
            <Link to="/scienceToBusiness">
              <Home className="text-xl hover:text-white" />
              Science To Business Applicants
            </Link>
            <Link to="/scienceToHum">
              <Home className="text-xl hover:text-white" />
              Science To Humanities Applicants
            </Link>
            <Link to="/busToHum">
              <Home className="text-xl hover:text-white" />
              Business To Humanities Applicants
            </Link>
            <Link to="/hum">
              <Home className="text-xl hover:text-white" />
              Humanities Applicants
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
