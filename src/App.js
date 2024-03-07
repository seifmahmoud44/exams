function App() {
  return (
    <div className="">
      <div className="w-[80%] m-auto py-20">
        <div className="flex justify-between items-center mb-20">
          <div className="py-3 px-5 rounded-full border border-border bg-blue">
            <h1 className="text-text text-xl font-medium">{`السؤال ؤقم من رقم`}</h1>
          </div>
          <div className="flex">
            <div className="py-3 pl-16 px-5 rounded-full border border-border bg-blue">
              <h1 className="text-text text-xl font-medium">الوقت الباقي</h1>
            </div>
            <div className="translate-x-14 py-3 px-5 rounded-full border border-border  bg-darkBlue">
              <h1 className="text-white text-xl font-medium">10:25</h1>
            </div>
          </div>
        </div>
        <h1 className="text-text font-medium text-2xl mb-10 mr-20">
          راس السؤال
        </h1>
        <div className="w-[700px] m-auto">
          {/* first type pf questions */}
          {/* <div className="">
            <form className="flex flex-col gap-3 justify-center items-center">
              <label
                className="w-full p-3 border border-border bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md"
                htmlFor="quesion"
              >
                <input
                  className="ml-6"
                  type="radio"
                  name="quesion"
                  id="quesion"
                />
                السؤال الاول
              </label>
              <label
                className="w-full p-3 border border-border bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md"
                htmlFor="quesion2"
              >
                <input
                  className="ml-6"
                  type="radio"
                  name="quesion"
                  id="quesion2"
                />
                السؤال الاول
              </label>
              <label
                className="w-full p-3 border border-border bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md"
                htmlFor="quesion3"
              >
                <input
                  className="ml-6"
                  type="radio"
                  name="quesion"
                  id="quesion3"
                />
                السؤال الاول
              </label>
              <label
                className="w-full p-3 border border-border bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md"
                htmlFor="quesion4"
              >
                <input
                  className="ml-6"
                  type="radio"
                  name="quesion"
                  id="quesion4"
                />
                السؤال الاول
              </label>
            </form>
          </div> */}
          {/* second type pf questions */}
          {/* <div>
            <label
              className="block w-full p-3 border border-border bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md"
              htmlFor="quesion3"
            >
              <input
                className="ml-6"
                type="radio"
                name="quesion"
                id="quesion3"
              />
              السؤال الاول
            </label>
            <label
              className="block w-full p-3 border border-border bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md mt-5"
              htmlFor="quesion4"
            >
              <input
                className="ml-6"
                type="radio"
                name="quesion"
                id="quesion4"
              />
              السؤال الاول
            </label>
          </div> */}
          {/* three type pf questions */}
          {/* <div>
            <textarea
              name=""
              id=""
              cols="20"
              rows="10"
              className="bg-lightBlue focus:outline-none rounded-md p-3 w-full text-xl font-normal"
              placeholder="اكتب اجابتك هنا. . . . ."
            ></textarea>
          </div> */}
          {/* four type pf questions */}
          <div>
            <input type="file" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
