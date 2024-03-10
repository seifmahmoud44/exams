import React from "react";

const Qusetions = () => {
  return (
    <div className="max-md:w-full w-[700px] m-auto">
      {/* first type pf questions */}
      <div className="">
        <form className="flex flex-col gap-3 justify-center items-center">
          <label
            className="w-full p-3 border border-border bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md"
            htmlFor="quesion"
          >
            <input className="ml-6" type="radio" name="quesion" id="quesion" />
            السؤال الاول
          </label>
          <label
            className="w-full p-3 border border-border bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md"
            htmlFor="quesion2"
          >
            <input className="ml-6" type="radio" name="quesion" id="quesion2" />
            السؤال الاول
          </label>
          <label
            className="w-full p-3 border border-border bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md"
            htmlFor="quesion3"
          >
            <input className="ml-6" type="radio" name="quesion" id="quesion3" />
            السؤال الاول
          </label>
          <label
            className="w-full p-3 border border-border bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md"
            htmlFor="quesion4"
          >
            <input className="ml-6" type="radio" name="quesion" id="quesion4" />
            السؤال الاول
          </label>
        </form>
      </div>
      {/* second type pf questions */}
      <div>
        <label
          className="block w-full p-3 border border-border bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md"
          htmlFor="quesion3"
        >
          <input className="ml-6" type="radio" name="quesion" id="quesion3" />
          السؤال الاول
        </label>
        <label
          className="block w-full p-3 border border-border bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md mt-5"
          htmlFor="quesion4"
        >
          <input className="ml-6" type="radio" name="quesion" id="quesion4" />
          السؤال الاول
        </label>
      </div>
      {/* three type pf questions */}
      <div>
        <textarea
          name=""
          id=""
          cols="20"
          rows="10"
          className="bg-lightBlue focus:outline-none rounded-md p-3 w-full text-xl font-normal"
          placeholder="اكتب اجابتك هنا. . . . ."
        ></textarea>
      </div>
      {/* four type pf questions */}
      <div>
        <input type="file" />
      </div>
    </div>
  );
};

export default Qusetions;
