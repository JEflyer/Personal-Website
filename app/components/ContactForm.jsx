import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically handle the form submission,
    // such as sending the data to a server or an email API.
    console.log(formData);
    // Reset form after submission or handle as needed
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    // Implement a success message or redirection as needed
  };

  return (
    <form className="w-full max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="Jane Doe" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="email@example.com" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="subject">
            Subject
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="subject" type="text" placeholder="Your Subject" name="subject" value={formData.subject} onChange={handleChange} />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" placeholder="Your message" name="message" rows="5" value={formData.message} onChange={handleChange}></textarea>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="shadow bg-sunset-gold hover:bg-sunset-gold-dark focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
