import React from 'react'

const AddEmployement = () => {
    return (
        <div>
            <div className='card'>
                <div className='card-body mb-3'>
                    <div className='container mt-5 shadow bg-light' >
                        <div className='row'>
                            <div className='col-12 col-md-12border text-center'>
                                <h4 className='my-4 text-primary'>ADD Employement</h4>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <div className="my-2">
                                    <label htmlFor="profile" className="form-label">Profile</label>
                                    <input type="text" id="profile" name="profile" className="form-control" />
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className="my-2">
                                    <label htmlFor="emp_id" className="form-label">Employee Id</label>
                                    <input type="text" id="emp_id" name="emp_id" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <div className="my-2">
                                    <label htmlFor="designation" className="form-label">Designation</label>
                                    <input type="text" id="designation" name="designation" className="form-control" />
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className="my-2">
                                    <label htmlFor="emp_status" className="form-label">Employment Status</label>
                                    <input type="text" id="emp_status" name="emp_status" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <div className="my-2">
                                    <label htmlFor="department" className="form-label">Department</label>
                                    <input type="text" id="department" name="department" className="form-control" />
                                </div>
                            </div>
                            <div className='col-12 col-md-6 '>
                                <div className="my-2">
                                    <label htmlFor="work_shift" className="form-label">Workshift</label>
                                    <input type="text" id="work_shift" name="work_shift" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <div className="my-2">
                                    <label htmlFor="joining_date" className="form-label">Joining Date</label>
                                    <input type="text" id="joining_date" name="joining_date" className="form-control" />
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className="my-2">
                                    <label htmlFor="salary" className="form-label">Salary</label>
                                    <input type="text" id="salary" name="salary" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-6 '>
                                <div className="my-2">
                                    <label htmlFor="role" className="form-label">Role</label>
                                    <input type="text" id="role" name="role" className="form-control" />
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className="my-2">
                                    <label htmlFor="action" className="form-label">Action</label>
                                    <input type="text" id="action" name="action" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-12'>
                                <div className="mt-4 mb-5">
                                    <button type="submit" className="btn btn-primary form-control">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployement