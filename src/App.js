import React, { useEffect, useState } from "react";
import Transaction from "./module/transaction/Transaction";
import { constructTransactionalData } from "./utility/data.utility";
import { NUM_DAYS_OF_DATA_GENERATION } from "./constants/constant";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(constructTransactionalData(NUM_DAYS_OF_DATA_GENERATION));
  }, []);
  return (
    <div className="App">
      <Transaction transactionData={data} />
    </div>
  );
}

export default App;
