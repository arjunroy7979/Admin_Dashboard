import React from 'react'
import { AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
const EmployeeDashboard = () => {
    const productSales = [
        {
            name: 'jan',
            working: 40,
            break: 24,
        },
        {
            name: 'feb',
            working: 50,
            break: 2,
        },
        {
            name: 'Mar',
            working: 80,
            break: 5,
        }
    ]
    return (
        <div>
            <div className='card'>
                <div className='card-body'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 col-md-12 d-flex justify-content-end'>
                                <button className='btn btn-light border'>Punch in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-body mb-2'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 col-md-8'>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-12 col-md-12 border rounded p-2'>
                                            <div className='container-fluid'>
                                                <div className='row'>
                                                    <div className='col-12 col-md-12'>Hi, <strong className='text-warning'>{'Mayuri'}</strong> ! <br /> Good Morning</div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-12 col-md-12 mt-4'>
                                                        <div className='row'>
                                                            <div className='col-12 col-md-6'>
                                                                {'9:30 am'} <br /> Punch in time
                                                            </div>
                                                            <div className='col-12 col-md-6 d-flex justify-content-end'>
                                                                {'6:30 pm'} <br /> Punch out time
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12 col-md-12 border rounded p-2 mt-2'>
                                            {/* map the all valuef */}
                                            <div className='container-fluid'>
                                                <div className='row'>
                                                    <div className='col-12 col-md-3 border bg-light'>30</div>
                                                    <div className='col-12 col-md-3 border bg-light'>
                                                        Paid
                                                    </div>
                                                    <div className='col-12 col-md-3 border bg-light'>1</div>
                                                    <div className='col-12 col-md-3 border bg-light'>
                                                        Paid
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-12 col-md-3 border bg-light'>Total Leave Allowance</div>
                                                    <div className='col-12 col-md-3 border bg-light'>
                                                        Unpaid
                                                    </div>
                                                    <div className='col-12 col-md-3 border bg-light'>Total Leave Taken</div>
                                                    <div className='col-12 col-md-3 border bg-light'>
                                                        Unpaid
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-4 border rounded'>
                                <div className='container-fluid py-2'>
                                    <div className='row'>
                                        <div className='col-12 col-md-12 mt-3'>Time Log</div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12 col-md-12 mt-3'>Today</div>
                                    </div>
                                </div>
                                <div className='container-fluid'>
                                    <div className='row mt-3'>
                                        <div className='col-12 col-md-4'>08:00</div>
                                        <div className='col-12 col-md-4'>07:00</div>
                                        <div className='col-12 col-md-4'>01:00</div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12 col-md-4'>Scheduled</div>
                                        <div className='col-12 col-md-4'>Worked</div>
                                        <div className='col-12 col-md-4'>Break</div>
                                    </div>
                                </div>
                                <div className='container-fluid'>
                                    <div className='row mt-3'>
                                        <div className='col-12 col-12'>This Month</div>
                                        <div className='col-12 col-12'>160 h</div>
                                        <div className='col-12 col-12'>Total work scheduled time</div>
                                    </div>
                                </div>
                                <div className='container-fluid mt-5 py-2'>
                                    <AreaChart width={300} height={220} data={productSales}>
                                        <YAxis />
                                        <XAxis dataKey="name" />
                                        <CartesianGrid strokeDasharray="5 5" />
                                        <Tooltip />
                                        <Legend />
                                        <Area
                                            type="monotone"
                                            dataKey="working"
                                            stroke='#2563eb'
                                            fill='#3b82f6'
                                            stackId="1"
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="break"
                                            stroke='#7c3aed'
                                            fill='#8b5cf6'
                                            stackId="1"
                                        />
                                    </AreaChart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDashboard