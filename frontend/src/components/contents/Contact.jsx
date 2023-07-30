import { useState, useEffect } from "react";

export default function Contact() {
  const [scrollForm, setScrollForm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(event.target);
    for (let [name, value] of formData.entries()) {
      console.log(`${name}: ${value}`);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight < 790) {
        setScrollForm("overflow-scroll");
      } else {
        setScrollForm("");
      }
    };
    if (window.innerHeight < 790) {
      setScrollForm("overflow-scroll");
    } else {
      setScrollForm("");
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="contact" className="scroll-area">
      <div className={`box h-full w-[60%] p-6 ${scrollForm}`}>
        <h2 className="text-center">Contact</h2>
        <form
          action=""
          name="contactform"
          onSubmit={handleSubmit}
          className="flex w-full flex-col"
        >
          <label htmlFor="name" className="mt-4">
            Nom* :
          </label>
          <input type="text" name="name" id="name" className="input" required />
          <label htmlFor="email" className="mt-4">
            Mail* :
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="input"
            required
          />
          <label htmlFor="phone" className="mt-4">
            Tel :
          </label>
          <input type="tel" name="phone" id="phone" className="input" />
          <label htmlFor="message" className="mt-4">
            Message* :
          </label>
          <textarea name="message" id="message" rows="5" className="input" />
          <button type="submit" className="btn mr-14 mt-6 w-28 self-end">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
