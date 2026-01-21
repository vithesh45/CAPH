import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Button from "../components/common/Button";
import SuccessModal from "../components/common/SuccessModal";

export const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("idle");
      }
    } catch {
      setStatus("idle");
    }
  };

  return (
    <div className="contact-page">
      {status === "success" && (
        <SuccessModal onClose={() => setStatus("idle")} />
      )}

      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Start Your Partnership With CAPH</h1>
          <p className="page-hero-subtitle">
            Whether you're looking for consulting, talent, or long-term collaboration—we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p className="contact-intro">
                Reach out to us and let's discuss how we can support your business goals.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <Mail size={22} />
                  <a href="mailto:info@caph.com">info@caph.com</a>
                </div>

                <div className="contact-item">
                  <Phone size={22} />
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>

                <div className="contact-item">
                  <MapPin size={22} />
                  <p>Serving clients globally</p>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={onSubmit}>
                {/* Honeypot */}
                <input
                  type="checkbox"
                  name="botcheck"
                  style={{ display: "none" }}
                />

                <input type="hidden" name="subject" value="New Contact Form Submission - CAPH" />
                <input type="hidden" name="from_name" value="CAPH Website" />

                <div className="form-group">
                  <label>Name *</label>
                  <input type="text" name="name" required />
                </div>

                <div className="form-group">
                  <label>Company</label>
                  <input type="text" name="company" />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" name="email" required />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" name="phone" />
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" rows="5" required></textarea>
                </div>

                <div className="form-submit-center">
                  <Button
                    type="submit"
                    size="large"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending..." : "Submit"}
                  </Button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
