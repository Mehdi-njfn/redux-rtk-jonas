import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector(s=> s.account.balance)

  return <div className="balance">{formatCurrency(balance || 0)}</div>;
}

export default BalanceDisplay;
