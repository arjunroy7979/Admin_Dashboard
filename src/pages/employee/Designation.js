import React from 'react'
import { Link } from 'react-router-dom'

const Designation = () => {
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <div className='container-flex'>
            <div className='row'>
              <div className='col-12 col-md-3'>
                <div className='mt-2 input-wrapper'>
                  <i class="fa fa-search fa-lg mx-2" />
                  <input placeholder='Search Designation'/>
                </div>
              </div>
              <div className='col-12 col-md-9 d-flex justify-content-end '>
                <div className='btn d-flex justify-content-end --width-fitcontent --btn-blue mt-2'>
                  <h5>Add Designation</h5>
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
            <div className='row border p-2 mb-2 bg-light'>
              <div className='col-12 col-md-3'><strong>Name</strong></div>
              <div className='col-12 col-md-3'><strong>Description</strong></div>
              <div className='col-12 col-md-3'><strong>No. of Employees</strong></div>
              <div className='col-12 col-md-3'><strong>Edit</strong></div>
            </div>
            {/* Designation All details fetch here */}
            <div className='row border p-2 mb-2'>
              <div className='col-12 col-md-3 mt-2'>1. Web Devlopment</div>
              <div className='col-12 col-md-3 mt-2'>Description</div>
              <div className='col-12 col-md-3 mt-2'>45</div>
              <div className='col-12 col-md-3'>
                <div className=''>
                  <Link to={'/edit-designation'} class="fa fa-pencil-square-o fa-2x btn text-warning" />
                  <Link to={'/delete-designation'} class="fa fa-trash-o fa-2x btn text-danger" />
                  <Link to={'/view-designation'} class="fa fa-eye fa-2x btn text-success" />
                </div>
              </div>
            </div>
            {/* ------------------- */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Designation