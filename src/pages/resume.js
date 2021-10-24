import * as React from 'react'
import { MainLayout, InnerLayout } from '../Layouts';
import { NavBar, SmallTitle, Title } from '../components';
import { 
  RiBookOpenLine,
  RiCodeSSlashFill,
  RiFolder5Line,
  RiBriefcase2Fill,
  RiCompasses2Fill,
} from 'react-icons/ri'

const ResumePage = () => {
  return ( 
    <MainLayout>
      <NavBar />
      <InnerLayout>
        <Title title={"resume"} span={"resume"} />
        <SmallTitle icon={RiBookOpenLine} title={"summary"} />
        <p>Passionate full-stack developer with a broad set of technical and personal skills applicable across various industries and roles; graduated with a BA in Mathematics Education and General Assembly’s SEI Immersive. Reliable, results-driven, user-focused philosophy, proactive problem solver, and cooperative team player.</p>
        <SmallTitle icon={RiCodeSSlashFill} title={"Skills"} />
        <div className="skills">
          <ul>
            <li>Languages, Libraries, & Frameworks: HTML, CSS, JavaScript, React, Node, Express, Handlebars, EJS, Bootstrap, Material-UI</li>
            <li>Databases: SQL, NoSQL, MongoDB, DjangoDB</li>
            <li>Methodologies: Object-Oriented Programming, MVC Pattern, Test-Driven Development, Responsive Design, User Stories, Wireframing</li>
            <li>Management, Platforms, & Deployment: Git, GitHub, Postman, Heroku, Command Line</li>
            <li>Additional Technical Skills: Zoom, Slack, Trello, Discord, Microsoft</li>
            <li>Restaurant Software: Aloha, Aloha Enterprise, Crunchtime, UltiPro, Micros, Toast, ADP, Avero, Yelp, OpenTable, UberEats, Caviar, Tock, Postmates</li>
          </ul>
        </div>
        <SmallTitle icon={RiFolder5Line} title={"Projects"} />
        <h2>Software Engineering Immersive</h2>
        <h4>General Assembly</h4>
        <ul>
          <li>Successfully completed 500+ hours of expert-led instruction in the most up-to-date industry standards with hands-on learning of front-end and back-end applications.</li>
          <li>Developed projects:
            <ul>
              <li>Project 1: Built a game hosted on Github that renders in the browser using JavaScript and DOM manipulation.</li>
              <li>Project 2: Deployed an interactive React application that renders data from a third-party API</li>
              <li>Project 3: Worked with a team to design an API using Node.js, Express, and Mongoose that serves JSON and built a front-end React application that updates the user interface and makes requests to the API</li>
              <li>Project 4: Designed a RESTful API using Python and Django and built a front-end React application that updates the user interface and makes requests to the API</li>
            </ul>
          </li>
        </ul>
        <SmallTitle icon={RiBriefcase2Fill} title={"Work Experience"} />
        <h2>Front of House Manager</h2>
        <h4>BOKA – BOKA Restaurant Group</h4>
        <ul>
          <li>Contributed to a superior guest experience earning the restaurant a Michelin Star 3 years in a row, and other awards.</li>
          <li>Administered detailed inventory and sales data through Excel using advanced formulas and pivot tables.</li>
          <li>Oversaw staff management: communicated job expectations, conducted staff meetings and quarterly department reviews, dedicated time and resources to ongoing team training, and led the hiring and development of employees.</li>
          <li>Managed the execution of contracted events and restaurant buyouts.</li>
        </ul>
        <h2>Front of House Manager</h2>
        <h4>Bar Siena & BomboBar – DineAmic Group</h4>
        <ul>
          <li>Led multiple projects and new process improvements and implemented them in a timely fashion.</li>
          <li>Maximized restaurant costs by minimizing waste, labor, and supplies.</li>
          <li>Supervised front-of-house staff by ensuring service standards are met for all Bar, Host, Bus, Run, and Servers.</li>
          <li>Identified, addressed, and documented employee performance according to company operational standards.</li>
        </ul>
        <h2>Front of House Manager</h2>
        <h4>Bar Louie River North - Bar Louie</h4>
        <ul>
          <li>Adhered to a defined budget while being attentive to the restaurant’s profit and loss.</li>
          <li>Managed the recruitment and development of employees, ongoing team training, and employee scheduling.</li>
          <li>Communicated all repair and maintenance needs with the appropriate third parties.</li>
          <li>Conducted weekly inventory and kept within a 1% variance between actual and theoretical inventory.</li>
        </ul>
        <SmallTitle icon={RiCompasses2Fill} title={"Education"} />
        <h2>General Assembly</h2>
        <h4>Certificate, Software Engineering Immersive Remote (SEI)</h4>
        <h2>Illinois State University</h2>
        <h4>Bachelor of Science, Mathematics Secondary Education</h4>
      </InnerLayout>
      

    </MainLayout>
   );
}
 
export default ResumePage;