import { Link } from "react-router-dom"
import Avatar from "./Avatar"
import { useUserdetails } from "../hooks"
import ProfileDropdown from "./Dropdown";





function Appbar() {



  const userDetails = useUserdetails()
  console.log(userDetails);

  

  return (
    <div className=" border-b flex justify-between px-10 py-5 mb-4">
        <Link to={"/blogs"} className=" flex flex-col justify-center font-semibold text-2xl cursor-pointer">
            Write IT
        </Link>
        <div className=" flex">
          <div>
            <Link to={"/publish"}>
          <button type="button" className=" cursor-pointer mr-6 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4
           focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600
            dark:hover:bg-green-700 dark:focus:ring-green-800">Write</button>
            </Link>
          </div>
            <Avatar size="big" />
            <ProfileDropdown name={userDetails.name} username={userDetails.username} />
        </div>
    </div>
  )
}

export default Appbar