import { IoMail } from "react-icons/io5";
import { SectionTitle } from "../components";
import emailjs from 'emailjs-com';
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { ThemeContext } from "../contexts/ToggleMode";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const PUBLIC_KEY = "CYTVLctF5GTN9kvSP";
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        event.target,
        PUBLIC_KEY
      );
      toast.success('Email sent successfully');
    } catch (error) {
      toast.error("Error sending email - Use the 'email me button'");
    }
  };

  return (
    <section className={`${darkMode ? 'text-gray-200' : ''} pt-10 pb-16 md:pb-80 align-element`}>
      <SectionTitle text='contact me' />
      <div>
        <a 
          href="mailto:kingsley.omiy@gmail.com" 
          className="flex items-center gap-x-2 text-xl pt-5 animate-pulse w-fit"
        >
          Email me <IoMail title="email"/>
        </a>
        <p className="pt-2">or message me here:</p>
        <form onSubmit={handleSubmit} className="py-5 mt-5 md:align-element md:w-9/12">
          <div className="relative mb-3">
            <label htmlFor="from_name"></label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              id="from_name"
              className={`outline-none placeholder:text-slate-50 py-3 px-4 ps-11 block w-full border-transparent ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-blue-500 text-slate-50'} rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none`} 
              placeholder="Enter name" 
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
              <svg className="flex-shrink-0 size-4 text-slate-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>

          <div className="relative mb-3">
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              id="from_email"
              className={`outline-none placeholder:text-slate-50 py-3 px-4 ps-11 block w-full border-transparent ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-blue-500 text-slate-50'} rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none`} 
              placeholder="Enter email"
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
              <svg className="flex-shrink-0 size-4 text-slate-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-white">Your message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`outline-none py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-blue-500 text-slate-50'} placeholder:text-slate-50`} 
              rows="3" 
              placeholder="Enter message..." 
            />
          </div>

          <button type="submit" className="bg-green-500 hover:bg-green-400 w-full text-slate-50 p-2 rounded-md">Submit</button>          
        </form>
      </div>
    </section>
  )
}

export default Contact