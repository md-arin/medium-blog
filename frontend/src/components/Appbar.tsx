import Avatar from "./Avatar"

function Appbar() {
  return (
    <div className=" border-b flex justify-between px-10 py-5 mb-4">
        <div className=" flex flex-col justify-center font-semibold text-2xl">
            Write IT
        </div>
        <div>
            <Avatar size="big" name="Lew" />
        </div>
    </div>
  )
}

export default Appbar