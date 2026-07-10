import { useState } from "react"

import AcctBal from "./banking_components/AcctBal"
import Form from "./banking_components/Form"

export const Banking = () => {
    const [balance, setBalance] = useState(0);
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                {
                    balance > 1000 ? <p className="text-success">Congratulations! You have a high balance.</p> : <p className="text-warning">Your balance is below the recommended threshold.</p>
                }
                <AcctBal balance={balance} />
                <Form balance={balance} setBalance={setBalance} />
            </div>
        </div>
    </div>
  )
}

export default Banking