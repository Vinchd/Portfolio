import NavBar from "../utilities/NavBar.jsx";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    for (let [name, value] of formData.entries()) {
      console.log(`${name}: ${value}`);
    }
  };

  return (
    <div className="flex">
      <NavBar activeSection="contact" center={"items-end"} />
      <section id="contact" className="scroll-area">
        <div className={`box w-full max-w-[500px] overflow-auto p-6`}>
          <h2 className="text-center">Contact</h2>
          <form
            action=""
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
