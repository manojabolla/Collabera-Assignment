import React from "react";
import { CUSTOMERS, getMonthOptions } from "../../utility/data.utility";
import "./TransactionFilter.css";

const TransactionFilter = ({ filter, filterHandler }) => {
  return (
    <div className="filterContainer">
      <form>
        <span className="filterLabel">Filter: </span>
        <select
          name="customer"
          id="customer-dropdown"
          value={filter.customer}
          className="customer-dropdown"
          onChange={(e) => {
            filterHandler("customer", e.target.value);
          }}
        >
          <option value="">--Select Customer--</option>
          {CUSTOMERS.map((c) => {
            return (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            );
          })}
        </select>
        <select
          name="date"
          id="date-dropdown"
          className="date-dropdown"
          value={filter.date}
          onChange={(e) => {
            filterHandler("date", e.target.value);
          }}
        >
          <option value="">--Select Month--</option>
          {getMonthOptions().map((m) => {
            return (
              <option key={m} value={m}>
                {m}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
};

export default TransactionFilter;
