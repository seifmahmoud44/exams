import Countdown from "react-countdown";
import { useSelector } from "react-redux";

const Timer = () => {
  const examInfo = useSelector((state) => state.examSlice.examInfo);
  const Completionist = () => <span className="text-white">انتهى!</span>;
  return (
    <div className="flex mr-auto">
      <div className=" max-md:-translate-x-14 py-3 pl-16 px-5 rounded-full border border-border bg-blue">
        <h1 className="text-text text-xl font-medium">الوقت الباقي</h1>
      </div>
      <div className="z-10 md:translate-x-14 py-3 px-5 rounded-full border border-border  bg-darkBlue text-white counter">
        {examInfo !== null && (
          <Countdown
            daysInHours={true}
            children={{ m: 10 }}
            date={
              Date.now() +
              (examInfo.examHours * 60 * 60 + examInfo.examMinutes * 60) * 1000
            }
            autoStart={examInfo ? true : false}
          >
            <Completionist />
          </Countdown>
        )}
      </div>
    </div>
  );
};

export default Timer;
