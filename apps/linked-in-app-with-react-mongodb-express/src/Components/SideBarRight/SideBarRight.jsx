import { InfoOutlined } from "@material-ui/icons";
import React from "react";
import { Contact } from "../../Components";

import "./SideBarRight.css";
const SideBarRight = () => {
  return (
    <div className="sidebarRight">
      <div className="sidebarRight__top">
        <p>Add to your feed</p>
        <InfoOutlined />
      </div>

      <div className="sidebarRight__middle">
        <Contact
          src={
            "https://media-exp1.licdn.com/dms/image/C4D0BAQHBI9WxHPHbgA/company-logo_100_100/0?e=1608768000&v=beta&t=D471-36-goz44lg9nNHQMPXpl30ghefDvmGWUhHud7c"
          }
          title={"Company • Government Administration"}
          name={"Statistics South Africa"}
        />
        <Contact
          title={"CMO at Standard Bank Group"}
          name={"Thulani Sibeko CM (SA)"}
          src={
            "https://media-exp1.licdn.com/dms/image/C4E03AQGGNZ6dPkghvw/profile-displayphoto-shrink_100_100/0?e=1605744000&v=beta&t=BE6xYPt447E4Cw-RhziUVJLMZ41KFgv_wFd-0--eJKQ"
          }
        />
        <Contact
          name={"Careers24"}
          title={"Company • Staffing and Recruiting"}
          src={
            "https://media-exp1.licdn.com/dms/image/C4D0BAQFfR0Vqxt_UAw/company-logo_100_100/0?e=1608768000&v=beta&t=qykWv23y3nRzlRPfjO5JkYWZXli8OzLt7dC1kKEk640"
          }
        />
      </div>
      <div className="sidebarRight__bottom">
        <p>View all recommendations</p>
      </div>
    </div>
  );
};

export default SideBarRight;
