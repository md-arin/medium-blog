import { Dropdown } from 'flowbite-react';
import { HiLogout, HiViewGrid } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export default function ProfileDrop({name}: {name: string}) {
   const navigate = useNavigate();
    function logOut(){
        localStorage.removeItem("token")
        navigate("/")
    }
  return (
    <div className=' bg-slate-500 text-black h-8 rounded-lg ml-1 mt-1 '>
    <Dropdown label="">
      <Dropdown.Header>
        <span className="block text-sm">{name}</span>
        <span className="block truncate text-sm font-medium">bonnie@flowbite.com</span>
      </Dropdown.Header>
      <Dropdown.Item icon={HiViewGrid}>Forget Password</Dropdown.Item>
      {/* <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
      <Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item> */}
      <Dropdown.Divider />
      <Dropdown.Item icon={HiLogout} onClick={logOut}>Sign out</Dropdown.Item>
    </Dropdown>
    </div>
  );
}
