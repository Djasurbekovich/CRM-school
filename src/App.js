import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import Home from "./Pages/Home/Home";
import Students from "./Pages/Students/Students";
import SingleStudent from "./Pages/SingleStudent/SingleStudent";
import Teachers from "./Pages/Teachers/Teachers";
import Courses from "./Pages/Courses/Courses";
import Groups from "./Pages/Groups/Groups";
import SingleGroup from "./Pages/SingleGroup/SingleGroup";
import Lids from "./Pages/Lids/Lids";
import Settings from "./Pages/Settings/Settings";
import Rooms from "./Pages/Settings/Rooms";
import AutoSMS from "./Pages/Settings/Auto-SMS";
import SMSTemplates from "./Pages/Settings/SMS-Templates";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/singlestudent/:_id" element={<SingleStudent />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/singlegroup/:_id" element={<SingleGroup />} />
        <Route path="/lids" element={<Lids />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/rooms" element={<Rooms />} />
        <Route path="/settings/autosms" element={<AutoSMS />} />
        <Route path="/settings/smstemplates" element={<SMSTemplates />} />
      </Routes>
    </>
  );
}

export default App;
