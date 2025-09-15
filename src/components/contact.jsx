import React from "react";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  const copyToClipboard = async (text, message) => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers or non-HTTPS
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

      // Show success toast
      showToast(message);
    } catch (err) {
      console.error("Failed to copy: ", err);
      // Show error toast
      showToast("Failed to copy to clipboard");
    }
  };

  const showToast = (message) => {
    // Create a temporary toast notification
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #0061ff;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 1000;
      font-weight: 500;
      animation: slideIn 0.3s ease-out;
    `;

    // Add slide-in animation
    const style = document.createElement("style");
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);

    document.body.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(() => {
      toast.style.animation = "slideIn 0.3s ease-out reverse";
      setTimeout(() => {
        if (document.body.contains(toast)) {
          document.body.removeChild(toast);
        }
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
      }, 300);
    }, 3000);
  };

  return (
    <section className="mb-8" id="contact">
      <h2 className="mb-4 text-2xl font-semibold text-white sm:mb-6 sm:text-3xl">
        Contact Me
      </h2>

      <div className="space-y-4">
        <div className="rounded-xl bg-white/60 p-3 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
            {/* Left side - Email and Phone */}
            <div className="space-y-3">
              <button
                onClick={() =>
                  copyToClipboard(
                    "azimrahat108@gmail.com",
                    "Email Copied to Clipboard!",
                  )
                }
                className="flex w-full items-center space-x-3 rounded-lg p-2 text-left transition-colors duration-300 hover:bg-gray-50 sm:space-x-4 sm:p-3"
                title="Copy Email"
              >
                <MdEmail className="text-3xl text-[#0061ff] sm:text-4xl" />
                <div>
                  <p className="text-sm font-semibold text-gray-800 sm:text-base">
                    Email
                  </p>
                  <p className="text-xs text-gray-700 sm:text-sm md:text-base">
                    azimrahat108@gmail.com
                  </p>
                </div>
              </button>

              <button
                onClick={() =>
                  copyToClipboard(
                    "347-570-7950",
                    "Phone Number Copied to Clipboard!",
                  )
                }
                className="flex w-full items-center space-x-3 rounded-lg p-2 text-left transition-colors duration-300 hover:bg-gray-50 sm:space-x-4 sm:p-3"
                title="Copy Phone Number"
              >
                <MdLocalPhone className="text-3xl text-[#0061ff] sm:text-4xl" />
                <div>
                  <p className="text-sm font-semibold text-gray-800 sm:text-base">
                    Phone
                  </p>
                  <p className="text-xs text-gray-700 sm:text-sm md:text-base">
                    347-570-7950
                  </p>
                </div>
              </button>
            </div>

            {/* Right side - GitHub and LinkedIn */}
            <div className="space-y-3">
              <a
                href="https://github.com/Aziiimm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center space-x-3 rounded-lg p-2 text-left transition-colors duration-300 hover:bg-gray-50 sm:space-x-4 sm:p-3"
                title="GitHub"
              >
                <AiFillGithub className="text-3xl text-[#0061ff] sm:text-4xl" />
                <div>
                  <p className="text-sm font-semibold text-gray-800 sm:text-base">
                    GitHub
                  </p>
                  <p className="text-xs text-gray-700 sm:text-sm md:text-base">
                    github.com/Aziiimm
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/azim-rahat/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center space-x-3 rounded-lg p-2 text-left transition-colors duration-300 hover:bg-gray-50 sm:space-x-4 sm:p-3"
                title="LinkedIn"
              >
                <AiFillLinkedin className="text-3xl text-[#0061ff] sm:text-4xl" />
                <div>
                  <p className="text-sm font-semibold text-gray-800 sm:text-base">
                    LinkedIn
                  </p>
                  <p className="text-xs text-gray-700 sm:text-sm md:text-base">
                    linkedin.com/in/azim-rahat
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
