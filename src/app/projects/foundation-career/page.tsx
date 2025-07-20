'use client';

import Head from 'next/head';

export default function FoundationCareerPage() {
  return (
    <>
      <Head>
        <title>My Future in Technology</title>
      </Head>

      <div className="bg-gray-100 min-h-screen font-sans">
        <div className="bg-blue-900 text-white py-16 text-center">
          <h1 className="text-4xl font-bold">Charting My Course in the Tech World</h1>
          <p className="text-xl mt-2">
            Exploring future career paths in software development, network engineering, and beyond.
          </p>
        </div>

        <div className="max-w-6xl mx-auto py-12 px-4 space-y-16">
          {/* Career Aspirations */}
          <section id="aspirations">
            <h2 className="text-2xl font-bold text-center mb-6">Career Aspirations</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Software Engineer at Google',
                  description:
                    'My goal is to work on large-scale systems and innovative products that impact millions of users. I am passionate about problem-solving and clean code.',
                  image: '/aspire-google.jpg',
                },
                {
                  title: 'Network Engineer at Verizon',
                  description:
                    'I am fascinated by the infrastructure that powers our digital world. A role in network engineering would allow me to build and maintain robust, high-speed networks.',
                  image: '/aspire-verizon.jpg',
                },
                {
                  title: 'IT Specialist at a University',
                  description:
                    'Supporting the academic mission by ensuring faculty and students have reliable technology is a rewarding goal. I enjoy helping others and solving tech challenges.',
                  image: '/aspire-university.jpg',
                },
              ].map((card, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                  <div className="p-4 bg-black bg-opacity-70 text-white">
                    <h4 className="text-lg font-semibold">{card.title}</h4>
                    <p className="mt-2">{card.description}</p>
                    <a
                      href="#"
                      className="text-blue-300 font-medium mt-3 inline-block hover:underline"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills">
            <h2 className="text-2xl font-bold text-center mb-6">My Core Competencies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Technical Skills</h4>
                <div className="mb-2">
                  <label>Python</label>
                  <div className="w-full bg-gray-300 h-4 rounded">
                    <div className="bg-blue-600 h-4 rounded" style={{ width: '90%' }} />
                  </div>
                </div>
                <div className="mb-2">
                  <label>JavaScript</label>
                  <div className="w-full bg-gray-300 h-4 rounded">
                    <div className="bg-green-500 h-4 rounded" style={{ width: '80%' }} />
                  </div>
                </div>
                <div>
                  <label>Networking</label>
                  <div className="w-full bg-gray-300 h-4 rounded">
                    <div className="bg-yellow-500 h-4 rounded" style={{ width: '75%' }} />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Let's Connect</h4>
                <p className="mb-4">
                  Interested in my journey or have advice to share? I would love to hear from you.
                </p>
                <div className="space-x-2">
                  <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Contact Me
                  </a>
                  <a href="#" className="bg-green-500 text-white px-4 py-2 rounded">
                    View Resume
                  </a>
                  <a href="#" className="bg-red-500 text-white px-4 py-2 rounded">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact">
            <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
            <form className="max-w-2xl mx-auto space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  className="w-full px-4 py-2 border rounded"
                  type="text"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  className="w-full px-4 py-2 border rounded"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded"
                  rows={4}
                  placeholder="Your message..."
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
