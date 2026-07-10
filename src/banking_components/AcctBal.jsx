

const AcctBal = ({ balance }) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h1>Account Balance</h1>
                <p>Current Balance: ${balance}</p>
            </div>
        </div>
    </div>
  )
}

export default AcctBal