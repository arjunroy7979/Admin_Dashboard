import React from 'react'
import { Link } from 'react-router-dom';
import { PieChart, Pie } from 'recharts';
const EmployeeJobDesk = () => {
    const data = [
        { name: "G1", value: 200 },
        { name: "G2", value: 900 },
    ]
    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <div className='d-flex'>
                        <div className='conatiner-fluid '>
                            <i class="fa fa-user fa-5x mt-4"></i>
                        </div>
                        <div className='container-fluid'>
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        Mayuri Sonawane
                                    </div>
                                    <div class="col">
                                        Department
                                    </div>
                                    <div class="col">
                                        Salary
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <i class="fa fa-circle-o"></i>
                                        <span className='mx-2'>Permanent</span>
                                    </div>
                                    <div class="col">
                                        Business Development
                                    </div>
                                    <div class="col">
                                        15,000/-
                                    </div>
                                </div>
                            </div>
                            <div class="container mt-3">
                                <div class="row">
                                    <div class="col">
                                        Employee
                                    </div>
                                    <div class="col">
                                        Work Shift
                                    </div>
                                    <div class="col">
                                        Joining Date
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <span>Emp ID:1023</span>
                                        <br />
                                        <span>Business Analyst</span>
                                    </div>
                                    <div class="col">
                                        Regular Work Shift
                                    </div>
                                    <div class="col">
                                        06/03/2023
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card mt-2'>
                <div class="card-body">
                    <div className='container-fluid'>
                        <div class="row">
                            <div class="col-12 col-md-3 ">
                                <div className='conatiner-fluid '>
                                    <i class="fa fa-user fa-3x mx-3 mt-2"></i>
                                </div>
                                <div className='container'>
                                    <div class="row">
                                        <div class="col-12 col-md-12 py-2 mb-3 mt-3 border shadow-sm ">
                                            <Link to={'/attendance'}>Attendance</Link>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-md-12 py-2 mb-3 border shadow-sm">
                                            <Link to={'/documents'}>Documents</Link>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-md-12 py-2 mb-3 border shadow-sm">
                                            <Link to={'/bank-details'}>Bank Details</Link>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-md-12 py-2 mb-3 border shadow-sm">
                                            <Link to={'/address-details'}>Address Details</Link>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-md-12 py-2 mb-3 border shadow-sm">
                                            <Link to={'/emergency-contact'}>Emergency Contact</Link>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-md-12 py-2 mb-3 border shadow-sm">
                                            <Link to={'/assets'}>Assets</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-9">
                                <div class="container-fluid mt-2">
                                    <div class="row">
                                        <div class="col-12 col-md-10 mt-2 ">
                                            <strong>Attendance Dashboard</strong>
                                        </div>
                                        <div class="col-12 col-md-2 d-flex justify-content-end ">
                                            <input type='date' value={'2023-02-02'} className='form-control' />
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid mt-3">
                                    <div class="row">
                                        <div class="col-12 col-md-4 ">
                                            <div>
                                                <PieChart width={100} height={100} className='mx-5 mt-3'>
                                                    <Pie
                                                        dataKey={"value"}
                                                        isAnimationActive={false}
                                                        data={data}
                                                        labelLine={false}
                                                        cx="50%"
                                                        cy="50%"
                                                        outerRadius={50}
                                                        fill='#8884d8'
                                                    />
                                                </PieChart>
                                            </div>
                                            <div>
                                                <div className='container'>
                                                    <ul className='mt-3'>
                                                        <li className='mb-2'><input type='checkbox' /><span className='mx-2'>Regular 15 days</span></li>
                                                        <li className='mb-2'><input type='checkbox' /><span className='mx-2'>Early 8 days</span></li>
                                                        <li className='mb-2'><input type='checkbox' /><span className='mx-2'>On leave 2 days</span></li>
                                                        <li className='mb-2'><input type='checkbox' /><span className='mx-2'>Late 0 days</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-8 ">
                                            <div className='container-fluid'>
                                                <div className='row'>
                                                    <div className='col-12 col-md-6'>
                                                        <div className='box mt-3 rounded border --text-lg text-center text-primary'>{'50'}</div>
                                                        <p className='text-center --text-sm'>Total Scheduled work hour</p>
                                                    </div>
                                                    <div className='col-12 col-md-6'>
                                                        <div className='box mt-3 rounded border --text-lg text-center text-warning'>{'70'}</div>
                                                        <p className='text-center --text-sm'>Total work availibility</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-12 col-md-6'>
                                                        <div className='box mt-3 rounded border --text-lg text-center text-success'>{'80'}</div>
                                                        <p className='text-center --text-sm'>Total active hours</p>
                                                    </div>
                                                    <div className='col-12 col-md-6'>
                                                        <div className='box mt-3 text-center rounded border --text-lg text-center text-danger'>{'40'}</div>
                                                        <p className='text-center --text-sm'>Average behavior</p>
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
    )
}

export default EmployeeJobDesk