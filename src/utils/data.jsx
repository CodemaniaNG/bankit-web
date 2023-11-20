import AccountSvg from "../svg-component/account";
import FaqSvg from "../svg-component/faq";
import Info from "../svg-component/info";
import Kobo from "../svg-component/kobo";
import PasswordSvg from "../svg-component/password";
import Reset from "../svg-component/reset";
import StatementSvg from "../svg-component/statement";
import Verification from "../svg-component/verification";

export const statuses = ["All status", "Successful", "Processing", "Failed", "Refunded", "Cancelled"];
export const categories = ["Inflow", "Outflow"];

export const recentTransactions = [
  {
    description: "Money sent to Dammy Lolo",
    amount: "-14,909.90",
    balance: "N189,500.00",
    date: "19/09/2023 11:20AM",
    status: "Successful",
  },
  {
    description: "Money sent to Dammy Lolo",
    amount: "-14,909.90",
    balance: "N189,500.00",
    date: "19/09/2023 11:20AM",
    status: "Processing",
  },
  {
    description: "Money sent to Dammy Lolo",
    amount: "-14,909.90",
    balance: "N189,500.00",
    date: "19/09/2023 11:20AM",
    status: "Refunded",
  },
  {
    description: "Money sent to Sean Brielo",
    amount: "-14,909.90",
    balance: "N189,500.00",
    date: "19/09/2023 11:20AM",
    status: "Failed",
  },
];

export const banks = ["Access bank", "AB Microfinance bank", "GTBank Plc", "Kuda Microfinance bank", "Moniepoint Microfinance bank", "PalmPay"];

export const amount = [500, 1000, 3000, 5000, 10000, 50000];

export const transactionHistories = [
  {
    name: "Yakub Oji",
    time: "5:23 PM",
    amount: "200,000",
    status: "inflow",
  },
  {
    name: "Yakub Oji",
    time: "5:23 PM",
    amount: "200,000",
    status: "outflow",
  },
  {
    name: "Yakub Oji",
    time: "5:23 PM",
    amount: "200,000",
    status: "outflow",
  },
  {
    name: "Yakub Oji",
    time: "5:23 PM",
    amount: "200,000",
    status: "outflow",
  },
  {
    name: "Yakub Oji",
    time: "5:23 PM",
    amount: "200,000",
    status: "inflow",
  },
];

export const report = [
  {
    title: "Recipient Bank",
    value: "Opay",
  },
  {
    title: "Status",
    value: "Success",
  },
  {
    title: "Fee",
    value: "1000",
  },
  {
    title: "Time",
    value: "5:23 PM",
  },
  {
    title: "Date",
    value: "24 Jul, 2023",
  },
  {
    title: "Transaction ID",
    value: "xksjw-wnq-9292-ejdj",
  },
];

export const settingsData = [
  {
    title: "Account",
    body: [
      {
        title: "Account information",
        icon: <AccountSvg />,
      },
      {
        title: "Verification",
        icon: <Verification />,
      },
      {
        title: "Statement and reports",
        icon: <StatementSvg />,
      },
      {
        title: "Display kobo",
        icon: <Kobo />,
      },
    ],
  },
  {
    title: "Security",
    body: [
      {
        title: "Password",
        icon: <PasswordSvg />,
      },
      {
        title: "Reset PIN",
        icon: <Reset />,
      },
    ],
  },
  {
    title: "Help",
    body: [
      {
        title: "Help & FAQs",
        icon: <FaqSvg />,
      },
      {
        title: "Learning Hub",
        icon: <Info />,
      },
    ],
  },
];

export const list = [
  {
    value: "N2m",
    height: "106px",
  },
  {
    value: "N500K",
    height: "82px",
  },
  {
    value: "N100K",
    height: "72px",
  },
  {
    value: "N50K",
    height: "32px",
  },
  {
    value: "N21K",
    height: "24px",
  },
];

export const airtimeList = ["MTN", "Airtel", "Glo", "9-mobile"];
