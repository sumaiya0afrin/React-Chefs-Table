const Header = () => {
  return (
    <div className="navbar bg-base-100 py-3 lg:py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost pl-0 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-[#0BE58A] rounded-box z-[1] mt-3  p-2 shadow "
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
            <label className="input input-bordered flex items-center gap-2  rounded-3xl">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" className="grow" placeholder="Search" />
            </label>
          </ul>
        </div>
        <a className="font-bold text-[#150B2B] text-xl md:text-2xl lg:text-3xl">
          Recipe Calories
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Search</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <label className="input input-bordered lg:flex items-center gap-2  rounded-3xl hidden">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" className="grow" placeholder="Search" />
        </label>
        <div
          tabIndex="0"
          role="button"
          className="btn bg-[#0BE58A] rounded-full profile"
        >
          <i className="fa-regular fa-circle-user text-xl lg:text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
