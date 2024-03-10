import { Dropdown } from 'flowbite-react';
import { HiLogout, HiViewGrid } from 'react-icons/hi';

export default function ProfileDrop({name}: {name: string}) {
    function logOut(){
        
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
