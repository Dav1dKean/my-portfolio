// src/projects/favorite-foods/page.tsx
'use client';

import Head from 'next/head';
import Image from 'next/image';

export default function FavoriteFoods() {
  return (
    <>
      <Head>
        <title>Favorite Foods | David Vasquez</title>
      </Head>

      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-2">A Culinary Journey</h1>
          <p className="text-lg">Exploring my favorite foods from around the world</p>
        </div>
      </section>

      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-white">My Top Picks</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Pizza',
                image: '/pizza.jpg',
                alt: 'A slice of pizza',
                description: 'The perfect combination of cheese, sauce, and crust. A classic comfort food that never disappoints.',
              },
              {
                title: 'Ice Cream',
                image: '/icecream.jpeg',
                alt: 'Colorful scoops of ice cream in a cone',
                description: 'Creamy, sweet, and available in endless flavors. The best treat for a hot summer day (or any day!).',
              },
              {
                title: 'Peruvian Food',
                image: '/jalea.jpg',
                alt: 'A plate of Peruvian Jalea',
                description: 'Known for its bold flavors and fresh ingredients, like the crispy seafood dish Jalea. A true culinary adventure.',
              },
              {
                title: 'Salvadorean Food',
                image: '/pupusas.jpg',
                alt: 'Salvadorean pupusas with curtido',
                description: 'Famous for pupusas! These thick, handmade corn tortillas are filled with cheese, beans, or meat.',
              },
            ].map((food, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <Image src={food.image} alt={food.alt} width={400} height={300} className="object-cover w-full h-48" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{food.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{food.description}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="my-12" />

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">What is Your Favorite?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let me know your favorite food or send a recipe!
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">Primary Light</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Link</button>
              <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">Info Outlined</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-full">Success Rounded</button>
            </div>
          </div>

          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-white mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="e.g. John Doe"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-white mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                placeholder="e.g. hello@example.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-white mb-2">Your Message</label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Tell me about your favorite food..."
                rows={4}
              />
            </div>

            <div className="text-center">
              <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded text-lg hover:bg-blue-800">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300">
        <p>
          <strong>My Favorite Foods</strong> by David Vasquez. Inspired by Bulma design.
        </p>
      </footer>
    </>
  );
}
