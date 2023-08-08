import * as React from "react";
import { Route, Routes } from "react-router-dom";
import AllCourses from "./views/AllCourses";
import EnrolledCourses from "./views/EnrolledCourses";
import NoMatch from "./views/NoMatch"; // 这里导入NoMatch组件

import "./App.css";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div>
      <MenuBar />
      <Routes>
        <Route path="/" element={<AllCourses />} />
        <Route path="enrolledCourses" element={<EnrolledCourses />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
