import React, { useEffect, useState } from "react";
import { useAsyncValue, useParams } from "react-router-dom";
import axios from "../api/Axios";

const ShowLecture = () => {
  const [allLectures, setallLectures] = useState();
  console.log(allLectures);
  const { id } = useParams();
  const [lecturevideo, setlecturevideo] = useState("");
  const [lecturename, setlecturename] = useState("");
  const [description, setdescription] = useState("");

  const getlecture = async () => {
    try {
      const { data } = await axios.get(`/course/details/${id}`);
      console.log(data.lectures);
      setallLectures(data.lectures);
      setlecturevideo(data.lectures[0].lecturevideo.url);
      setlecturename(data.lectures[0].lecturename);
      setdescription(data.lectures[0].description);
    } catch (error) {
      console.log(error);
    }
  };

  const changeLecture = (lecture)=>{
    setlecturevideo(lecture.lecturevideo.url);
    setlecturename(lecture.lecturename);
    setdescription(lecture.description);


  }
  useEffect(() => {
    getlecture();
  }, []);

  return (
    <div className="w-full h-[100vh] p-5 flex gap-4 max-sm:flex-col max-sm:h-max">
      <div className="videodiv w-[60%] h-[70%]  max-sm:w-full ">
        <div className="videoplayer w-full h-full object-cover">
          <video controls className="w-full h-full" src={lecturevideo}></video>
        </div>
    
        <div className="description">
              <h1 className="text-lg font-semibold text-[#8B77E8]">{lecturename}</h1>
              <h2>lecture Description </h2>
              <p>{description}</p>
            </div>
      </div>
      <div className="palylistdiv w-[40%] min-h-[50vh] p-2 flex flex-col gap-2  shadow-inner overflow-auto max-sm:w-full ">
        <h1 className="text-lg font-semibold text-[#8B77E8]">All Lecture</h1>
        {allLectures && allLectures.map((lecture, i) => (
          <div onClick={()=>changeLecture(lecture)} key={i} className="palylist w-full min-h-[100px] bg-slate-500 p-2 rounded-md flex gap-4 max-sm:bg-red-400 max-sm:w-full">
            <div className="videoimage w-[150px] h-full rounded-sm max-sm:w-[50%] max-sm:bg-slate-500">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsfLxNcbVNWEPTeuSZ_-B1aiJjXC6n4QqeQ&s" alt="" />
            </div>
            <div className="description">
              <h1>Lecture Name</h1>
              <p>lecture Description</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowLecture;
