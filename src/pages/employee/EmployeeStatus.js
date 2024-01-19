import React from 'react'

const EmployeeStatus = () => {
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
                <div className='btn d-flex justify-content-end --width-fitcontent --btn-blue mt-2'>
                  <h5>Add Employement Status</h5>
                  <i class="fa fa-user-plus fa-lg mx-2 my-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div className='container-fluid'>
            <div className='row bg-light'>
              <div className='col-12 col-md-4 border'><strong>Employee Name</strong></div>
              <div className='col-12 col-md-4 border'><strong>Preview Status</strong></div>
              <div className='col-12 col-md-4 border'><strong>Edit</strong></div>
            </div>
            {/* fetch all Employee status */}
            <div className='row'>
              <div className='col-12 col-md-4 border'>Arjun Kumar</div>
              <div className='col-12 col-md-4 border'>Permanent</div>
              <div className='col-12 col-md-4 border'>
                <i class="fa fa-pencil-square-o fa-lg btn text-danger" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeStatus