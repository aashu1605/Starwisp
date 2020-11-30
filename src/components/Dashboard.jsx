import React from "react";
import windows from "../images/windows.png";
import school from "../images/school.png";
import cog from "../images/cog.png";
import search from "../images/search.png";
import Notepad from "./Notepadd";
import smallgraph from "../images/smallgraph.png";
import Images from "./Images";
import Search from "./Search";
import SalesReport from "./Salesreport";
import Monthfiles from "./monthfiles";
import pcurve from "../images/pcurve.png";
import gcurve from "../images/gcurve.png";
import rectangle from "../images/rectangle.png";
import greenrect from "../images/greenrect.png";
import pinkrect from "../images/pinkrect.png";
import yellowrect from "../images/yellowrect.png";
import Cards from "./Cards";
import Inbox from "./Inbox";
import {withRouter,Link} from 'react-router-dom';

function Dashboard()
{
  return(
    <div >

    <div className="first">
        <Link to='/'>
    <div className="rectangle">
    <Images name={windows} text="Dashboard"/>
    </div>

        </Link>
        <Link to='/addposts'>
          <Images class="school" name={school} cl="University" text="Lorem" />
          </Link>
    <Images class="cog" name={cog} cl="System" text="Ipsum"/>
    </div>

    <Search name={search}/>
    <SalesReport />

<Monthfiles class="month1" text="This Month" text1="+7.8%" name={pcurve}/>
<Monthfiles class="month2" text="Last Month" text1="+67.4%" name={gcurve}/>

<div className="infobar">
<div className="notif">Notifications</div>
<div className="events">Events</div>
<Cards name={rectangle} text="Admin" desc="Your faculty uploaded the syllabus" time="3 minutes ago" />
<Cards name={greenrect} text="Student" desc="Your faculty uploaded the syllabus" time="3 minutes ago" />
<Cards name={pinkrect} text="Teacher" desc="Your faculty uploaded the syllabus" time="3 minutes ago" />
<Cards name={yellowrect} text="Admin" desc="Your faculty uploaded the syllabus" time="3 minutes ago" />
<Cards name={yellowrect} text="Admin" desc="Your faculty uploaded the syllabus" time="3 minutes ago" />
<Cards name={yellowrect} text="Admin" desc="Your faculty uploaded the syllabus" time="3 minutes ago" />
</div>
    <div className="notepad">
    <h3>Notepad </h3>
 <Notepad />
    </div>

    <div className="smallgraph">
    <img src={smallgraph} alt="" />
    </div>

    <Inbox />
    </div>
  );
}
export default withRouter(Dashboard);
