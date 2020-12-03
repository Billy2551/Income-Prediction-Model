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
          <option value="berkeley">University of California, Berkeley</option>
          <option value="stanford">Stanford</option>
          <option value="mit">Massachusetts Institute of Technology</option>
          <option value="cmu">Carnegie Mellon University</option>
          <option value="usc">University of Southern California</option>
          <option value="col">Columbia University</option>
          <option value="sjsu">San Jose State University</option>
          <option value="ucla">University of California, Los Angeles</option>
          <option value="harv">Harvard</option>
          <option value="uofm">University of Michigan</option>
          <option value="corn">Cornell University</option>
          <option value="scu">Santa Clara University</option>
          <option value="getech">Georgia Institute of Technology</option>
          <option value="ucsd">University of California, San Diego</option>
          <option value="ut">Universty of Texas at Austin</option>
          <option value="uchic">Universty of Chicago</option>
          <option value="upenn">University of Pennsylvania</option>
          <option value="ucsc">University of California, Santa Cruz</option>
          <option value="prince">Princeton University</option>
          <option value="cmc">Claremont McKenna College</option>
          <option value="nyu">New York University</option>
          <option value="uci">University of California, Irvine</option>
          <option value="uiuc">University of Illinois at Urbana-Champaign</option>
          <option value="duke">Duke University</option>
          <option value="uw">University of Waterloo</option>
          <option value="uwm">University of Wisconsin-Madison</option>
          <option value="washu">Washington University in St. Louis</option>
          <option value="ncsu">North Carolina State University</option>
          <option value="syra">Syracuse University</option>
          <option value="tex">Texas A&M University</option>
          <option value="iiot">Illinois Institute of Technology</option>
          <option value="calpoly">California Polytechnic State University-San Luis Obispo</option>
          <option value="ucd">University of California, Davis</option>
          <option value="purdue">Purdue University</option>
          <option value="nitk">National Institute of Technology Karnataka</option>
          <option value="sbu">Stony Brook University</option>
          <option value="ru">Rutgers University</option>
          <option value="umc">University of Minnesota-Twin Cities</option>
          <option value="byu">Brigham Young University</option>
          <option value="nu">Northeastern University</option>
          <option value="other">Other</option>
        </select>
        <br></br>
        <br></br>
        Major:
        <select id='major'>
        <option selected value="None"></option>
          <option value="cs">Computer Science</option>
          <option value="ee">Electrical Engineering</option>
          <option value="ba">Business Administration</option>
          <option value="stat">Statistics</option>
          <option value="econ">Economics</option>
          <option value="fineng">Financial Engineering</option>
          <option value="eecs">Electrical Engineering and Computer Science</option>
          <option value="fin">Finance</option>
          <option value="ds">Data Science</option>
          <option value="ecs">Electrical and Computer Engineering</option>
          <option value="ph">Physics</option>
          <option value="or">Operations Research</option>
          <option value="am">Applied Mathematics</option>
          <option value="meche">Mechanical Engineering</option>
          <option value="indeng">Industrial Engineering</option>
          <option value="psych">Psychology</option>
          <option value="bio">Bioengineering</option>
          <option value="cheme">Chemical Engineering</option>
          <option value="hci">Human Computer Interaction</option>
          <option value="bioin">Bioinformatics</option>
          <option value="other">Other</option>
        </select>
        <br></br>
        <br></br>
        Highest Level of Education:
        <select id='education'>
        <option selected value="None"></option>
          <option value="bach">Bachelors</option>
          <option value="mast">Masters</option>
          <option value="doc">Doctors</option>
        </select>
        <br></br>
        <br></br>
        Graduation Year:
        <select>
        <option selected value="None"></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br></br>
        <br></br>
        Gender:
        <select>
        <option selected value="None"></option>
          <option value="male">1970</option>
          <option value="female">1971</option>
          <option value="other">1972</option>
        </select>
        <br></br>
        <br></br>
        State:
        <select>
          <option selected value="None"></option>
          <option value="ca">CA</option>
          <option value="ny">NY</option>
          <option value="il">IL</option>
          <option value="nj">NJ</option>
          <option value="ma">MA</option>
          <option value="pa">PA</option>
          <option value="ut">UT</option>
          <option value="fl">FL</option>
          <option value="wa">WA</option>
          <option value="mi">MI</option>
          <option value="or">OR</option>
          <option value="other">Other</option>
        </select>
        <br></br>
        <br></br>
        Industry:
        <select>
          <option selected value="None"></option>
          <option value="ba">Business Analyst</option>
          <option value="con">Consultant</option>
          <option value="data">Data Analyst</option>
          <option value="ib">Investment Banking</option>
          <option value="prod">Product Developer</option>
          <option value="prom">Project Manager</option>
          <option value="quant">Quantitative Analyst</option>
          <option value="swe">Software Engineer</option>
        </select>
      </form>
    <div>
                <FetchIncome />
            </div>
    </div>
  )
}

export default App;
