import './ContactUs.css'

const ContactUs = () => {
  const contactDetails = [
  {
    label: "Address",
    value:
      "Ground floor, manito northlite building, Ananthapura St, near hdfc bank, Yelahanka, Bengaluru, Karnataka 560064",
  },
  {
    label: "Email",
    value: "support@dynamicinfraprojects.com",
  },
  {
    label: "Mobile Number",
    value: ["+91 74837 93308",'+91 96207 20430','+91 91086 90528']
  },
];

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-grid">
        {contactDetails.map((item, index) => (
          <div className="contact-item" key={index}>
            <h2>{item.label}</h2>
            {Array.isArray(item.value) ? (
                item.value.map((val, idx) => <p key={idx}>{val}</p>)
            ) : (
                <p>{item.value}</p>
            )}
                </div>
                ))}
      </div>
    </div>
  )
}

export default ContactUs