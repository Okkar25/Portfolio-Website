import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
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
          <p className="expTitle">High School Diploma</p>
          <p className="expLabel"> &#128313; 5 Distinctions </p>
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
          <p className="expTitle">Bachelor of Engineering </p>
          <p className="expLabel">
            &#128313; Electronics and Communication Engineering
          </p>
        </VerticalTimelineElement>

        {/* AIESEC */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#588157", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">AIESEC in YTU</h3>
          <p className="expTitle">Incoming Global Volunteering</p>
          <p className="expLabel">
            &#128313; Hosting global volunteers and providing assistance in
            their environmental projects.
          </p>
          <p className="expLabel">
            &#128313; Networking and External Public Relations.
          </p>
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
          <p className="expTitle">Content Creator</p>
          <p className="expLabel">
            &#128313; Manage Facebook page as an admin and publish monthly
            articles to gain followers.
          </p>
          <p className="expLabel">
            &#128313; Create contents for Events and Awarding Ceremonies.
          </p>
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
          <p className="expTitle">Order Processor</p>
          <p className="expLabel">
            &#128313; Processing overseas orders according to departmental
            guidelines and policies, analyzing them while ensuring the accuracy
            of each order assigned.
          </p>
          <p className="expLabel">
            &#128313; Contributing to the growth of the team’s capabilities
            which include assisting to build more scalable processes, tracking
            and reporting on order status, making calculations to meet
            customers’ demands.
          </p>
          <p className="expLabel">
            &#128313; Providing AutoCAD drawings to customer's requirements.
          </p>
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
          <p className="expTitle">"Open to Work"</p>
          <p className="expLabel">
            &#128313; Skilled in HTML, CSS, Bootstrap, TailwindCSS and
            appropriate understanding of JavaScript / TypeScript and
            User-friendly interface designs. Committed to producing high-quality
            work, continuously improving skills and welcoming feedback
          </p>
          <p className="expLabel">
            &#128313; Committed to producing high-quality work in time to meet
            deadlines, continuously improving skills and welcoming feedbacks.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--star"
          iconStyle={{ background: "#7ae582", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
