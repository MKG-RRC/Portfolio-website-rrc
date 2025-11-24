import React, { useState } from "react";

import "./ContactForm.css";
import { Button } from "../Button/Button";
import { Typography } from "../Typography/Typography";

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message submitted! (storybook demo)");
  };

  return (
    <div className="contact-form-card">
      <Typography variant="h2">Contact Me</Typography>

      <Typography variant="p">
        This is a reusable Contact Form component designed inside Storybook.
      </Typography>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Your message..."
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </form>
    </div>
  );
};
