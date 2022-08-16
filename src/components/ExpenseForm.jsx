import React from 'react'
import { MdSend } from 'react-icons/md'
//{}[]
const ExpenseForm = ({ charge, amount, handleCharge, handleAmount, handleSubmit, edit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input type="text" className='form-control' id='charge' name='charge'
            placeholder='e.g. rent'
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amout">amout</label>
          <input type="number" className='form-control' id='amout' name='amout'
            placeholder='e.g. 100'
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button className='btn' type='submit'>
        {edit ? 'edit' : 'submit'}
        <MdSend className='btn-icon' />
      </button>
    </form>
  )
}

export default ExpenseForm