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
          <option value="mit">MIT</option>
        </select>
        <br></br>
        <br></br>
        Major:
        <select id='major'>
        <option selected value="None"></option>
          <option value="cs">Computer Science</option>
          <option value="ee">Electrical Engineering</option>
          <option value="ba">Business Administration</option>
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
        <select id="year"></select>
        <option value={Object.values(options)}>
              {" "}
              {Object.keys(options)}{" "}
            </option>
        <br></br>
        <br></br>
        Gender:
        <select>
        <option selected value="None"></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br></br>
        <br></br>
        Location:
        <input type="text" name="loc"/>
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
