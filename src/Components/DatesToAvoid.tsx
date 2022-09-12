import React, { useState } from "react";

export interface Props {
  datesToDisplay: Date[];
}

function DatesToAvoid(props: Props) {
  return (
    <div className="dates-to-avoid">
      <div className="h4">Dates to avoid</div>
      {props.datesToDisplay.map((datesToAvoid) => {
        return (
          <div className="date-to-avoid">{datesToAvoid.toDateString()}</div>
        );
      })}
    </div>
  );
}

export default DatesToAvoid;
