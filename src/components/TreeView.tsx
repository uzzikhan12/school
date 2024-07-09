import * as React from 'react';
import Box from '@mui/material/Box';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';

export default function TreeView(props:any) {

  const {addstd, allstd, addteacher, allteacher, FeeStructure, FeeSubmission, AddSubject, SubjectList, classForm, examSchedule, examResult, admission} = props;

  return <>
  <Box sx={{ minHeight: 352, minWidth: 250 }}>
    <SimpleTreeView>
    
      <TreeItem itemId="grid" label="Student">
        <TreeItem itemId="grid-community" label="Add Student" onClick={addstd} />
        <TreeItem itemId="grid-pro" label="Student List" onClick={allstd}/>
        <TreeItem itemId="grid-premium" label="Transfer Student" />
      </TreeItem>
    
    
      <TreeItem itemId="fees" label="Fees">
        <TreeItem itemId="fees-community" label="Fees Structure" onClick={FeeStructure} />
        <TreeItem itemId="fees-pro" label="Fees Submission" onClick={FeeSubmission}/>
        <TreeItem itemId="fees-premium" label="Fees Voucher" />
      </TreeItem>
    
      <TreeItem itemId="Teacher" label="Teacher">
        <TreeItem itemId="teacher-community" label="Add Teacher" onClick={addteacher}/>
        <TreeItem itemId="teacher-pro" label="Teacher List" onClick={allteacher}/>
        <TreeItem itemId="teacher-premium" label="Teacher Allocation Screen" />
      </TreeItem>
    
      <TreeItem itemId="Subject" label="Subject">
        <TreeItem itemId="pickers-community" label="Add Subject"  onClick={AddSubject}/>
        <TreeItem itemId="pickers-pro" label="Subject List" onClick={SubjectList}/>
      </TreeItem>
    
      <TreeItem itemId="Syllabus" label="Syllabus">
        <TreeItem itemId="syllabus-community" label="Syllabus Form" />
        <TreeItem itemId="syllabus-pro" label="Syllabus List" />
      </TreeItem>
    
      <TreeItem itemId="Class" label="Class">
        <TreeItem itemId="class-community" label="Class Form" onClick={classForm}/>
        <TreeItem itemId="class-pro" label="Class List" />
      </TreeItem>
    
      <TreeItem itemId="Exam" label="Exam">
        <TreeItem itemId="exam-community" label="Exam Schedule" onClick={examSchedule}/>
        <TreeItem itemId="exam-pro" label="Exam Result" onClick={examResult}/>
      </TreeItem>
    
      <TreeItem itemId="admission" label="Admission">
        <TreeItem itemId="admission-community" label="Admission" onClick={admission}/>
      </TreeItem>
    
      <TreeItem itemId="School-view" label="School">
        <TreeItem itemId="School-view-community" label="Registration" />
      </TreeItem>
    
    </SimpleTreeView>
  </Box>
  </>
}
