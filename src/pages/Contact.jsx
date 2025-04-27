export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = object.fromEntries(formData.entries());
  };

  return(
    <section className="section-contact">
      <h2 className="conatiner-title">
      </h2>

    <div className="contact-wrapper container">
      <form action= {handleFormSubmit}>
        <input type="text"
        className="form-control"
        required autoComplete="false" 
        placeholder="Enter Your Name"
        name="username"/>

         <input type="email"
         className="form-control"
         required autoComplete="false" 
         placeholder="Enter Your email"
         name="email"/>

         <textarea 
         className="form-control"
         required autoComplete="false" 
         rows = "10"
         placeholder="Enter Your message"
         name="message"/>

        <button type="submit" value= "send">Send</button>
      </form>
    </div>
    </section> 
  )
}