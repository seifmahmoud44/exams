import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExam } from "../store/examSlice";
import leftImg from "../img/left-arrow.png";
import rightImg from "../img/next.png";
import final from "../img/final.png";
const Qusetions = () => {
  const dispatch = useDispatch();
  const [count, setcount] = useState(0);

  const exams = useSelector((state) => state.examSlice.exam);
  const questionsLength = exams.length;
  useEffect(() => {
    dispatch(getExam("IHCAWX5IS4FGG718SMCN"));

    // if (count > exams.length) {
    //   console.log("yes");
    //   setcount(exams.length);
    // }
    // if (count < 0) {
    //   setcount(0);
    // }
  }, [dispatch]);

  const [openImg, setOpenImg] = useState(false);
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className=" md:w-[700px] m-auto flex  gap-44 relative h-[600px] overflow-x-hidden">
      {exams &&
        exams.map((question, index) => (
          <div
            key={index}
            className={`w-full absolute top-0 transition-all ${
              count === index ? "left-0" : "left-full"
            } `}
          >
            <form
              onSubmit={submitHandler}
              className="flex flex-col gap-3 justify-center items-center my-10   "
            >
              <h1 className="text-text font-medium text-xl">
                {question.question}
              </h1>
              {question.imgWithQuestions !== null && (
                <div
                  onClick={() => setOpenImg(true)}
                  className="h-44 overflow-hidden "
                >
                  <img
                    className="object-contain"
                    src={`https://exam.e3lanotopia.software/api/v1/get_image/${question.imgWithQuestions}`}
                    alt=""
                  />
                </div>
              )}
              {openImg && (
                <div
                  onClick={() => setOpenImg(false)}
                  className="absolute top-0 left-0 w-full h-full bg-black-100"
                >
                  <img
                    src={`https://exam.e3lanotopia.software/api/v1/get_image/${question.imgWithQuestions}`}
                    alt=""
                  />
                </div>
              )}
              {question.questionType === "mcq" ? (
                question.answers.map((answer, itemIndex) => (
                  <label
                    className="w-full p-3 border border-border bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md"
                    htmlFor={answer.id}
                  >
                    <input
                      className="ml-6"
                      type="radio"
                      name={answer.answerCode}
                      id={answer.id}
                      value={answer.answer}
                    />
                    {answer.answer}
                  </label>
                ))
              ) : question.questionType === "true_false" ? (
                <form className=" flex flex-col gap-3 justify-center items-center my-10 w-full  ">
                  <label
                    className=" w-full p-3 border border-border bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md my-3 "
                    htmlFor="quesion3"
                  >
                    <input
                      className="ml-6"
                      type="radio"
                      name="quesion"
                      id="quesion3"
                    />
                    العبارة صحيحة
                  </label>
                  <label
                    className="block w-full p-3 border border-border bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md  my-3"
                    htmlFor="quesion4"
                  >
                    <input
                      className="ml-6"
                      type="radio"
                      name="quesion"
                      id="quesion4"
                    />
                    العبارة خاطئة
                  </label>
                </form>
              ) : null}

              {/* <button type="submit">Submit</button> */}
            </form>
          </div>
        ))}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex justify-center items-center gap-5">
        <button
          disabled={count < 1}
          className={`${
            count < 1 ? "bg-gray" : "bg-darkBlue"
          }  py-2 px-4 rounded-full text-white flex justify-center items-center gap-3`}
          onClick={() => setcount(count - 1)}
        >
          <img src={rightImg} alt="" />
          السابق
        </button>
        {count === exams.length - 1 ? (
          <button className="bg-red py-2 px-4 rounded-full text-white flex justify-center items-center gap-3">
            تسليم الامتحان
            <img src={final} alt="" className="" />
          </button>
        ) : (
          <button
            disabled={count === exams.length - 1}
            onClick={() => setcount(count + 1)}
            className="bg-darkBlue py-2 px-4 rounded-full text-white flex justify-center items-center gap-3"
          >
            التالي
            <img src={leftImg} alt="" className="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Qusetions;
