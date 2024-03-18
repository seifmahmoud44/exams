import React, { useRef, useState } from "react";
import uploadImg from "../img/upload.png";
import cancel from "../img/cancel.png";
import { Toaster, toast } from "sonner";
const UploadImg = ({ setUpload }) => {
  const inputRef = useRef(null);
  const deleteImg = useRef(null);
  const [imgs, setImgs] = useState([]);
  return (
    <div
      onClick={() => imgs.length === 0 && inputRef.current.click()}
      className={`w-full h-52 flex justify-center items-center border border-darkBlue rounded-md  border-dashed cursor-pointer ${
        imgs.length === 0 && "hover:bg-lightBlue"
      }  transition-all felx flex-col`}
    >
      <Toaster position="top-center" richColors />

      {imgs.length > 0 ? (
        <div className="flex gap-5 justify-center items-center ">
          {imgs.map((img, inex) => {
            return (
              <div className="w-[100px] relative overflow-hidden group">
                <img
                  ref={deleteImg}
                  key={inex}
                  className="border border-gray rounded-md w-full"
                  src={URL.createObjectURL(img)}
                  alt=""
                />
                <div
                  onClick={() => {
                    setImgs(imgs.filter((_, x) => x !== inex));
                  }}
                  className="w-full h-full bg-gray opacity-40 absolute top-full left-0 group-hover:top-0 transition-all"
                >
                  <img src={cancel} alt="" />
                </div>
              </div>
            );
          })}
          {imgs.length !== 0 && (
            <div
              onClick={() => inputRef.current.click()}
              className="border hover:bg-lightBlue  border-darkBlue rounded-md border-dashed w-[100px] h-[100px] flex justify-center items-center"
            >
              <img width={50} src={uploadImg} alt="" />
            </div>
          )}
        </div>
      ) : (
        <>
          <img className="w-12" src={uploadImg} alt="" />
          <h1 className="text-darkBlue text-1xl">ارفع اجابتك</h1>
        </>
      )}

      <input
        onChange={({ target: { files } }) => {
          const maxSize = 1000000;

          const validFiles = Array.from(files).filter(
            (file) => file.size <= maxSize
          );

          if (imgs.length >= 2) {
            toast.error("3 صور كحد اقصى");
          } else if (validFiles.every((file) => file.size > maxSize)) {
            toast.error("الصورة لا تزيد عن 5 ميجا");
          } else {
            const newImgs = [...imgs, ...validFiles.slice(0, 2 - imgs.length)];
            setImgs(newImgs);
            setUpload(newImgs);
          }
        }}
        multiple
        className="hidden"
        ref={inputRef}
        type="file"
        name="img"
        id=""
      />
    </div>
  );
};

export default UploadImg;
