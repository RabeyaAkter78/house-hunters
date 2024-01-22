import logo from "../../../../assets/images/logo (1).jpg"
const NavBar = () => {
    // const navItems = <>
    //     <li>
    //         <a>Login</a>
    //         <ul className="p-2">
    //             <li><a>House Owner</a></li>
    //             <li><a>House Renter</a></li>
    //         </ul>
    //     </li>
    // </>

    return (
        <div className="navbar bg-base-300 fixed z-10">
  <div className="flex-1">
    <a className=" text-xl">
        <img className="rounded-full" src={logo} alt="" />
    </a>
  </div>
  <div className="flex-none dropdown-content">
    <ul className=" menu menu-horizontal  px-1">
      <li>
        <details>
          <summary>
            Login
          </summary>
          <ul className="p-2  bg-white  text-black">
            <li><a>House Owner</a></li>
            <li><a>House Renter</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
    );
};

export default NavBar;