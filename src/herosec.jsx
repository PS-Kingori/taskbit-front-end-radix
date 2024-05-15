
import { Button } from '@radix-ui/themes';
import { Text, Em, Strong } from '@radix-ui/themes';



const Herosec = () => {
  return (
    <>
    
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 h-[65vh]">
        <div className="w-full sm:w-1/2 flex flex-wrap  px-4">
          <div className="px-80 pt-56">
            <h1 className='text-6xl font-bold'>Introducing Taskbit</h1>
            <h1 className="text-2xl">Your Tasks, <span className="font-bold">Wherever you go</span></h1>
           <div className='pt-9'>
           <Button color="blue" size='3' variant="solid">
    Start Notes
  </Button>
           </div>
            
            

          </div>
        </div>
        <div className="w-full sm:w-1/2 flex  ">
         <img src="/hero.gif." alt="image" />
        </div>

      </div>
      <div className="text-4xl rounded-3xl mx-20 flex items-center justify-center h-80 bg-gradient-to-r from-blue-500 to-blue-100">
  <div className=" text-center font-extrabold">

  </div>
  <Text className='text-white'>
  The <Em>most</Em> important thing to remember is,{' '}
  <Strong>stay positive</Strong>.
</Text>
</div>
    </>
  );
};

export default Herosec;
