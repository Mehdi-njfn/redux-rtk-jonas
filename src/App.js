import CreateCustomer from "./featurs/customers/CreateCustomer";
import Customer from "./featurs/customers/Customer";
import AccountOperations from "./featurs/accounts/AccountOperations";
import BalanceDisplay from "./featurs/accounts/BalanceDisplay";
import { useSelector } from "react-redux";
import ReactFullpage from "@fullpage/react-fullpage";

function App() {
  const fullName = useSelector((store) => store.customer.fullName);
  return (
    <>
      <div>
        <h1>🏦 The React-Redux Bank ⚛️</h1>
        {fullName === "" ? (
          <CreateCustomer />
        ) : (
          <>
            <Customer />
            <AccountOperations />
            <BalanceDisplay />
          </>
        )}
      </div>
    </>
  );
}

export default App;
// {/* <ReactFullpage
//         scrollingSpeed={1000}
//         render={({ state, fullpageApi }) => {
//           return (
//             <ReactFullpage.Wrapper>
//               <div style={{background:'orange'}} className="section">
//                 <p>Section 1 (welcome to fullpage.js)</p>
//                 <button onClick={() => fullpageApi.moveSectionDown()}>
//                   Click me to move down
//                 </button>
//               </div>
//               <div style={{background:'green'}} className="section">
//                 <p>Section 2</p>
//               </div>
//             </ReactFullpage.Wrapper>
//           );
//          }}/> */}
