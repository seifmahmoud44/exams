import { useEffect, useState } from "react";

import Qusetions from "./components/Qusetions";
import { useDispatch, useSelector } from "react-redux";
import Timer from "./components/Timer";
import { getExamInfo } from "./store/examSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExamInfo("IHCAWX5IS4FGG718SMCN"));
  }, [dispatch]);
  const examInfo = useSelector((state) => state.examSlice.examInfo);

  const [count, setCount] = useState(0);
  const exams = useSelector((state) => state.examSlice.exam);

  return (
    <div className="py-5 px-4">
      <h1 className="text-text text-2xl font-medium text-center">
        امتحان االكيمياء الصف الثالث الثانوي
      </h1>
      <div className="max-md:py-10 md:w-[80%] m-auto py-20 w-full">
        <div className="flex   flex-col md:flex-row justify-between items-center mb-20 object-left">
          <div className="ml-auto py-3 px-5 rounded-full border border-border bg-blue w-fit mb-5">
            <h1 className="text-text text-xl font-medium">{`السؤال ${
              count + 1
            } من ${exams && exams.length}`}</h1>
          </div>
          {examInfo && <Timer />}
        </div>

        <Qusetions setcount={setCount} count={count} />
        {/* <div className="w-full">
          <OtherTry />
        </div> */}
      </div>
    </div>
  );
}

export default App;
