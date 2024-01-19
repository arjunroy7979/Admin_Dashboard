import React from 'react'

const Assets = () => {
    return (
        <div>
            <div className='card'>
                <div className='card-body'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 col-md-2'>
                                <select className="form-select mt-2">
                                    <option selected>Asset Types</option>
                                    <option>one</option>
                                    <option>two</option>
                                </select>
                            </div>
                            <div className='col-12 col-md-10'>
                                <div className='container-fluid'>
                                    <div className='row d-flex justify-content-end'>
                                        <div className='col-12 col-md-6 '></div>
                                        <div className='col-12 col-md-6 '>
                                            <div className='container-fluid'>
                                                <div className='row'>
                                                    <div className='col-12 col-md-4 d-flex justify-content-end'>
                                                        <div className='btn --btn-blue'>
                                                            <strong>Export all</strong>
                                                            <i class="fa fa-caret-up mx-1" />
                                                        </div>
                                                    </div>
                                                    <div className='col-12 col-md-4 d-flex justify-content-end'>
                                                        <div className='btn --btn-blue'>
                                                            <strong>Asset Types</strong>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 col-md-4 d-flex justify-content-end'>
                                                        <div className='btn d-flex --width-fitcontent --btn-blue'>
                                                            <strong>Add Asset</strong>
                                                            <i class="fa fa-plus-circle fa-lg mx-1 my-1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                            <div className='col-12 col-md-2 border bg-light'><strong>Asset Name</strong></div>
                            <div className='col-12 col-md-2 border bg-light'><strong>Type</strong></div>
                            <div className='col-12 col-md-1 border bg-light'><strong>Asset code</strong></div>
                            <div className='col-12 col-md-1 border bg-light'><strong>Is working</strong></div>
                            <div className='col-12 col-md-2 border bg-light'><strong>Employee</strong></div>
                            <div className='col-12 col-md-1 border bg-light'><strong>Date</strong></div>
                            <div className='col-12 col-md-2 border bg-light'><strong>Note</strong></div>
                            <div className='col-12 col-md-1 border bg-light'><strong>Edit</strong></div>
                        </div>
                        {/* fetch all Assest */}
                        <div className='row'>
                            <div className='col-12 col-md-2 border'>assest name</div>
                            <div className='col-12 col-md-2 border'>types</div>
                            <div className='col-12 col-md-1 border'>As2530</div>
                            <div className='col-12 col-md-1 border'>working</div>
                            <div className='col-12 col-md-2 border'>Arjun</div>
                            <div className='col-12 col-md-1 border'>17/01/2024</div>
                            <div className='col-12 col-md-2 border'>notes</div>
                            <div className='col-12 col-md-1 border'>
                                <i class="fa fa-pencil-square-o fa-lg btn text-danger" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assets