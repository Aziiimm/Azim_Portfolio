import React, { useState } from "react";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
const isEmailConfigured = Boolean(ACCESS_KEY);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const showToast = (message) => {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: rgb(var(--bp-accent));
      color: rgb(var(--bp-bg));
      padding: 12px 20px;
      border-radius: 6px;
      font-family: "IBM Plex Mono", ui-monospace, "SFMono-Regular", "SF Mono", Consolas, monospace;
      font-size: 13px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
      z-index: 1000;
      font-weight: 600;
      animation: slideIn 0.3s ease-out;
    `;

    const style = document.createElement("style");
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = "slideIn 0.3s ease-out reverse";
      setTimeout(() => {
        if (document.body.contains(toast)) document.body.removeChild(toast);
        if (document.head.contains(style)) document.head.removeChild(style);
      }, 300);
    }, 3000);
  };

  const copyToClipboard = async (text, message) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "999999px";
        textArea.style.top = "999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      showToast(message);
    } catch (err) {
      console.error("Failed to copy: ", err);
      showToast("Failed to copy to clipboard");
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEmailConfigured) {
      showToast("Email form isn't set up yet — reach out directly instead.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New message from ${form.name} via azimrahat.com`,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Submission failed");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      showToast("Message sent!");
    } catch (err) {
      console.error("Failed to send message: ", err);
      setStatus("error");
      showToast("Something went wrong — try emailing directly instead.");
    }
  };

  return (
    <section className="mb-8" id="contact">
      <h2 className="mb-5 font-mono text-3xl font-bold tracking-tight text-bp-text sm:text-4xl">
        Contact Me
      </h2>

      <div className="rounded-md border border-bp-line bg-bp-surface p-4 sm:p-6">
        <div className="flex flex-wrap items-start gap-10">
          <form
            onSubmit={handleSubmit}
            className="flex min-w-[260px] flex-[1.4] flex-col gap-3"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="mb-1.5 block font-mono text-[10.5px] uppercase tracking-wider text-bp-muted"
              >
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full rounded border border-bp-line bg-bp-bg px-3 py-2 text-sm text-bp-text placeholder:text-bp-muted/40 focus:border-bp-accent focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-1.5 block font-mono text-[10.5px] uppercase tracking-wider text-bp-muted"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="w-full rounded border border-bp-line bg-bp-bg px-3 py-2 text-sm text-bp-text placeholder:text-bp-muted/40 focus:border-bp-accent focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="mb-1.5 block font-mono text-[10.5px] uppercase tracking-wider text-bp-muted"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your message..."
                className="w-full resize-none rounded border border-bp-line bg-bp-bg px-3 py-2 text-sm text-bp-text placeholder:text-bp-muted/40 focus:border-bp-accent focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-1 w-fit rounded bg-bp-accent px-5 py-2 font-mono text-xs font-bold text-bp-bg transition-opacity duration-300 hover:opacity-90 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>
            {!isEmailConfigured && (
              <p className="font-mono text-[10.5px] text-bp-muted">
                (Form isn't wired up yet — use the info to the right for
                now.)
              </p>
            )}
          </form>

          <div className="flex min-w-[200px] flex-1 flex-col gap-3">
            <button
              onClick={() =>
                copyToClipboard(
                  "azimrahat108@gmail.com",
                  "Email Copied to Clipboard!",
                )
              }
              className="flex items-center gap-2 font-mono text-xs text-bp-muted transition-colors duration-300 hover:text-bp-accent"
              title="Copy Email"
            >
              <MdEmail className="flex-shrink-0 text-base text-bp-accent" />
              <span className="w-14 flex-shrink-0 text-bp-muted">EMAIL</span>
              <span className="text-bp-text">azimrahat108@gmail.com</span>
            </button>
            <button
              onClick={() =>
                copyToClipboard(
                  "347-570-7950",
                  "Phone Number Copied to Clipboard!",
                )
              }
              className="flex items-center gap-2 font-mono text-xs text-bp-muted transition-colors duration-300 hover:text-bp-accent"
              title="Copy Phone Number"
            >
              <MdLocalPhone className="flex-shrink-0 text-base text-bp-accent" />
              <span className="w-14 flex-shrink-0 text-bp-muted">PHONE</span>
              <span className="text-bp-text">347-570-7950</span>
            </button>

            <div className="my-1 h-px bg-bp-line"></div>

            <a
              href="https://github.com/Aziiimm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-bp-muted transition-colors duration-300 hover:text-bp-accent"
            >
              <AiFillGithub className="flex-shrink-0 text-base text-bp-accent" />
              <span className="w-14 flex-shrink-0 text-bp-muted">GITHUB</span>
              <span className="text-bp-text">github.com/Aziiimm</span>
            </a>
            <a
              href="https://www.linkedin.com/in/azim-rahat/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-bp-muted transition-colors duration-300 hover:text-bp-accent"
            >
              <AiFillLinkedin className="flex-shrink-0 text-base text-bp-accent" />
              <span className="w-14 flex-shrink-0 text-bp-muted">
                LINKEDIN
              </span>
              <span className="text-bp-text">linkedin.com/in/azim-rahat</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
