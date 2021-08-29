import React from 'react';
import './Bill.css';

const Bill = () => {
    return (
        <form className='bill-form'>
            <div className="form-control form-bill">
                <label>Bill</label>
                <input type="number"/>
            </div>
            <div className="form-control">
                <label>Select Tip %</label>
                <input type="number" min='1' max='10000' />
            </div>
            <div className="form-control">
                <label>People</label>
                <input type="number" min='1' max='10000' />
            </div>
        </form>
    )
}

export default Bill;