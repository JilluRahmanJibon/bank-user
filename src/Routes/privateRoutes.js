import AllDepositReplay from "../Components/AllDepositReplay";
import AllTransition from "../Pages/AllTransition";
import Deposit from "../Pages/Deposit";
import Home from "../Pages/Home";
import NewRequest from "../Pages/NewRequest";
import OrderHistory from "../Pages/OrderHistory";
import Payment from "../Pages/Payment";
import PendingOrder from "../Pages/PendingOrder";
const privateRoutes = [
  { path: "/", Component: Home },
  { path: "/new-request", Component: NewRequest },
  { path: "/order-history", Component: OrderHistory },
  { path: "/pending-order", Component: PendingOrder },
  { path: "/payment", Component: Payment },
  { path: "/deposit", Component: Deposit },
  { path: "/all-transition", Component: AllTransition },
  { path: "/deposit/all-deposit-replay", Component: AllDepositReplay },
];
export default privateRoutes;
