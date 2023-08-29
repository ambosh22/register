import React from 'react';

function UpdateUser () {
    return(
        <div className="d-flex  vh-100 bg-primary justify-content-center align-item-center">
        <div className='w-50 bg-white rounded p-3'>
<form>
    <h2>Update USER</h2>
    <div className='mb-2'>
        <label htmlFor="">Name</label>
        <input type="Name" placeholder='Enter Name' className='form-control'/>
    </div>
    <div className='mb-2'>
        <label htmlFor="">Email</label>
        <input  type="Email" placeholder='Enter Email' className='form-control'/>
    </div>
    <div className='mb-2'>
        <label htmlFor="">Age</label>
        <input  type="Age" placeholder='Enter Age' className='form-control'/>
    </div>
    <button className='btn btn-success'>Update</button>
</form>
</div>
</div>
    )
}
export default UpdateUser;