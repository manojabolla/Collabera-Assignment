import React from "react";
import { getRewardsSummary } from "../../utility/data.utility";
import "./RewardSummary.css";

const RewardsSummary = ({ data }) => {
  const { totalTransactionAmount, totalRewards } = getRewardsSummary(data);
  return (
    <div className="rewardSummaryContainer">
      <h4 className="summaryLabel">Summary</h4>
      <div>
        Total transaction amount : <b>{totalTransactionAmount}</b>
      </div>
      <div>
        Total Rewards : <b>{totalRewards}</b>
      </div>
    </div>
  );
};

export default RewardsSummary;
