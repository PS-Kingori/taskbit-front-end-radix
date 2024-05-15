
import { BeakerIcon } from '@heroicons/react/24/solid';
import Herosec from './herosec';
import './App.css'
import Footer from './Footer';
import Login from './Login';


function App() {

  return (
    <>
 
<nav className="bg-gray-100 shadow-md text-grey-800 p-4 flex items-center">
<BeakerIcon className="h-6 w-6  text-blue-500 ml-10" /> {/* Adjust the size and color as needed */}

    <div className="container ps-1 mr-auto flex justify-between items-center">

        <div className="text-xl font-bold">Taskbit</div>
        <div className="hidden md:flex space-x-4">
            <a href="/Login" className="text-gray-800 hover:text-blue-300">Home</a>
            <a href="#" className="text-gray-800 hover:text-blue-300">About</a>
            <a href="#" className="text-gray-800 hover:text-blue-300">Contact</a>
        </div>
    </div>
</nav>

<Herosec />
<Footer />
<Login />
        
    </>
  )
}

export default App
