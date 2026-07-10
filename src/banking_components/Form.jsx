import  { useState } from 'react'

const Form = ({ balance, setBalance }) => {
    function handleWithdraw() {
        if (amount == '') {
            alert('Please enter an amount to withdraw');
            return false;
        }if (amount > balance) {
            alert('Insufficient balance');
            return false;
        }
        var amount_to_withdraw = Number(amount);
        var new_balance = balance - amount_to_withdraw;
        setBalance(new_balance);
    }

    function handleDeposit() {
        if (amount == '') {
            alert('Please enter an amount to deposit');
            return false;
        }
        var amount_to_deposit = Number(amount);
        var new_balance = balance + amount_to_deposit;
        setBalance(new_balance);
    }
    //a state to type an amount in the input field:useState hook
    const [amount, setAmount] = useState(0);
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
                <div className="mb-2">
                    <input type="number" className="form-control" placeholder="Enter amount" onChange={(e) => setAmount(e.target.value)} value={amount} />
                </div>
                <div className="mb-2">
                    <button className="btn btn-danger col-6" onClick={handleWithdraw}>Withdraw</button>
                    <button className="btn btn-primary col-6" onClick={handleDeposit}>Deposit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form