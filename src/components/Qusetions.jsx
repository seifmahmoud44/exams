import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExam } from "../store/examSlice";
import { AnimatePresence, motion } from "framer-motion";
const Qusetions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExam("IHCAWX5IS4FGG718SMCN"));
  }, [dispatch]);
  const exams = useSelector((state) => state.examSlice.exam);
  const [count, setcount] = useState(1);

  return (
    <div className=" md:w-[700px] m-auto flex relative gap-44 ">
      <div className="z-20" onClick={() => setcount(count + 1)}>
        <p className="cursor-pointer ">asda</p>
      </div>
      <div className="z-20" onClick={() => setcount(count - 1)}>
        <p className="cursor-pointer ">wow</p>
      </div>
      <div className="absolute top-0 right-0 overflow-hidden w-full">
        <AnimatePresence mode="wait">
          {exams &&
            exams.map((question) => {
              return question.questionType === "mcq" &&
                question.id === count ? (
                <motion.div
                  key={question.id}
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  exit={{ y: -500 }}
                >
                  <form className="flex flex-col gap-3 justify-center items-center my-10  pl-9 ">
                    <h1 className="text-text font-medium text-xl ">
                      {question.question}
                    </h1>
                    {question.answers.map((answer) => {
                      return (
                        <label
                          className="w-full p-3 border border-border bg-lightBlue hover:bg-blue transition-all cursor-pointer rounded-md"
                          htmlFor={answer.id}
                        >
                          <input
                            className="ml-6"
                            type="radio"
                            name={answer.answerCode}
                            id={answer.id}
                          />
                          السؤال الاول
                        </label>
                      );
                    })}
                  </form>
                </motion.div>
              ) : question.questionType === "true_false" &&
                question.id === count ? (
                <motion.div
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  exit={{ y: -500 }}
                >
                  <form className=" flex flex-col gap-3 justify-center items-center my-10 w-full pl-9 ">
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
                </motion.div>
              ) : null;
            })}
        </AnimatePresence>
      </div>
      {/* first type pf questions */}

      {/* second type pf questions */}

      {/* <div>
        <textarea
          name=""
          id=""
          cols="20"
          rows="10"
          className="bg-lightBlue focus:outline-none rounded-md p-3 w-full text-xl font-normal"
          placeholder="اكتب اجابتك هنا. . . . ."
        ></textarea>
      </div>

      <div>
        <input type="file" />
      </div> */}
    </div>
  );
};

export default Qusetions;
