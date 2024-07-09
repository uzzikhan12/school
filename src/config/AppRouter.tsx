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

export const AppRouter = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}/>
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
            </Routes>
        </BrowserRouter>
    </>
}