import React, { useEffect, useMemo, useState } from "react";
import { filterData } from "../../utility/data.utility";
import TransactionWithRewardsTable from "./TransactionWithRewardsTable";
import RewardsSummary from "./RewardSummary";
import TransactionFilter from "./TransactionFilter";
import "./Transaction.css";

const PAGE_LIMIT = 10;

const Transaction = ({ transactionData }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState({
    customer: "",
    date: "",
  });

  const DATA = useMemo(() => filterData(transactionData, filter), [
    filter,
    transactionData,
  ]);

  const filterHandler = (name, value) => {
    setFilter({ ...filter, [name]: value });
  };

  useEffect(() => {
    setData(DATA.slice(0, PAGE_LIMIT));
    setPage(1);
  }, [DATA]);

  const loadMoreData = () => {
    setData((data) =>
      data.concat(DATA.slice(page * PAGE_LIMIT, PAGE_LIMIT * (page + 1)))
    );
    setPage(page + 1);
  };

  return (
    <div className="container">
      <TransactionFilter filter={filter} filterHandler={filterHandler} />
      <RewardsSummary data={DATA} />
      <TransactionWithRewardsTable
        data={data}
        loadMoreData={loadMoreData}
        totalCount={DATA.length}
      />
    </div>
  );
};

export default Transaction;
