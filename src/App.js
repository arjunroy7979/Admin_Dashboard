import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/auth/Login';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './components/layout/Layout';
import AllEmployee from './pages/employee/AllEmployee';
import JobDesk from './pages/jobdesk/JobDesk';
import Designation from './pages/employee/Designation';
import EmployeeStatus from './pages/employee/EmployeeStatus';
import LeaveStatus from './pages/Leave/LeaveStatus';
import LeaveRequest from './pages/Leave/LeaveRequest';
import DailyLog from './pages/attendance/DailyLog';
import AttendanceReq from './pages/attendance/AttendanceReq';
import Summary from './pages/attendance/Summary';
import SalaryGeneration from './pages/payroll/SalaryGeneration';
import Payrun from './pages/payroll/Payrun';
import PaySlips from './pages/payroll/PaySlips';
import Announcement from './pages/administration/Announcement';
import Assets from './pages/Assets/Assets';
import AddEmployement from './pages/employee/AddEmployement';
import EmployeeDashboard from './pages/employee/EmployeeDashboard';
import EmployeeJobDesk from './pages/employee/EmployeeJobDesk';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* ...............Login................. */}
          <Route path='/' element={<Login />} />
          {/* ...............Dashboard................. */}
          <Route path='/dashboard'
            element={
              <Sidebar>
                <Layout>
                  <Dashboard />
                </Layout>
              </Sidebar>} />
          {/* ...............Job Desk................. */}
          <Route path='/job-desk'
            element={
              <Sidebar>
                <Layout>
                  <JobDesk />
                </Layout>
              </Sidebar>} />
          {/* ...............Employee................. */}
          <Route
            path="/employee/employee-dashboard"
            element={
              <Sidebar>
                <Layout>
                  <EmployeeDashboard />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/employee/employee-jobdesk"
            element={
              <Sidebar>
                <Layout>
                  <EmployeeJobDesk />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/employee/all-employee"
            element={
              <Sidebar>
                <Layout>
                  <AllEmployee />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/employee/designation"
            element={
              <Sidebar>
                <Layout>
                  <Designation />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/employee/employee-status"
            element={
              <Sidebar>
                <Layout>
                  <EmployeeStatus />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/employee/add-employee"
            element={
              <Sidebar>
                <Layout>
                  <AddEmployement />
                </Layout>
              </Sidebar>
            }
          />
          {/* ...............Leave................. */}
          <Route
            path="/leave/leave-status"
            element={
              <Sidebar>
                <Layout>
                  <LeaveStatus />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/leave/leave-request"
            element={
              <Sidebar>
                <Layout>
                  <LeaveRequest />
                </Layout>
              </Sidebar>
            }
          />
          {/* ...............Attendance................. */}
          <Route
            path="/attendance/daily-log"
            element={
              <Sidebar>
                <Layout>
                  <DailyLog />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/attendance/attendance-req"
            element={
              <Sidebar>
                <Layout>
                  <AttendanceReq />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/attendance/summary"
            element={
              <Sidebar>
                <Layout>
                  <Summary />
                </Layout>
              </Sidebar>
            }
          />

          {/* ...............Payroll................. */}
          <Route
            path="/payroll/salary-generation"
            element={
              <Sidebar>
                <Layout>
                  <SalaryGeneration />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/payroll/payrun"
            element={
              <Sidebar>
                <Layout>
                  <Payrun />
                </Layout>
              </Sidebar>
            }
          />
          <Route
            path="/payroll/pay-slips"
            element={
              <Sidebar>
                <Layout>
                  <PaySlips />
                </Layout>
              </Sidebar>
            }
          />
          {/* ...............Administration................. */}
          <Route
            path="/admin/announcement"
            element={
              <Sidebar>
                <Layout>
                  <Announcement />
                </Layout>
              </Sidebar>
            }
          />
          {/* ...............Assets................. */}
          <Route
            path="/assets"
            element={
              <Sidebar>
                <Layout>
                  <Assets />
                </Layout>
              </Sidebar>
            }
          />
          <Route path='*' element={<h1 style={{ color: 'red', marginLeft: 450, marginTop: 250 }}>Page Not Found: Error</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App