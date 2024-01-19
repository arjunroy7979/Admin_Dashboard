import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AllEmployee = () => {
  const [empdata, empdatachange] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/employee").then((res) => {
      return res.json();
    }).then((resp) => {
      empdatachange(resp);
    }).catch((err) => {
      console.log(err.message);
    })
  }, []);
  
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <div className='container-flex'>
            <div className='row'>
              <div className='col-12 col-md-3'>
                <div className='mt-2 input-wrapper'>
                  <i class="fa fa-search fa-lg mx-2" />
                  <input placeholder='Search Employee' />
                </div>
              </div>
              <div className='col-12 col-md-9 d-flex justify-content-end '>
                <Link to={'/employee/add-employee'} className='btn d-flex justify-content-end --width-fitcontent --btn-blue mt-2'>
                  <h5>Add Employee</h5>
                  <i class="fa fa-user-plus fa-lg mx-2 my-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 col-md-1 border bg-light'><strong>Profile</strong></div>
              <div className='col-12 col-md-1 border bg-light'><strong>Employee Id</strong></div>
              <div className='col-12 col-md-2 border bg-light'><strong>Designation</strong></div>
              <div className='col-12 col-md-2 border bg-light'><strong>Employment Status</strong></div>
              <div className='col-12 col-md-1 border bg-light'><strong>Department</strong></div>
              <div className='col-12 col-md-1 border bg-light'><strong>Workshift</strong></div>
              <div className='col-12 col-md-1 border bg-light'><strong>Joining Date</strong></div>
              <div className='col-12 col-md-1 border bg-light'><strong>Salary</strong></div>
              <div className='col-12 col-md-1 border bg-light'><strong>Role</strong></div>
              <div className='col-12 col-md-1 border bg-light'><strong>Action</strong></div>
            </div>
            {/* fetch all Employee */}
            {empdata && empdata.map((item) => {
              return (
                <div className='row' key={item.id}>
                  <div className='col-12 col-md-1 border'>{item.profile}</div>
                  <div className='col-12 col-md-1 border'>{item.emp_id}</div>
                  <div className='col-12 col-md-2 border'>{item.designation}</div>
                  <div className='col-12 col-md-2 border'>{item.emp_status}</div>
                  <div className='col-12 col-md-1 border'>{item.department}</div>
                  <div className='col-12 col-md-1 border'>{item.work_shift}</div>
                  <div className='col-12 col-md-1 border'>{item.joining_date}</div>
                  <div className='col-12 col-md-1 border'>{item.salary}</div>
                  <div className='col-12 col-md-1 border'>{item.role}</div>
                  <div className='col-12 col-md-1 border'>{item.action}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllEmployee