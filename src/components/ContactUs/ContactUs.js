import './ContactUs.css'

const ContactUs = () => {
  const contactDetails = [
    {
      label: "Address",
      name: 'Dynamic Infra Projects',
      value:
        "Ground floor, manito northlite building, Ananthapura St, near HDFC bank, Yelahanka, Bengaluru, Karnataka 560064",
    },
    {
      label: "Email",
      value: "support@dynamicinfraprojects.com",
    },
    {
      label: "Mobile Number",
      value: ["+91 74837 93308", '+91 96207 20430', '+91 91086 90528']
    },
  ];

  return (
    <div id = 'contact' className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-grid">
        {contactDetails.map((item, index) => (
          <div className="contact-item" key={index}>
            <h2>{item.label}: <span>{item.name}</span></h2>
            {Array.isArray(item.value) ? (
              item.value.map((val, idx) => <p key={idx}>{val}</p>)
            ) : (
              <p>{item.value}</p>
            )}
          </div>
        ))}
      </div>

      {/* Small Google Map */}
      <div
        style={{
          width: "auto",       // fixed small width
          height: "300px",      // fixed small height
          marginTop: "2rem",
          border: "1px solid #ccc", // optional border
          borderRadius: "8px",      // optional rounded corners
          overflow: "hidden",       // ensures iframe fits nicely
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.8382982770445!2d77.58597390052627!3d13.02505672510022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae196d8319eedd%3A0x36ac6181791b2def!2sDynamic%20Infra%20Projects!5e0!3m2!1sen!2sin!4v1759476372504!5m2!1sen!2sin"
          style={{
            border: 0,
            width: "100%",
            height: "100%",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dynamic Infra Projects"
        ></iframe>
      </div>
    </div>
  )
}

export default ContactUs
