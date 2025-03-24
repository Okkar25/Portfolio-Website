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
          <p className="expLabel">
            {" "}
            &#128313; Gained 5 Distinctions in the High School Graduation Exam
            with 3.7/4.0
          </p>
        </VerticalTimelineElement>

        {/* YTU */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Dec 2017 - March 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Yangon Technological University
          </h3>
          <p className="expTitle">Bachelor of Engineering </p>

          <p className="expLabel">
            &#128313; Studied Algorithmic Problem Solving in C++ and Java along
            with Mathematics – Calculus, Analytic Geometry, Discrete
            Mathematics, Linear Algebra, Probability and Statistics and
            Trigonometry.
          </p>

          <p className="expLabel">
            &#128313; Additional courses include Relational Databases,
            Spreadsheet Programming, Frontend and Backend Web Development, API
            Development and LINUX Operating System.
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
          iconStyle={{ background: "#05668d", color: "#fff" }}
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
          date="2023 - 2024"
          iconStyle={{ background: "#0077b6", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front-End Developer
          </h3>

          <p className="expTitle">Freelance</p>
          <p className="expLabel">
            &#128313; Skilled in HTML, CSS, Bootstrap, SCSS, TailwindCSS, MUI
            and appropriate understanding of JavaScript / TypeScript along with
            frameworks, ReactJS and NextJS.
          </p>
          <p className="expLabel">
            &#128313; Proficient in creating user-friendly interface designs &
            responsive web pages. Familiar with version control (Git), command
            line (CLI), package managers (NPM & YARN) and basic UI/UX concepts.
          </p>

          <p className="expLabel">
            &#128313; Committed to producing high-quality work in time to meet
            deadlines, continuously improving skills and welcoming feedbacks.
          </p>
        </VerticalTimelineElement>

        {/* Jr Frontend Developer - ShopDoora */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Feb 2024 - April 2024"
          iconStyle={{ background: "#7678ed", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ShopDoora ( Myanmar High Society )
          </h3>
          <p className="expTitle">Junior Front-End Developer</p>
          <p className="expLabel">
            &#128313; Develop and maintain user interfaces for web applications
            using ReactJS and NextJS. Write reusable, modular and efficient
            React components.
          </p>
          <p className="expLabel">
            &#128313; Collaborate with designers, backend developers and quality
            assurance teams to implement UI/UX designs and features. Integrate
            frontend components with backend services and APIs.
          </p>

          <p className="expLabel">
            &#128313; Implement state management solutions using libraries like
            Redux and Context API. Ensure the responsiveness of performance of
            applications across various devices and browsers.
          </p>

          <p className="expLabel">
            &#128313; Work closely with project managers and stakeholders to
            understand project requirements and timelines. Assist in the design
            and implementation of application architecture and technical
            solutions.
          </p>

          <p className="expTitle projects">Projects involved</p>
          <p className="expLabel sub-project">
            &#128313; Connect App ( Buyer and Seller App )
          </p>
          <p className="expLabel sub-project">
            &#128313; The Market / Flawless Thadar ( Ecommerce Apps )
          </p>
        </VerticalTimelineElement>

        {/* Python Language Tutor - Freelance */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sep 2024 - Feb 2025"
          iconStyle={{ background: "#4361ee", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Python Language Tutor
          </h3>
          <p className="expTitle">Freelance</p>
          <p className="expLabel">
            &#128313; Currently tutoring a Master student majoring in medical
            informatics at a university in Chicago, Illinois.
          </p>
          <p className="expLabel">
            &#128313; Develop and structure Python programming courses based on
            learners’ levels ( beginner, intermediate, advanced ).
          </p>

          <p className="expLabel">
            &#128313; Create lesson plans, programming exercises and visualize
            how the code runs behind the scenes with the help of visual
            debuggers (pythontutor).
          </p>

          <p className="expLabel">
            &#128313; Demonstrate key Python concepts, such as data structures,
            OOP, modules, and libraries. Adjust curriculum and learning curve
            based on the student’s major.
          </p>

          <p className="expLabel">
            &#128313; Guide learners in using Python tools and libraries like
            Flask, Django, Numpy, Pandas, Matplotlib, Seaborn, Excel, SQL, Power
            BI and Tableau.
          </p>

          <p className="expLabel">
            &#128313; Create quizzes, assignments, and projects to evaluate
            students' progress.
          </p>

          <p className="expLabel">
            &#128313; Assist students in troubleshooting coding issues and
            debugging Python scripts. Maintain records of learners' performance
            and progress.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jan 2025 - March 2025"
          iconStyle={{ background: "#22577a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Cashier / Barista / Kitchen Helper / Server
          </h3>
          <p className="expTitle">GY.Rose – Midtown Manhattan </p>
          <p className="expLabel">
            &#128313; Make various coffees – Cappuccino, Espresso, Americano and
            Greek Iced coffees.
          </p>
          <p className="expLabel">
            &#128313; Take orders from customers and processing them on the POS
            system. Making sure the number of orders match the customers' online
            orders and drinks.
          </p>

          <p className="expLabel">
            &#128313; Heat Pita bread, cutting the meat from rotating griller
            and grill them on the stove with the right amount of ingredients.
            Fry Greek fried potatoes and some other delicious Greek foods.
          </p>

          <p className="expLabel">
            &#128313; Make a record of cash in and cash out on a daily basis
            before and after the restaurant close. Make sure there are enough
            change in the drawer for customers.
          </p>

          <p className="expLabel">
            &#128313; Deliver the food to customers and fulfilling their
            request. Clean the tables and seating areas after the customers have
            left and ensure the dining area is ready for the next customers.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="March 2025 - Current"
          iconStyle={{ background: "#003459", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Clothes Dry-Cleaner and Amazon Packages-Handler
          </h3>
          <p className="expTitle">J's Cleaner – Lower Town Manhattan </p>

          <p className="expLabel">
            &#128313; Receiving clothes from clients, inspect the areas of
            staining, torn areas and areas that needs modification.
          </p>
          <p className="expLabel">
            &#128313; Identify different fabric types and apply the appropriate
            cleaning techniques.
          </p>

          <p className="expLabel">
            &#128313; Inspect garments for stains, damage, or special cleaning
            requirements. Handle delicate and specialty fabrics such as silk,
            wool, and leather.
          </p>

          <p className="expLabel">
            &#128313; Maintain and clean dry cleaning equipment regularly to
            ensure efficiency. Keep track of customer orders and ensure timely
            delivery.
          </p>

          <p className="expLabel">
            &#128313; Follow safety and environmental regulations regarding
            chemical handling. Provide excellent customer service, including
            addressing complaints and special requests.
          </p>

          <p className="expLabel">
            &#128313; Receiving Packages from different delivery companies -
            Amazon, SHEIN, TEMU, UPS and USPS. Arranging the package boxes,
            labeling customers' apartment numbers and scanning bar codes before
            placing them on shelves.
          </p>

          <p className="expLabel">
            &#128313; Giving the packages out back to the customers according to
            their pickup numbers. Making in and out of records for all packages
            on Notifii App and moving them to front desks when necessary.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--star"
          iconStyle={{ background: "#495057", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
