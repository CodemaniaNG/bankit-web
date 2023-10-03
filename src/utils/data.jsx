import AnalyticsSvg from "../svg-component/analyticsSvg";
import CardsSvg from "../svg-component/cardsSvg";
import DashboardSvg from "../svg-component/dashboardSvg";
import HelpCenter from "../svg-component/helpCenter";
import Logout from "../svg-component/logout";
import SettingsSvg from "../svg-component/settingsSvg";
import TransactionSvg from "../svg-component/transactionSvg";

export const sidebarData = {
  links: [
    {
      img: <DashboardSvg />,
      text: "Dashboard",
      link: "/dasboard",
    },
    {
      img: <TransactionSvg />,
      text: "Transaction",
      link: "/transactions",
    },
    {
      img: <AnalyticsSvg />,
      text: "Analytics",
      link: "/analytics",
    },
    {
      img: <CardsSvg />,
      text: "Cards",
      link: "/cards",
    },
    {
      img: <SettingsSvg />,
      text: "Settings",
      link: "/settings",
    },
  ],
  subLinks: [
    {
      img: <HelpCenter />,
      text: "Help Center",
    },
    {
      img: <Logout />,
      text: "Logout",
    },
  ],
};

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
