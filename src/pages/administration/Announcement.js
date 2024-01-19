import React from 'react'

const Announcement = () => {
    return (
        <div>
            <div className='card'>
                <div className='card-body'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 col-md-2'>
                                <select className="form-select mt-2">
                                    <option selected>Created</option>
                                    <option>Admin</option>
                                    <option>HR</option>
                                </select>
                            </div>
                            <div className='col-12 col-md-2'>
                                <select className="form-select mt-2">
                                    <option selected>Department</option>
                                    <option>Java</option>
                                    <option>Mern</option>
                                    <option>Python</option>
                                </select>
                            </div>
                            <div className='col-12 col-md-8 d-flex justify-content-end'>
                                <div className='btn d-flex justify-content-end --width-fitcontent --btn-blue mt-2'>
                                    <h5>Add Announcement</h5>
                                    <i class="fa fa-plus-circle fa-lg mx-2 my-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 col-md-1 border bg-light'><strong>Title</strong></div>
                            <div className='col-12 col-md-2 border bg-light'><strong>Department</strong></div>
                            <div className='col-12 col-md-2 border bg-light'><strong>Start Date</strong></div>
                            <div className='col-12 col-md-2 border bg-light'><strong>End Date</strong></div>
                            <div className='col-12 col-md-2 border bg-light'><strong>Description</strong></div>
                            <div className='col-12 col-md-2 border bg-light'><strong>CreatedBy</strong></div>
                            <div className='col-12 col-md-1 border bg-light'><strong>Actions</strong></div>
                        </div>
                        {/* fetch all Employee */}
                        <div className='row'>
                            <div className='col-12 col-md-1 border'>title</div>
                            <div className='col-12 col-md-2 border'>Mern stack</div>
                            <div className='col-12 col-md-2 border'>01/01/2024</div>
                            <div className='col-12 col-md-2 border'>01/01/2024</div>
                            <div className='col-12 col-md-2 border'>description</div>
                            <div className='col-12 col-md-2 border'>HR</div>
                            <div className='col-12 col-md-1 border'>Active</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Announcement