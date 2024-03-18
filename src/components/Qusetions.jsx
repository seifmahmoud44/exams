import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { sendExam } from "../store/examSlice";
import UploadImg from "./UploadImg";

const Qusetions = ({ exams, count, examInfo }) => {
  const dispatch = useDispatch();

  const [openImg, setOpenImg] = useState(false);
  const param = useParams();
  const [upLoad, setUpload] = useState();

  const formHandler = (e) => {
    e.preventDefault();
    console.log(upLoad);
    const formData = new FormData(e.target);
    let allQuestions = [];
    let finalData = {};
    console.log(formData.get("img"));
    for (let i = 0; i < exams.length; i++) {
      const mcqAnswerin =
        exams[i].questionType === "mcq" && formData.get(`${exams[i].id}`);
      const trueFalseAnswerIn =
        exams[i].questionType === "true_false" &&
        formData.get(`${exams[i].id}`);
      const textAnswerIn =
        exams[i].questionType === "text" && formData.get(`${exams[i].id}`);

      const AnswerCode = exams[i].answerCode;
      const mcqAnswer = {
        answer: mcqAnswerin,
        questionType: "mcq",
        answerCode: AnswerCode,
      };
      const trueFalseNswer = {
        answer: trueFalseAnswerIn,
        questionType: "true_false",
        answerCode: AnswerCode,
      };
      const textNswer = {
        answer: textAnswerIn,
        questionType: "text",
        answerCode: AnswerCode,
      };

      if (exams[i].questionType === "mcq") {
        allQuestions.push(mcqAnswer);
      } else if (exams[i].questionType === "true_false") {
        allQuestions.push(trueFalseNswer);
      } else if (exams[i].questionType === "text") {
        allQuestions.push(textNswer);
      }
      finalData = {
        email: param.email,
        examCode: examInfo.examCode,
        questions: allQuestions,
        platform: examInfo.platform,
        userPhone: param.userPhone,
        userParentPhone: param.userParentPhone,
      };
    }

    dispatch(sendExam(finalData)).then(() => {
      console.log("sent");
    });
  };

  return (
    <form
      id="form"
      onSubmit={formHandler}
      className=" md:w-[700px] m-auto  gap-44 relative h-[600px] overflow-x-hidden"
    >
      <div className="flex h-full">
        {exams &&
          exams.map((question, index) => (
            <div
              key={index}
              className={`w-full absolute top-0 transition-all h-auto ${
                count === index ? "left-0" : "left-full"
              } `}
            >
              <div className="flex flex-col gap-3 justify-center items-center my-10  h-full ">
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
                        className={` w-full p-3 border border-border  bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md`}
                        htmlFor={answer.id}
                        key={itemIndex}
                      >
                        <input
                          required
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
                    {/* <label
                      className=" w-full p-3 border border-border bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md my-3 "
                      htmlFor="quesion3"
                    >
                      <input
                        required
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
                        required
                        className="ml-6"
                        type="radio"
                        name={question.id}
                        id="quesion4"
                        value={"false"}
                      />
                      العبارة خاطئة
                    </label> */}
                    <UploadImg setUpload={setUpload} />
                  </div>
                ) : question.questionType === "text" ? (
                  <div className="w-full px-9 max-md:p-0">
                    <textarea
                      required
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
      </div>
      {/* <button
            className="absolute top-0 right-0 z-50 hover:scale-125"
            type="submit"
          >
            Submit
          </button> */}
    </form>
  );
};

export default Qusetions;
