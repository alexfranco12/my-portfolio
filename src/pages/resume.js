import * as React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../Layouts';
import { 
  EducationItem,
  HackathonItem,
  RestaurantItem,
  SkillItem, 
  SmallTitle, 
  SoftwareItem, 
  StackedButton, 
  Title 
} from '../components';
import { 
  RiCodeSSlashFill,
  RiRestaurantLine,
  RiBriefcase2Fill,
  RiCompasses2Fill,
} from 'react-icons/ri'
import resume from '../files/resume.pdf'

const ResumePage = () => {
  return ( 
    <InnerLayout>
      <ResumePageStyled>
        <div className="resume-header">
          <div className="resume-title">
            <Title title={"resume"} />
          </div>
          <div className="resume-download">
            <div className="button">
              <a href={resume} target="_blank" rel="noopender noreferrer" download>
                <StackedButton text={"Download"} />
              </a>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <SmallTitle icon={RiCodeSSlashFill} title={"Skills"} />
          <SkillItem 
            title={"Languages, Libraries, & Frameworks"}
            skills={['HTML', 'CSS', 'JavaScript', 'EJS', 'React', 'Node', 'Express', 'Handlebars', 'Bootstrap', 'Material-UI']}
          />
          <SkillItem 
            title={"Databases"}
            skills={['SQL', 'NoSQL', 'MongoDB', 'DjangoDB']}
          />
          <SkillItem 
            title={"Methodologies"}
            skills={['Object-Oriented Programming', 'MVC Pattern', 'Test-Driven Development', 'Responsive Design', 'User Stories', 'Wireframing']}
          />
          <SkillItem 
            title={"Management, Platforms, & Deployment"}
            skills={['Git', 'GitHub', 'Postman', 'Heroku', 'Command Line']}
          />
          <SkillItem 
            title={"Additional Technical Skills"}
            skills={['Zoom', 'Slack', 'Trello', 'Discord', 'Microsoft']}
          />
          <SkillItem 
            title={"Restaurant Software"}
            skills={['Aloha', 'Aloha Enterprise', 'Crunchtime', 'UltiPro', 'Micros', 'Toast', 'ADP', 'Avero', 'Yelp', 'OpenTable', 'UberEats', 'Caviar', 'Tock', 'Postmates']}
          />
        </div>
        
        <div className="resume-section">
          <SmallTitle icon={RiBriefcase2Fill} title={"Software Engineering Experience"} />
          <h2>Hackathons</h2>
          <HackathonItem
            title={'Mintbean'}
            date={'November 23, 2021'}
            description={'TBD'}
          />
          <HackathonItem 
            title={'Postman'} 
            date={'October 31, 2021'} 
            description={'A month-long global celebration of open source software run by DigitalOcean. During the hackathon, we leveraged a Halloween Costume Contest API to build a live API server using Postman\'s API schema.'}
          />
          <HackathonItem
            title={'General Assembly'}
            date={'September 23, 2021'}
            description={'Design and build a practical application or site that can support a pet shelter, pet parent, or pet caregiver.'}
          />
          <HackathonItem
            title={'Mintbean'}
            date={'August 31, 2021'}
            description={'Build a 2D game with clear win and lose conditions built in JavaScript or Typescript. Additionally, any professional game engines like Unreal, Unity or Godot were off limits.'}
          />
          
          <SoftwareItem 
            title={"General Assembly"}
            subTitle={"Software Engineering Immersive"}
            description={"Successfully completed 500+ hours of expert-led instruction in the most up-to-date industry standards with hands-on learning of front-end and back-end applications."}
            projects={[
              "Project 1: Built a game hosted on Github that renders in the browser using JavaScript and DOM manipulation.",
              "Project 2: Deployed an interactive React application that renders data from a third-party API",
              "Project 3: Worked with a team to design an API using Node.js, Express, and Mongoose that serves JSON and built a front-end React application that updates the user interface and makes requests to the API",
              "Project 4: Designed a RESTful API using Python and Django and built a front-end React application that updates the user interface and makes requests to the API"
            ]}
          />
        </div>

        <div className="resume-section">
          <SmallTitle icon={RiRestaurantLine} title={"Work Experience"} />
          <RestaurantItem 
            title={'Front of House Manager'}
            subTitle={'BOKA – BOKA Restaurant Group'}
            startDate={''}
            endDate={''}
            listItems={[
              'Contributed to a superior guest experience earning the restaurant a Michelin Star 3 years in a row, and other awards.',
              'Administered detailed inventory and sales data through Excel using advanced formulas and pivot tables.',
              'Oversaw staff management: communicated job expectations, conducted staff meetings and quarterly department reviews, dedicated time and resources to ongoing team training, and led the hiring and development of employees.',
              'Managed the execution of contracted events and restaurant buyouts.'
            ]}
          />
          <RestaurantItem
            title={'Front of House Manager'}
            subTitle={'Bar Siena & BomboBar – DineAmic Group'}
            startDate={''}
            endDate={''}
            listItems={[
              'Led multiple projects and new process improvements and implemented them in a timely fashion.',
              'Maximized restaurant costs by minimizing waste, labor, and supplies.',
              'Supervised front-of-house staff by ensuring service standards are met for all Bar, Host, Bus, Run, and Servers.',
              'Identified, addressed, and documented employee performance according to company operational standards.'
            ]}
          />
          <RestaurantItem
            title={'Front of House Manager'}
            subTitle={'Bar Louie River North - Bar Louie'}
            startDate={''}
            endDate={''}
            listItems={[
              'Adhered to a defined budget while being attentive to the restaurant’s profit and loss.',
              'Managed the recruitment and development of employees, ongoing team training, and employee scheduling.',
              'Communicated all repair and maintenance needs with the appropriate third parties.',
              'Conducted weekly inventory and kept within a 1% variance between actual and theoretical inventory.'
            ]}
          />
        </div>

        <div className="resume-section">
          <SmallTitle icon={RiCompasses2Fill} title={"Education"} />
          <EducationItem 
            title={"General Assembly"}
            subTitle={"Certificate, Software Engineering Immersive Remote (SEI)"}
            gradDate={""}
          />
          <EducationItem 
            title={"Illinois State University"}
            subTitle={"Bachelor of Science, Mathematics Secondary Education"}
            gradDate={""}
          />
        </div>
      </ResumePageStyled>
    </InnerLayout>
   );
}
 
export default ResumePage;

const ResumePageStyled = styled.div`
  padding: 2rem;
  & .resume-header {
    display: flex;
    & .resume-title {
      flex: 1;
    }
    & .resume-download {
      flex: 1;
      align-self: center;
      & .button {
        margin-left: auto;
        margin-right: 1rem;
        width: 50%;
      }
    }
  }
  & .resume-section {
    margin-bottom: 6rem;
  }
`;