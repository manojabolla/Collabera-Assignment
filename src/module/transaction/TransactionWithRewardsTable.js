import React from "react";
import { calculateRewards } from "../../utility/data.utility";
import "./TransactionWithRewardsTable.css";

const TransactionWithRewardsTable = ({ data, totalCount, loadMoreData }) => {
  return data.length === 0 ? (
    "No result found."
  ) : (
    <div className="transactionTableContainer">
      <h4 className="tableLable">Table</h4>
      <table className="transactionTable">
        <thead>
          <tr>
            <th className="tableCell">S.N.</th>
            <th className="tableCell">Customer Name</th>
            <th className="tableCell">Date</th>
            <th className="tableCell">Trasaction Amount</th>
            <th className="tableCell">Rewards</th>
          </tr>
        </thead>
        <tbody>
          {data.map((transactionData, idx) => {
            const transactionDate = new Date(transactionData.date);
            return (
              <tr key={transactionData.id}>
                <td className="tableCell">{idx + 1}</td>
                <td className="tableCell">{transactionData.name}</td>
                <td className="tableCell">{`${transactionDate.getDate()}/${
                  transactionDate.getMonth() + 1
                }/${transactionDate.getFullYear()}`}</td>
                <td className="tableCell">
                  {transactionData.transaction_amount}
                </td>
                <td className="tableCell">
                  {calculateRewards(transactionData.transaction_amount)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        {totalCount > data.length && (
          <button onClick={loadMoreData} className="loadMorebtn">
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default TransactionWithRewardsTable;
