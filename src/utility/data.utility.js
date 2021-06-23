import { MONTHS_NAME } from "../constants/constant";

export const CUSTOMERS = [
  { id: 1, name: "customer1" },
  { id: 2, name: "customer2" },
  { id: 3, name: "customer3" },
  { id: 4, name: "customer4" },
  { id: 5, name: "customer5" },
];

export const generateRandomNumebr = (max, min = 0) =>
  Math.floor(Math.random() * (max - min)) + min;

export const constructTransactionalData = (days, records = 1000) => {
  const data = [];
  for (let i = 0; i < records; i++) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - generateRandomNumebr(days));
    const customer = CUSTOMERS[generateRandomNumebr(4)];
    data.push({
      id: i + 1,
      customer_id: customer.id,
      name: customer.name,
      transaction_amount: generateRandomNumebr(500, 10),
      date: currentDate.toISOString(),
    });
  }
  return data;
};

export const calculateRewards = (amount) => {
  if (amount <= 50) return 0;
  if (amount > 100) return 50 + 2 * (amount - 100);
  return amount - 50;
};

export const getMonthOptions = (no_of_months = 3) => {
  const currentDate = new Date();
  const months = [];
  for (let i = 0; i < no_of_months; i++) {
    months.push(
      `${MONTHS_NAME[currentDate.getMonth()]} ${currentDate.getFullYear()}`
    );
    currentDate.setMonth(currentDate.getMonth() - 1);
  }
  return months;
};

export const filterData = (data, filter) => {
  const { customer, date } = filter;
  const modifiedData = data.filter((d) => {
    let result = true;
    if (customer) {
      result = d.customer_id == customer;
    }
    if (date) {
      const transactionDate = new Date(d.date);
      const [m, y] = date.split(" ");
      result =
        result &&
        transactionDate.getMonth() == MONTHS_NAME.indexOf(m) &&
        transactionDate.getFullYear() == y;
    }
    return result;
  });
  return modifiedData;
};

export const getRewardsSummary = (data) => {
  let totalRewards = 0;
  let totalTransactionAmount = 0;
  data.forEach((d) => {
    totalRewards += calculateRewards(d.transaction_amount);
    totalTransactionAmount += d.transaction_amount;
  });
  return {
    totalRewards,
    totalTransactionAmount,
  };
};
