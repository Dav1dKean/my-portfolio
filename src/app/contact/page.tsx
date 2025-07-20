'use client';

import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Me | David Vasquez</title>
      </Head>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
          <p className="text-lg text-center mb-10">
            I would love to hear from you. Please fill out the form below, and I will respond as soon as I can.
          </p>

          <form className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={5}
                className="w-full p-3 border rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded text-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
