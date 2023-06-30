// import React from 'react';

import ClientData from "../ClientData/ClientData";
import CounterCard from "../CounterCard/CounterCard";

const ClientHome = () => {
  return (
    <div>
      <div>
        <CounterCard></CounterCard>
      </div>

      <div className="mt-12">
        <ClientData></ClientData>
      </div>
    </div>
  );
};

export default ClientHome;

//     box-shadow: 5px 5px 10px #a732de;
