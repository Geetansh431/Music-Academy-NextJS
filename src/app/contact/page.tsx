import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-6">
      <div className="w-full max-w-4xl bg-gray-900 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Contact Us</h1>
        <p className="text-gray-400 text-center mb-8">
          Have any questions or need help? Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="mt-10 text-center">
        <p className="text-gray-400">You can also reach us at:</p>
        <p className="text-blue-400 font-medium">contact@example.com</p>
      </div>
    </div>
  );
};

export default ContactPage;
