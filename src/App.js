import OtherTry from "./components/OtherTry";
import Qusetions from "./components/Qusetions";

function App() {
  return (
    <div className="py-5 px-4">
      <h1 className="text-text text-2xl font-medium text-center">
        امتحان االكيمياء الصف الثالث الثانوي
      </h1>
      <div className="max-md:py-10 md:w-[80%] m-auto py-20 w-full">
        <div className="flex   flex-col md:flex-row justify-between items-center mb-20 object-left">
          <div className="ml-auto py-3 px-5 rounded-full border border-border bg-blue w-fit mb-5">
            <h1 className="text-text text-xl font-medium">{`السؤال ؤقم من رقم`}</h1>
          </div>
          <div className="flex mr-auto">
            <div className=" max-md:-translate-x-14 py-3 pl-16 px-5 rounded-full border border-border bg-blue">
              <h1 className="text-text text-xl font-medium">الوقت الباقي</h1>
            </div>
            <div className="z-10 md:translate-x-14 py-3 px-5 rounded-full border border-border  bg-darkBlue">
              <h1 className="text-white text-xl font-medium">10:25</h1>
            </div>
          </div>
        </div>

        <Qusetions />
        {/* <div className="w-full">
          <OtherTry />
        </div> */}
      </div>
    </div>
  );
}

export default App;
