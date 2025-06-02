// import React from 'react'

// const about = () => {
//   return (
//     <div>
//       this is a about page
//     </div>
//   )
// }

// export const metadata = {
//   title: 'About-Learn more for Website',
//   description: 'About-this page to Learn for me and Website for youser for more information',
// }

// export default about




import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen text-white ">
      {/* Hero Section */}
      <section className=" py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">About Us</h1>
          <p className="text-lg md:text-xl">
            Creating amazing digital experiences for our users
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Who We Are
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              We are a passionate team dedicated to building innovative solutions that make a difference. 
              Our focus is on creating user-friendly experiences that solve real-world problems.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Founded with the vision of making technology accessible to everyone, we continue to 
              grow and evolve while staying true to our core values of simplicity and excellence.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            What We Do
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl font-bold">💻</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600 text-sm">
                Building modern, responsive websites and web applications
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl font-bold">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Mobile Apps</h3>
              <p className="text-gray-600 text-sm">
                Creating intuitive mobile applications for iOS and Android
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center sm:col-span-2 lg:col-span-1">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-xl font-bold">🎨</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600 text-sm">
                Designing beautiful and user-friendly interfaces
              </p>
            </div>
          </div>
        </section>

       
      </div>
    </div>
  )
}

export const metadata = {
  title: 'About Us - Learn More About Our Company',
  description: 'Learn about our company, what we do, and how we can help you with your digital needs.',
  keywords: 'about us, company, web development, mobile apps, design',
}

export default About




