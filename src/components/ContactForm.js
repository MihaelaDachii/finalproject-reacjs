import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send us a message !</h1>
      <form>
        <input placeholder="Name"/>
        <input placeholder="E-mail"/>
        <input placeholder="Subject"/>
        <textarea placeholder="Write your message here" rows="4"></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}

export default ContactForm;