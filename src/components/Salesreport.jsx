import React from "react";
import Images from "./Images";
import Datefiles from "./datefiles";
import red from "../images/red.png";
import purple from "../images/purple.png";
import yellow from "../images/yellow.png";

function SalesReport()
{
return(
  <div className="salesreport">
         <p>Sales Report September 2020</p>
         <div className="check">
               <Images class="red" name={red} />
               <Images class="purple" name={purple} />
               <Images class="yellowimg" name={yellow} />
         </div>
         <div className="date">
              <p> 17 Sep </p>
              <Datefiles class="yellow" first="num1" second="num2" firstname="$1,204.33" secondname="Revenue"/>
              <Datefiles class="green" first="num3" firstname="33" second="num4" secondname="Quotations" />
         </div>
  </div>
);
}
export default SalesReport;
