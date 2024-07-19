import { BrowserRouter, Route, Routes } from "react-router-dom";
import  {Dashboard}  from "../screens/Dashboard";
import { AddStd } from "../screens/AddStd";
import { AllStd } from "../screens/AllStd";
import { AddTeacher } from "../screens/AddTeacher";
import { TeacherList } from "../screens/TeacherList";
import FeeStructure from "../screens/FeesStructure";
import {FeeSubmissionForm} from "../screens/FeeSubmission";
import { AddSubject } from "../screens/AddSubject";
import { SubjectList } from "../screens/SubjectList";
import { ClassForm } from "../screens/ClassForm";
import { ExamSchedule } from "../screens/ExamSchedule";
import { ExamResult } from "../screens/ExamResult";
import { Admission } from "../screens/Admission";
import { SyllabusForm } from "../screens/SyllasbusFrom";
import { SyllabusList } from "../screens/SyllabusList";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/Signup";

export const AppRouter = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="home" element={<Dashboard />}/>
                <Route path="AddStd" element={<AddStd />}/>
                <Route path="allstudent" element={<AllStd />}/>
                <Route path="addteacher" element={<AddTeacher />}/>
                <Route path="teacherlist" element={<TeacherList />}/>
                <Route path="feestructure" element={<FeeStructure />}/>
                <Route path="feesubmission" element={<FeeSubmissionForm />}/>
                <Route path="addsubject" element={<AddSubject />}/>
                <Route path="subjectlist" element={<SubjectList />}/>
                <Route path="classform" element={<ClassForm />}/>
                <Route path="examschedule" element={<ExamSchedule />}/>
                <Route path="examresult" element={<ExamResult />}/>
                <Route path="admission" element={<Admission />}/>
                <Route path="syllabusform" element={<SyllabusForm />}/>
                <Route path="syllabuslist" element={<SyllabusList />}/>
                <Route path="/" element={<Login />}/>
                <Route path="signup" element={<SignUp />}/>
            </Routes>
        </BrowserRouter>
    </>
}