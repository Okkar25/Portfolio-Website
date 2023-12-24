import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        {/* high school */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            B.E.H.S (1) Thingangyun
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>

        {/* YTU */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Yangon Technological University
          </h3>
          <p>Bachelor of Engineering (Electronics)</p>
        </VerticalTimelineElement>

        {/* AIESEC */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#588157", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">AIESEC in YTU</h3>
          <p>Incoming Global Volunteering</p>
        </VerticalTimelineElement>

        {/* YSE */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#588157", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Youth Society for Education
          </h3>
          <p>Content Creator</p>
        </VerticalTimelineElement>

        {/* Norman */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{ background: "#34a0a4", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Norman Myanmar Co.,Ltd
          </h3>
          <p>Order Processor</p>
        </VerticalTimelineElement>

        {/* Developer */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - Present"
          iconStyle={{ background: "#0077b6", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front-End Developer
          </h3>
          <p>Open to Work</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
