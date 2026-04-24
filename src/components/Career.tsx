import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="education">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Qualifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Applications (MCA)</h4>
                <h5>Bhartiya Vidyapeeth's Institute of Management & Information Technology</h5>
                <h5>Mumbai University</h5>
              </div>
              <h3>2025 – 2027</h3>
            </div>
            <p><b>CGPA: 7.64</b></p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <h5>Shramsadhana Bombay Trust College of Engineering & Technology</h5>
                <h5>North Maharashtra University</h5>
              </div>
              <h3>2022 – 2025</h3>
            </div>
            <p><b>CGPI: 8.90</b></p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary Certificate (HSC)</h4>
                <h5>Haji Noor Mohammad Chacha Junior College of Arts & Science</h5>
                <h5>Maharashtra State Board</h5>
              </div>
              <h3>2020 – 2022</h3>
            </div>
            <p><b>Percentage: 68.33%</b></p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary School Certificate (SSC)</h4>
                <h5>Iqra Urdu High School, Salar Nagar</h5>
                <h5>Maharashtra State Board</h5>
              </div>
              <h3>2019 – 2020</h3>
            </div>
            <p><b>Percentage: 72.20%</b></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
