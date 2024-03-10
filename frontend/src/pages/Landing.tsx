
import { Link }  from "react-router-dom"



export default function Landing() {
    

  return (
    <div className="flex flex-col min-h-[100dvh]">
    <div className=" border-b flex justify-evenly md:justify-between px-10 py-5 mb-4">
        <Link to={"/blogs"} className=" flex flex-col justify-center font-semibold text-2xl cursor-pointer">
            write iT
        </Link>
        <div className=" flex">
          <div>
          <Link to={"/blogs"} className=" invisible md:visible text-sm font-medium hover:underline underline-offset-4 mx-4">
            Blogs
            </Link>
          <Link to={"/signin"} className=" invisible md:visible text-sm font-medium hover:underline underline-offset-4 mx-4">
            Signin
            </Link>
            <Link to={"/signup"}>
            <button type="button" className=" text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4
             focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button>
            </Link>
          </div>
           
        </div>
    </div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 border-b">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to  write iT</h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The place for all the latest news, tips, and tricks. Let our team of experts guide you through the world
                of tech.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100"
                to={"/signup"}
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-4 px-4 md:px-6 lg:gap-10">
            <div className="mx-auto space-y-4 text-center">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">Featured</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Introducing write iT</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Dive into the world of the write iT with our inaugural post. We're excited to share our thoughts, and
                we can't wait to hear yours.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-4 px-4">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src="https://cdn.pixabay.com/photo/2015/10/02/15/00/diary-968592_1280.jpg"
                width="550"
              />
              <div className="grid gap-4 md:gap-8">
                <p className="text-sm text-gray-500 dark:text-gray-400">Published on August 23, 2023</p>
                <div className="space-y-2">
                  <p className="text-xl font-bold tracking-tight">Welcome to the write iT</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dive into the world of the write iT with our inaugural post. We're excited to share our thoughts,
                    and we can't wait to hear yours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-4 px-4 md:px-6 lg:gap-10">
            <div className="mx-auto space-y-4 text-center">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Featured</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Best of the write iT</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Dive into the world of the write iT with our inaugural post. We're excited to share our thoughts, and
                we can't wait to hear yours.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-4 px-4">
              <ul className="grid gap-6">
                <li className="grid gap-1">
                  <h3 className="text-xl font-bold">Welcome to the write iT</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dive into the world of the write iT with our inaugural post. We're excited to share our thoughts,
                    and we can't wait to hear yours.
                  </p>
                </li>
                <li className="grid gap-1">
                  <h3 className="text-xl font-bold">Welcome to the write iT</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dive into the world of the write iT with our inaugural post. We're excited to share our thoughts,
                    and we can't wait to hear yours.
                  </p>
                </li>
                <li className="grid gap-1">
                  <h3 className="text-xl font-bold">Welcome to the write iT</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dive into the world of the write iT with our inaugural post. We're excited to share our thoughts,
                    and we can't wait to hear yours.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 write iT Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to={"/"} className="text-xs hover:underline underline-offset-4" >
            Terms of Service
          </Link>
          <Link to={"/"} className="text-xs hover:underline underline-offset-4" >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


