import { useRef } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../utilities/NavBar.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gn02p9j",
        "template_e2y8iir",
        form.current,
        "IQwJv6XF81ZZMew6w"
      )
      .then(() => {
        toast.success("Message envoyé ✉️", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((err) => {
        toast.error(`Erreur d'envoi ⚠️ ${err}`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });

    e.target.reset();
  };

  return (
    <div className="flex">
      <NavBar activeSection="contact" center={"items-end"} />
      <section id="contact" className="scroll-area">
        <div className={`box w-full max-w-[500px] overflow-auto p-6`}>
          <h2 className="text-center">Contact</h2>
          <form
            ref={form}
            name="contactform"
            onSubmit={handleSubmit}
            className="flex w-full flex-col"
          >
            <label htmlFor="name" className="ml-2 mt-4">
              Nom* :
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="input"
              required
            />
            <label htmlFor="email" className="ml-2 mt-4">
              Mail* :
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input"
              required
            />
            <label htmlFor="phone" className="ml-2 mt-4">
              Tel :
            </label>
            <input type="tel" name="phone" id="phone" className="input" />
            <label htmlFor="message" className="ml-2 mt-4">
              Message* :
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              className="input"
              required
            />
            <button type="submit" className="btn mr-14 mt-6 w-28 self-end">
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
