import { useState } from "react";

const FCounter = ({ initialCounter }) => {
   const [count, setCount] = useState(initialCounter);

   const increase = () => {
      setCount(count + 1);
   };

   const decrease = () => {
      setCount(count - 1);
   };

   return (
      <div>
         <div>{count}</div>
         <button onClick={increase}>Incrementar</button>
         <button onClick={decrease}>Decrementar</button>
      </div>
   );
};

export default FCounter;
