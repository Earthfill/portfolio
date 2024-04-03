import { IoMail } from "react-icons/io5"
import { SectionTitle } from "../components"

const Contact = () => {
  return (
    <section className="pt-10 pb-16 md:pb-80 align-element">
      <SectionTitle text='contact me' />
      <div>
        <a 
          href="mailto:kingsley.omiy@gmail.com" 
          className="flex items-center gap-x-2 text-xl pt-5 animate-pulse w-fit"
        >
          Email me <IoMail title="email"/>
        </a>
        <p className="pt-2">or message me here:</p>
        <form className="py-5 mt-5 md:align-element md:w-9/12">
          <div className="relative mb-3">
            <input 
              type="email" 
              className="outline-none placeholder:text-slate-50 py-3 px-4 ps-11 block w-full border-transparent bg-blue-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600 text-slate-50" 
              placeholder="Enter name" 
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
              <svg className="flex-shrink-0 size-4 text-slate-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-2 dark:text-white">Your message</label>
            <textarea 
              className="outline-none py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 bg-blue-500 text-slate-50 placeholder:text-slate-50" 
              rows="3" 
              placeholder="Enter message..." />
          </div>

          <button type="submit" className="bg-green-500 w-full text-slate-50 p-2 rounded-md">Submit</button>          
        </form>
      </div>
    </section>
  )
}

export default Contact