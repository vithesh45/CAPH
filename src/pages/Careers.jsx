import Button from "../components/common/Button";


export const Careers = () => {
  return (
    <div className="careers-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Build Your Career With CAPH</h1>
          <p className="page-hero-subtitle">
            Join a team that values trust, growth, and meaningful work. At CAPH, you don't just deliver services—you build partnerships.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="content-max">
            <h2 className="content-heading">Why Work at CAPH?</h2>
            <div className="careers-grid">
              <div className="career-benefit">
                <h3>Partnership Culture</h3>
                <p>Work alongside talented professionals in a collaborative, trust-driven environment.</p>
              </div>
              <div className="career-benefit">
                <h3>Growth Opportunities</h3>
                <p>Continuous learning and career advancement across diverse projects and industries.</p>
              </div>
              <div className="career-benefit">
                <h3>Meaningful Impact</h3>
                <p>Contribute to projects that transform businesses and solve real challenges.</p>
              </div>
              <div className="career-benefit">
                <h3>Work-Life Balance</h3>
                <p>Flexible work arrangements that respect your personal time and well-being.</p>
              </div>
            </div>

            <div className="careers-cta-box">
              <h2>Ready to Join Our Team?</h2>
              <p>Send us your resume and let's explore opportunities together.</p>
              <Button
                variant="primary"
                size="large"
                href="mailto:careers@caph.com?subject=Resume%20Submission%20-%20CAPH"
              >
                Send Your Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};