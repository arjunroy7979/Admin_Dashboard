
const menu = [
  {
    title: "Dashboard",
    icon: <i class="fa fa-th" />,
    path: "/dashboard",
  },
  {
    title: "Job Desk",
    icon: <i class="fa fa-briefcase" />,
    path: "/job-desk",
  },
  {
    title: "Employee",
    icon: <i class="fa fa-users" />,
    childrens: [
      {
        title: "Employee Dashboard",
        path: "/employee/employee-dashboard",
      },
      {
        title: "Employee JobDesk",
        path: "/employee/employee-jobdesk",
      },
      {
        title: "All Employee",
        path: "/employee/all-employee",
      },
      {
        title: "Designation",
        path: "/employee/designation",
      },
      {
        title: "Employee Status",
        path: "/employee/employee-status",
      },
    ],
  },
  {
    title: "Leave",
    icon: <i class="fa fa-envelope-o" />,
    childrens: [
      {
        title: "Leave Status",
        path: "/leave/leave-status",
      },
      {
        title: "Leave Request",
        path: "/leave/leave-request",
      }
    ],
  },
  {
    title: "Attendance",
    icon: <i class="fa fa-address-book" />,
    childrens: [
      {
        title: "Daily Log",
        path: "/attendance/daily-log",
      },
      {
        title: "Attendance Req",
        path: "/attendance/attendance-req",
      },
      {
        title: "Summary",
        path: "/attendance/summary",
      },
    ],
  },
  {
    title: "Payroll",
    icon: <i class="fa fa-credit-card-alt" />,
    childrens: [
      {
        title: "Salary Gen",
        path: "/payroll/salary-generation",
      },
      {
        title: "Payrun",
        path: "/payroll/payrun",
      },
      {
        title: "Pay Slips",
        path: "/payroll/pay-slips",
      },
    ],
  },
  {
    title: "Administration",
    icon: <i class="fa fa-user-circle-o" />,
    childrens: [
      {
        title: "Announcement",
        path: "/admin/announcement",
      },
    ],
  },
  {
    title: "Assets",
    icon: <i class="fa fa-money" />,
    path: "/assets",
  },
];

export default menu;
