import { BeakerIcon } from "@heroicons/react/24/solid"

const Demo = () => {
  return (
    <>
       <nav className="bg-gray-100 shadow-md text-grey-800 p-4 flex items-center">
          <BeakerIcon className="h-6 w-6  text-blue-500 ml-10" />{" "}
          {/* Adjust the size and color as needed */}
          <div className="container ps-1 mr-auto flex justify-between items-center">
            <div className="text-xl font-bold">Taskbit</div>
            <div className="hidden md:flex space-x-4">
              <a href="/" className="text-gray-800 hover:text-blue-300">
                Home
              </a>
              <a href="/demo" className="text-gray-800 hover:text-blue-300">
                Demo
              </a>
              {/* <Link to="/demo" className="text-gray-800 hover:text-blue-300">Demo</Link> */}
              <a href="/signup" className="text-gray-800 hover:text-blue-300">
                Sign in
              </a>
            </div>
          </div>
        </nav>

    <div>Demo</div>
    </>

  )
}

export default Demo