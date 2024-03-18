import { useEffect, useMemo, useState } from "react";
import leftImg from "./img/left-arrow.png";
import rightImg from "./img/next.png";
import final from "./img/final.png";

import { useDispatch, useSelector } from "react-redux";
import Timer from "./components/Timer";
import { getExam, getExamInfo } from "./store/examSlice";

import Qusetions from "./components/Qusetions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExam("IHCAWX5IS4FGG718SMCN"));
    dispatch(getExamInfo("IHCAWX5IS4FGG718SMCN"));
  }, [dispatch]);

  const examInfo = useSelector((state) => state.examSlice.examInfo);
  const isLoading = useSelector((state) => state.examSlice.isLoading);

  const [count, setcount] = useState(0);

  const exams = useSelector((state) => state.examSlice.exam);

  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   let allQuestions = [];
  //   let finalData = {};
  //   for (let i = 0; i < exams.length; i++) {
  //     const mcqAnswerin =
  //       exams[i].questionType === "mcq" && formData.get(`${exams[i].id}`);
  //     const trueFalseAnswerIn =
  //       exams[i].questionType === "true_false" &&
  //       formData.get(`${exams[i].id}`);
  //     const textAnswerIn =
  //       exams[i].questionType === "text" && formData.get(`${exams[i].id}`);

  //     const AnswerCode = exams[i].answerCode;
  //     const mcqAnswer = {
  //       answer: mcqAnswerin,
  //       questionType: "mcq",
  //       answerCode: AnswerCode,
  //     };
  //     const trueFalseNswer = {
  //       answer: trueFalseAnswerIn,
  //       questionType: "true_false",
  //       answerCode: AnswerCode,
  //     };
  //     const textNswer = {
  //       answer: textAnswerIn,
  //       questionType: "text",
  //       answerCode: AnswerCode,
  //     };

  //     if (exams[i].questionType === "mcq") {
  //       allQuestions.push(mcqAnswer);
  //     } else if (exams[i].questionType === "true_false") {
  //       allQuestions.push(trueFalseNswer);
  //     } else if (exams[i].questionType === "text") {
  //       allQuestions.push(textNswer);
  //     }
  //     finalData = {
  //       email: param.email,
  //       examCode: examInfo.examCode,
  //       questions: allQuestions,
  //       platform: examInfo.platform,
  //       userPhone: param.userPhone,
  //       userParentPhone: param.userParentPhone,
  //     };
  //   }

  //   dispatch(sendExam(finalData)).then(() => {
  //     console.log("sent");
  //   });
  // };

  return (
    <div className="py-5 px-4 relative">
      <h1 className="text-text text-2xl font-medium text-center">
        امتحان االكيمياء الصف الثالث الثانوي
      </h1>
      <div className="max-md:py-10 md:w-[80%] m-auto py-20 w-full">
        <div className="flex   flex-col md:flex-row justify-between items-center max-md:mb-5 mb-16 object-left">
          <div className="ml-auto py-3 px-5 rounded-full border border-border bg-blue w-fit mb-5">
            <h1 className="text-text text-xl font-medium">{`السؤال ${
              count + 1
            } من ${exams && exams.length}`}</h1>
          </div>
          {useMemo(() => {
            return examInfo && <Timer />;
          }, [examInfo])}
        </div>
        <Qusetions exams={exams} count={count} examInfo={examInfo} />

        <div className="absolute left-1/2 -translate-x-1/2 max-md:bottom-20 bottom-32 flex justify-center items-center gap-5">
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

          <button
            disabled={count === exams.length - 1}
            onClick={() => setcount(count + 1)}
            className={`${
              count === exams.length - 1 ? "bg-gray" : "bg-darkBlue"
            }  py-2 px-4 rounded-full text-white flex justify-center items-center gap-3`}
          >
            التالي
            <img src={leftImg} alt="" className="" />
          </button>
        </div>
        {count === exams.length - 1 && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-26">
            <button
              form="form"
              type="submit"
              className="  m-auto bg-red py-2 px-4 rounded-full text-white flex justify-center items-center gap-3"
            >
              {!isLoading ? (
                <>
                  <h1>تسليم الامتحان</h1>
                  <img src={final} alt="" className="" />
                </>
              ) : (
                "loading ...."
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
