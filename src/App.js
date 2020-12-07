import logo from './logo.svg';
import './App.css';
import FetchIncome from './FetchIncome';

function App() {
// "company", "jobTitle", "school", "state", "major", "gender"
  var range = null;
  const options = [
    { option1: "1" },
    { option2: "2" },
    { option3: "3" },
    { option4: "4" }
  ];

  const fetchIncome = () => {
        const url = "https://edith-delta-api.herokuapp.com/test/this/will/work";
        const response = fetch(url, {headers: {"accept": "application/json",'Access-Control-Allow-Origin':'*'}});
        const data = response.json();
        console.log(data);
        range = data;
  };

  return (
    <div className="App">
      <form>
      <br></br>
      <br></br>
      <br></br>
        School:
        <select id='school'>
        <option selected value="None"></option>
          <option value="University of California, Berkeley">University of California, Berkeley</option>
          <option value="Stanford University">Stanford University</option>
          <option value="Massachusetts Institute of Technology">Massachusetts Institute of Technology</option>
          <option value="Carnegie Mellon University">Carnegie Mellon University</option>
          <option value="University of Southern California">University of Southern California</option>
          <option value="Columbia University">Columbia University</option>
          <option value="San Jose State University">San Jose State University</option>
          <option value="University of California, Los Angeles">University of California, Los Angeles</option>
          <option value="Harvard">Harvard University</option>
          <option value="University of Michigan">University of Michigan</option>
          <option value="Cornell University">Cornell University</option>
          <option value="Santa Clara University">Santa Clara University</option>
          <option value="Georgia Institute of Technology">Georgia Institute of Technology</option>
          <option value="University of California, San Diego">University of California, San Diego</option>
          <option value="Universty of Texas at Austin">Universty of Texas at Austin</option>
          <option value="Universty of Chicago">Universty of Chicago</option>
          <option value="University of Pennsylvania">University of Pennsylvania</option>
          <option value="University of California, Santa Cruz">University of California, Santa Cruz</option>
          <option value="Princeton University">Princeton University</option>
          <option value="Claremont McKenna College">Claremont McKenna College</option>
          <option value="New York University">New York University</option>
          <option value="University of California, Irvine">University of California, Irvine</option>
          <option value="University of Illinois at Urbana-Champaign">University of Illinois at Urbana-Champaign</option>
          <option value="Duke University">Duke University</option>
          <option value="University of Waterloo">University of Waterloo</option>
          <option value="University of Wisconsin-Madison">University of Wisconsin-Madison</option>
          <option value="Washington University in St. Louis">Washington University in St. Louis</option>
          <option value="North Carolina State University">North Carolina State University</option>
          <option value="Syracuse University">Syracuse University</option>
          <option value="Texas A&M University">Texas A&M University</option>
          <option value="Illinois Institute of Technology">Illinois Institute of Technology</option>
          <option value="California Polytechnic State University-San Luis Obispo">California Polytechnic State University-San Luis Obispo</option>
          <option value="University of California, Davis">University of California, Davis</option>
          <option value="Purdue University">Purdue University</option>
          <option value="National Institute of Technology Karnataka">National Institute of Technology Karnataka</option>
          <option value="Stony Brook University">Stony Brook University</option>
          <option value="Rutgers University">Rutgers University</option>
          <option value="University of Minnesota-Twin Cities">University of Minnesota-Twin Cities</option>
          <option value="Brigham Young University">Brigham Young University</option>
          <option value="Northeastern University">Northeastern University</option>
          <option value="Other">Other</option>
        </select>
        <br></br>
        <br></br>
        Major 1:
        <select id='major1'>
        <option selected value="None"></option>
          <option value="Computer Science">Computer Science</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Business Administration">Business Administration</option>
          <option value="Statistics">Statistics</option>
          <option value="Economics">Economics</option>
          <option value="Financial Engineering">Financial Engineering</option>
          <option value="Electrical Engineering and Computer Science">Electrical Engineering and Computer Science</option>
          <option value="Finance">Finance</option>
          <option value="Data Science">Data Science</option>
          <option value="Electrical and Computer Engineering">Electrical and Computer Engineering</option>
          <option value="Physics">Physics</option>
          <option value="Operations Research">Operations Research</option>
          <option value="Applied Mathematics">Applied Mathematics</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Industrial Engineering">Industrial Engineering</option>
          <option value="Psychology">Psychology</option>
          <option value="Bioengineering">Bioengineering</option>
          <option value="Chemical Engineering">Chemical Engineering</option>
          <option value="Human Computer Interaction">Human Computer Interaction</option>
          <option value="Bioinformatics">Bioinformatics</option>
          <option value="Other">Other</option>
        </select>
        <br></br>
        <br></br>
        Major 2:
        <select id='major2'>
        <option selected value="None"></option>
          <option value="Computer Science">Computer Science</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Business Administration">Business Administration</option>
          <option value="Statistics">Statistics</option>
          <option value="Economics">Economics</option>
          <option value="Financial Engineering">Financial Engineering</option>
          <option value="Electrical Engineering and Computer Science">Electrical Engineering and Computer Science</option>
          <option value="Finance">Finance</option>
          <option value="Data Science">Data Science</option>
          <option value="Electrical and Computer Engineering">Electrical and Computer Engineering</option>
          <option value="Physics">Physics</option>
          <option value="Operations Research">Operations Research</option>
          <option value="Applied Mathematics">Applied Mathematics</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Industrial Engineering">Industrial Engineering</option>
          <option value="Psychology">Psychology</option>
          <option value="Bioengineering">Bioengineering</option>
          <option value="Chemical Engineering">Chemical Engineering</option>
          <option value="Human Computer Interaction">Human Computer Interaction</option>
          <option value="Bioinformatics">Bioinformatics</option>
          <option value="Other">Other</option>
        </select>
        <br></br>
        <br></br>
        Highest Level of Education:
        <select id='education'>
        <option selected value="None"></option>
          <option value="Bachelor">Bachelors</option>
          <option value="Master">Masters</option>
          <option value="Doctor">Doctors</option>
        </select>
        <br></br>
        <br></br>
        Gender:
        <select id='gender'>
        <option selected value="None"></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br></br>
        <br></br>
        Graduation Year:
        <select id='year'>
        <option selected value="None"></option>
          <option value="2030">2030</option>
          <option value="2029">2029</option>
          <option value="2028">2028</option>
          <option value="2027">2027</option>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
          <option value="2004">2004</option>
          <option value="2003">2003</option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
        </select>
        <br></br>
        <br></br>
        State:
        <select id='state'>
          <option selected value="None"></option>
          <option value="California">CA</option>
          <option value="New York">NY</option>
          <option value="Illinois">IL</option>
          <option value="New Jersey">NJ</option>
          <option value="Massachusetts">MA</option>
          <option value="Pennsylvania">PA</option>
          <option value="Utah">UT</option>
          <option value="Florida">FL</option>
          <option value="Washington">WA</option>
          <option value="Michigan">MI</option>
          <option value="Oregon">OR</option>
          <option value="Other">Other</option>
        </select>
        <br></br>
        <br></br>
        Industry:
        <select id='industry'>
          <option selected value="None"></option>
          <option value="Business Analyst">Business Analyst</option>
          <option value="Consultant">Consultant</option>
          <option value="Data Analyst">Data Analyst</option>
          <option value="Investment Banking">Investment Banking</option>
          <option value="Product Developer">Product Developer</option>
          <option value="Project Manager">Project Manager</option>
          <option value="Quantitative Analyst">Quantitative Analyst</option>
          <option value="Software Engineer">Software Engineer</option>
        </select>
      </form>
    <div>
                <FetchIncome />
            </div>
            <br></br>
            <br></br>
            <br></br>
    </div>

  )
}

export default App;
