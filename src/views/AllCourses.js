import { useEffect, useState } from "react";
import CourseTable from "../components/CourseTable";
import { CourseService } from "../service/CourseService";

export default function AllCourses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    CourseService.getAllCourses()
      .then((response) => {
        //成功的回调
        setCourses(response.data);
      })
      .catch((error) => {
        //失败的回掉
        console.log(error);
      })
  }, [])

  return (
    <div>
      <CourseTable courses={courses} />
    </div>
  )
}