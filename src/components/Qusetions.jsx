import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getExam, sendMCQAnswer } from "../store/datalice";
import leftImg from "../img/left-arrow.png";
import rightImg from "../img/next.png";
import final from "../img/final.png";
import axios from "axios";
const Qusetions = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [count, setcount] = useState(0);

  useEffect(() => {
    // dispatch(getExam("IHCAWX5IS4FGG718SMCN"));
    const fetch = async () => {
      try {
        const res = await axios.get(
          `https://exam.e3lanotopia.software/api/v1/get_exam_questions/IHCAWX5IS4FGG718SMCN`
        );
        return setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  const [openImg, setOpenImg] = useState(false);

  // const mcqQuestions = useRef(null);
  // const submitHandler = (e) => {
  //   setValue(e.target.value);
  // };
  useCallback(() => {}, []);
  const [send, setSend] = useState(false);
  const formHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    for (let i = 0; i < data.length; i++) {
      const mcqAnswerin =
        data[i].questionType === "mcq" && formData.get(`${data[i].id}`);
      const mcqAnswer = {
        answer: mcqAnswerin,
        is_correct: true,
        answerCode: `${
          data[i].questionType === "mcq" &&
          data[i].answers.find((x) => x.answer === mcqAnswerin)
        }`,
        imgWithAnswer: "string",
      };
      // console.log(
      //   data[i].questionType === "mcq" &&
      //     data[i].answers.find((x) => x.answer === mcqAnswerin)
      // );
    }
  };

  return (
    <form
      onSubmit={formHandler}
      className=" md:w-[700px] m-auto   gap-44 relative h-[600px] overflow-x-hidden"
    >
      <div className="flex">
        {data &&
          data.map((question, index) => (
            <div
              key={index}
              className={`w-full absolute top-0 transition-all ${
                count === index ? "left-0" : "left-full"
              } `}
            >
              <div className="flex flex-col gap-3 justify-center items-center my-10   ">
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
                    className="absolute top-0 left-0 w-full h-full bg-black-100 z-20"
                  >
                    <img
                      src={`https://exam.e3lanotopia.software/api/v1/get_image/${question.imgWithQuestions}`}
                      alt=""
                    />
                  </div>
                )}
                {question.questionType === "mcq" ? (
                  <div className=" flex flex-col w-full gap-3">
                    {question.answers.map((answer, itemIndex) => (
                      <label
                        className="w-full p-3 border border-border bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md"
                        htmlFor={answer.id}
                        key={itemIndex}
                      >
                        <input
                          className="ml-6"
                          type="radio"
                          name={question.id}
                          id={answer.id}
                          value={answer.answer}
                        />
                        {answer.answer}
                      </label>
                    ))}
                  </div>
                ) : question.questionType === "true_false" ? (
                  <div className=" flex flex-col gap-3 justify-center items-center my-10 w-full  ">
                    <label
                      className=" w-full p-3 border border-border bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md my-3 "
                      htmlFor="quesion3"
                    >
                      <input
                        className="ml-6"
                        type="radio"
                        name={question.id}
                        id="quesion3"
                        value={"true"}
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
                        name={question.id}
                        id="quesion4"
                        value={"false"}
                      />
                      العبارة خاطئة
                    </label>
                  </div>
                ) : question.questionType === "text" ? (
                  <div className="w-full px-9">
                    <textarea
                      className="w-full outline-none border border-gray rounded-md px-5 py-3"
                      name={question.id}
                      id=""
                      cols="30"
                      rows="9"
                      placeholder="اكتب اجابتك هنا"
                    />
                  </div>
                ) : null}
              </div>
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
          {count === data.length - 1 ? (
            <button
              type="submit"
              className="bg-red py-2 px-4 rounded-full text-white flex justify-center items-center gap-3"
            >
              تسليم الامتحان
              <img src={final} alt="" className="" />
            </button>
          ) : (
            <button
              disabled={count === data.length - 1}
              onClick={() => setcount(count + 1)}
              className="bg-darkBlue py-2 px-4 rounded-full text-white flex justify-center items-center gap-3"
            >
              التالي
              <img src={leftImg} alt="" className="" />
            </button>
          )}
        </div>
      </div>
      <button
        className="absolute top-0 right-0 z-50 hover:scale-125"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Qusetions;
