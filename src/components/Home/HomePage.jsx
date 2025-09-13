import { useEffect, useState } from 'react';
import './style.css';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-orange-600">
                Gettysburg College
              </span>
              <span className="ml-2 text-lg text-gray-600">International Club</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('events')} className="text-gray-700 hover:text-orange-600 transition-colors">
                Events
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-orange-600 transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollToSection('executives')} className="text-gray-700 hover:text-orange-600 transition-colors">
                Executives
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-orange-600">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-orange-600">
                  About
                </button>
                <button onClick={() => scrollToSection('events')} className="block px-3 py-2 text-gray-700 hover:text-orange-600">
                  Events
                </button>
                <button onClick={() => scrollToSection('gallery')} className="block px-3 py-2 text-gray-700 hover:text-orange-600">
                  Gallery
                </button>
                <button onClick={() => scrollToSection('executives')} className="block px-3 py-2 text-gray-700 hover:text-orange-600">
                  Executives
                </button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-orange-600">
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-16 h-screen">
        <img 
          src="/images/main.png" 
          alt="International flags representing diversity" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-orange-500">International</span> Club
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Promoting multicultural exchange and building bridges between international and local students at Gettysburg College
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg"
          >
            Join Our Community
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About <span className="text-orange-600">Our Club</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The International Club at Gettysburg College serves as a vibrant bridge connecting cultures, 
                fostering understanding, and creating lasting friendships among students from around the world.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We promote multicultural exchange, support international students in their academic journey, 
                and organize events that celebrate the rich diversity of our global community. Whether you're 
                an international student looking for a home away from home or a local student eager to explore 
                different cultures, our club welcomes you with open arms.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Cultural exchange programs and workshops</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">International food festivals and celebrations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Academic and social support network</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Community service and outreach initiatives</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/images/aboutus.jpg" 
                alt="International Club members at a cultural event" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img className="w-16 h-16 mx-auto mb-4 opacity-80" src="/images/user.png" alt="Officers icon" />
              <div className="text-3xl font-bold text-orange-600 mb-2">7</div>
              <div className="text-gray-600">Executive Officers</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img className="w-16 h-16 mx-auto mb-4 opacity-80" src="/images/people.png" alt="Members icon" />
              <div className="text-3xl font-bold text-orange-600 mb-2">217</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img className="w-16 h-16 mx-auto mb-4 opacity-80" src="/images/calendar.png" alt="Events icon" />
              <div className="text-3xl font-bold text-orange-600 mb-2">66</div>
              <div className="text-gray-600">Events This Year</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img className="w-16 h-16 mx-auto mb-4 opacity-80" src="/images/world.png" alt="Countries icon" />
              <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
              <div className="text-gray-600">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Upcoming <span className="text-orange-600">Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us for exciting cultural events, educational workshops, and community gatherings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-orange-600 text-white p-4">
                <div className="text-sm font-semibold">March 15, 2025</div>
                <div className="text-xs opacity-90">7:00 PM - 9:00 PM</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">International Food Festival</h3>
                <p className="text-gray-600 mb-4">
                  Experience flavors from around the world as our members share traditional dishes from their home countries.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Campus Center Ballroom
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-orange-600 text-white p-4">
                <div className="text-sm font-semibold">March 22, 2025</div>
                <div className="text-xs opacity-90">6:30 PM - 8:00 PM</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Presentation Night</h3>
                <p className="text-gray-600 mb-4">
                  Learn about different cultures through presentations, music, and traditional performances by our international students.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Science Center Auditorium
                </div>
              </div>
            </div>

            {/* Event 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-orange-600 text-white p-4">
                <div className="text-sm font-semibold">April 5, 2025</div>
                <div className="text-xs opacity-90">2:00 PM - 4:00 PM</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">International Students Workshop</h3>
                <p className="text-gray-600 mb-4">
                  Essential resources and support for international students, covering visa procedures, academic guidance, and campus life.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  International Student Services
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Event <span className="text-orange-600">Gallery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Memories from our cultural celebrations, workshops, and community events
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Gallery images - using placeholder since we only have a few images */}
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img src="/images/aboutus.jpg" alt="Club event" className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer" />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img src="/images/main.png" alt="Cultural celebration" className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer" />
            </div>
            <div className="aspect-square bg-orange-200 rounded-lg flex items-center justify-center">
              <span className="text-orange-600 font-semibold">Food Festival 2024</span>
            </div>
            <div className="aspect-square bg-blue-200 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-semibold">Cultural Night</span>
            </div>
            <div className="aspect-square bg-green-200 rounded-lg flex items-center justify-center">
              <span className="text-green-600 font-semibold">Welcome Event</span>
            </div>
            <div className="aspect-square bg-purple-200 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-semibold">Workshop Series</span>
            </div>
            <div className="aspect-square bg-red-200 rounded-lg flex items-center justify-center">
              <span className="text-red-600 font-semibold">Community Service</span>
            </div>
            <div className="aspect-square bg-yellow-200 rounded-lg flex items-center justify-center">
              <span className="text-yellow-600 font-semibold">Graduation Celebration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Board Section */}
      <section id="executives" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Executive <span className="text-orange-600">Board</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated leaders who make our international community thrive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Executive positions */}
            {[
              { name: "Sarah Johnson", position: "President", country: "USA" },
              { name: "Raj Patel", position: "Vice President", country: "India" },
              { name: "Maria Garcia", position: "Secretary", country: "Spain" },
              { name: "Chen Wei", position: "Treasurer", country: "China" },
              { name: "Ahmed Hassan", position: "Events Coordinator", country: "Egypt" },
              { name: "Sophie Dubois", position: "Social Media Manager", country: "France" },
              { name: "Yuki Tanaka", position: "Cultural Liaison", country: "Japan" }
            ].map((exec, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{exec.name}</h3>
                <p className="text-orange-600 font-medium">{exec.position}</p>
                <p className="text-sm text-gray-500">{exec.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In <span className="text-orange-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to join our international community? We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">internationalclub@gettysburg.edu</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">Campus Center, Room 202<br />Gettysburg College<br />Gettysburg, PA 17325</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 2:00 PM - 5:00 PM<br />Weekends: By appointment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student Status</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Select your status</option>
                    <option>International Student</option>
                    <option>Domestic Student</option>
                    <option>Faculty/Staff</option>
                    <option>Alumni</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">International Club</h3>
              <p className="text-gray-300 mb-4">
                Building bridges between cultures at Gettysburg College since 1995.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-orange-500 transition-colors">
                  <img src="/images/instagram.png" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-orange-500 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('events')} className="hover:text-orange-500 transition-colors">Events</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="hover:text-orange-500 transition-colors">Gallery</button></li>
                <li><button onClick={() => scrollToSection('executives')} className="hover:text-orange-500 transition-colors">Executive Board</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-orange-500 transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <div className="text-gray-300 space-y-2">
                <p>internationalclub@gettysburg.edu</p>
                <p>Campus Center, Room 202</p>
                <p>Gettysburg College</p>
                <p>Gettysburg, PA 17325</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Gettysburg College International Club. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}
