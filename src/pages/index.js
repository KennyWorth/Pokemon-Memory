import React from 'react'
const Home = () => {
  return (
      <div style={{
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '90vh'}}>
          <div className="w3-content w3-margin-top" style={{maxWidth:"1400px"}}>
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
  <div className="w3-row-padding">
  
    <div className="w3-third">
    
      <div className="w3-white w3-text-grey w3-card-4">
        <div className="w3-display-container">
          <img src="/profilepic.png" alt={"Avatar"} style={{width:"100%", }}/>
        </div>
        <div className="w3-container">
          <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Go/Java Developer</p>
          <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>kennyworth@gmail.com</p>
          <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>(409) 209-9097</p>
          <hr/>

          <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
          <p><b>Databases</b></p>
            <p>PostgreSQL, MongoDB, MySQL, JDBC</p>
          <p><b>Go</b></p>
            <p>gRPC, Concurrency</p>
          <p><b>Web</b></p>
            <p>AWS, JavaScript, React, Redux, Node, Bootstrap, HTML</p>
          <br/>
        </div>
      </div><br/>

    </div>

    <div className="w3-twothird">
    
      <div className="w3-container w3-card w3-white w3-margin-bottom">
        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Java / Golang Developer</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2022 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
          <p></p>
          <hr/>
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Industrial Radiographer / Applied Standards Inspection</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Nov 2018 - Jan 2022</h6>
          <p></p>
          <hr/>
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Assistant Market Manager / Brookshire Brothers</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jul 2015 - Nov 2018</h6>
          <p></p><br/>
        </div>
        <div className="w3-container">
          <h5 className="w3-opacity"><b>Hospital Corpsman / US Navy</b></h5>
          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jul 2015 - Nov 2018</h6>
          <p></p><br/>
        </div>
      </div>

      <div className="w3-container w3-card w3-white">
        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>About Me</h2>
        <div className="w3-container">
          <p>Full Stack Golang and Java developer. I have a work background of fast-paced and detail-focused coordination and 
            execution of a variety of required tasks. I enjoy finding opportunities to use my teamwork and team-building
            skills honed within both military and civilian roles to improve my skills and help others.</p>
          <hr/>
        </div>
      </div>

    </div>
    
  </div>
  
</div>
      </div>
  )
}

export default Home