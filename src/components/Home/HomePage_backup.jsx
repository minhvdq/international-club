import { useEffect, useState } from 'react';
import './style.css';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedExec, setSelectedExec] = useState(null);
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    studentStatus: '',
    message: ''
  });

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

  // Events data
  const allEvents = [
    {
      id: 1,
      title: "International Food Festival",
      date: "March 15, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Campus Center Ballroom",
      description: "Experience flavors from around the world as our members share traditional dishes from their home countries."
    },
    {
      id: 2,
      title: "Cultural Presentation Night",
      date: "March 22, 2025",
      time: "6:30 PM - 8:00 PM",
      location: "Science Center Auditorium",
      description: "Learn about different cultures through presentations, music, and traditional performances by our international students."
    },
    {
      id: 3,
      title: "International Students Workshop",
      date: "April 5, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "International Student Services",
      description: "Essential resources and support for international students, covering visa procedures, academic guidance, and campus life."
    },
    {
      id: 4,
      title: "Global Career Fair",
      date: "April 12, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Campus Center",
      description: "Connect with international companies and organizations offering career opportunities around the world."
    },
    {
      id: 5,
      title: "Spring Cultural Festival",
      date: "April 20, 2025",
      time: "12:00 PM - 6:00 PM",
      location: "Quad Area",
      description: "Celebrate spring with traditional music, dance, art, and food from various cultures."
    },
    {
      id: 6,
      title: "Study Abroad Information Session",
      date: "May 3, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Breidenbaugh Hall",
      description: "Learn about study abroad opportunities and hear from students who have studied internationally."
    }
  ];

  const displayedEvents = showAllEvents ? allEvents : allEvents.slice(0, 3);

  // Image modal handlers
  const openImageModal = (imageSrc, imageAlt) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Executive modal handlers
  const openExecModal = (exec) => {
    setSelectedExec(exec);
  };

  const closeExecModal = () => {
    setSelectedExec(null);
  };

  // Events handlers
  const toggleShowAllEvents = () => {
    setShowAllEvents(!showAllEvents);
  };

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = `Message from ${formData.firstName} ${formData.lastName}`;
    const body = `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Student Status: ${formData.studentStatus}

Message:
${formData.message}`;
    
    const mailtoLink = `mailto:amatte01@gettysburg.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      studentStatus: '',
      message: ''
    });
    
    // Show success message
    alert('Email client opened! Your message has been prepared.');
  };

  return (
    <div className="bg-white text-gray-900 font-body">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-display font-bold text-orange-600">
                Gettysburg College
              </span>
              <span className="ml-2 text-lg font-modern text-gray-600">International Club</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="font-modern text-gray-700 hover:text-orange-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="font-modern text-gray-700 hover:text-orange-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('events')} className="font-modern text-gray-700 hover:text-orange-600 transition-colors">
                Events
              </button>
              <button onClick={() => scrollToSection('gallery')} className="font-modern text-gray-700 hover:text-orange-600 transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollToSection('executives')} className="font-modern text-gray-700 hover:text-orange-600 transition-colors">
                Executive Board
              </button>
              <button onClick={() => scrollToSection('contact')} className="font-modern text-gray-700 hover:text-orange-600 transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                <button onClick={() => scrollToSection('home')} className="block px-3 py-2 font-modern text-gray-700 hover:text-orange-600">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 font-modern text-gray-700 hover:text-orange-600">
                  About
                </button>
                <button onClick={() => scrollToSection('events')} className="block px-3 py-2 font-modern text-gray-700 hover:text-orange-600">
                  Events
                </button>
                <button onClick={() => scrollToSection('gallery')} className="block px-3 py-2 font-modern text-gray-700 hover:text-orange-600">
                  Gallery
                </button>
                <button onClick={() => scrollToSection('executives')} className="block px-3 py-2 font-modern text-gray-700 hover:text-orange-600">
                  Executive Board
                </button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 font-modern text-gray-700 hover:text-orange-600">
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6">
              Welcome to the<br />
              <span className="text-orange-600">International Club</span>
            </h1>
            <p className="text-xl md:text-2xl font-elegant text-gray-600 mb-8 max-w-3xl mx-auto">
              Celebrating diversity, fostering global understanding, and building lasting friendships 
              at Gettysburg College
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-modern font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg text-lg font-modern font-semibold transition-all duration-300"
              >
                Join Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              About <span className="text-orange-600">Us</span>
            </h2>
            <p className="text-xl font-elegant text-gray-600 max-w-3xl mx-auto">
              The International Club at Gettysburg College has been a vibrant community since 1995, 
              bringing together students from around the world to share cultures, create memories, 
              and build lifelong connections.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">Our Mission</h3>
              <p className="font-body text-gray-600 mb-6">
                We are dedicated to creating an inclusive environment where international and domestic students 
                can come together to explore different cultures, share experiences, 
                and organize events that celebrate the rich diversity of our global community. Whether you're 
                looking to learn about new cultures, make friends from different countries, or simply have fun, 
                our club welcomes everyone with open arms.
              </p>
              <p className="font-body text-gray-600">
                Through cultural events, educational workshops, social gatherings, and community service, 
                we foster understanding and friendship across borders, making Gettysburg College a truly 
                global campus experience.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/aboutus.jpg" 
                alt="International Club members" 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img className="w-16 h-16 mx-auto mb-4 opacity-80" src="/images/user.png" alt="Officers icon" />
              <div className="text-3xl font-display font-bold text-orange-600 mb-2">7</div>
              <div className="font-modern text-gray-600">Executive Officers</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img className="w-16 h-16 mx-auto mb-4 opacity-80" src="/images/people.png" alt="Members icon" />
              <div className="text-3xl font-display font-bold text-orange-600 mb-2">217</div>
              <div className="font-modern text-gray-600">Active Members</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img className="w-16 h-16 mx-auto mb-4 opacity-80" src="/images/calendar.png" alt="Events icon" />
              <div className="text-3xl font-display font-bold text-orange-600 mb-2">66</div>
              <div className="font-modern text-gray-600">Events This Year</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img className="w-16 h-16 mx-auto mb-4 opacity-80" src="/images/world.png" alt="Countries icon" />
              <div className="text-3xl font-display font-bold text-orange-600 mb-2">100+</div>
              <div className="font-modern text-gray-600">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Upcoming <span className="text-orange-600">Events</span>
            </h2>
            <p className="text-xl font-elegant text-gray-600 max-w-2xl mx-auto">
              Join us for exciting cultural events, educational workshops, and community gatherings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-orange-600 text-white p-4">
                  <div className="text-sm font-modern font-semibold">{event.date}</div>
                  <div className="text-xs opacity-90 font-body">{event.time}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="font-body text-gray-600 mb-4">
                    {event.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                    </svg>
                    <span className="font-modern">{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={toggleShowAllEvents}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-modern font-semibold transition-colors"
            >
              {showAllEvents ? 'Show Less Events' : 'View All Events'}
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Event <span className="text-orange-600">Gallery</span>
            </h2>
            <p className="text-xl font-elegant text-gray-600 max-w-2xl mx-auto">
              Memories from our cultural celebrations, workshops, and community events
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/images/aboutus.jpg" 
                alt="Club event" 
                className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer" 
                onClick={() => openImageModal('/images/aboutus.jpg', 'Club event')}
              />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/images/main.png" 
                alt="Cultural celebration" 
                className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer" 
                onClick={() => openImageModal('/images/main.png', 'Cultural celebration')}
              />
            </div>
            <div 
              className="aspect-square bg-orange-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-orange-300 transition-colors"
              onClick={() => openImageModal('/images/placeholder-food.jpg', 'Food Festival 2024')}
            >
              <span className="text-orange-600 font-modern font-semibold">Food Festival 2024</span>
            </div>
            <div 
              className="aspect-square bg-blue-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-300 transition-colors"
              onClick={() => openImageModal('/images/placeholder-cultural.jpg', 'Cultural Night')}
            >
              <span className="text-blue-600 font-modern font-semibold">Cultural Night</span>
            </div>
            <div 
              className="aspect-square bg-green-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-green-300 transition-colors"
              onClick={() => openImageModal('/images/placeholder-welcome.jpg', 'Welcome Event')}
            >
              <span className="text-green-600 font-modern font-semibold">Welcome Event</span>
            </div>
            <div 
              className="aspect-square bg-purple-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-purple-300 transition-colors"
              onClick={() => openImageModal('/images/placeholder-workshop.jpg', 'Workshop Series')}
            >
              <span className="text-purple-600 font-modern font-semibold">Workshop Series</span>
            </div>
            <div 
              className="aspect-square bg-red-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-red-300 transition-colors"
              onClick={() => openImageModal('/images/placeholder-service.jpg', 'Community Service')}
            >
              <span className="text-red-600 font-modern font-semibold">Community Service</span>
            </div>
            <div 
              className="aspect-square bg-yellow-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-yellow-300 transition-colors"
              onClick={() => openImageModal('/images/placeholder-graduation.jpg', 'Graduation Celebration')}
            >
              <span className="text-yellow-600 font-modern font-semibold">Graduation Celebration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Board Section */}
      <section id="executives" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Executive <span className="text-orange-600">Board</span>
            </h2>
            <p className="text-xl font-elegant text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated leaders who make our international community thrive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", position: "President", country: "USA" },
              { name: "Raj Patel", position: "Vice President", country: "India" },
              { name: "Maria Garcia", position: "Secretary", country: "Spain" },
              { name: "Chen Wei", position: "Treasurer", country: "China" },
              { name: "Ahmed Hassan", position: "Events Coordinator", country: "Egypt" },
              { name: "Sophie Dubois", position: "Social Media Manager", country: "France" },
              { name: "Yuki Tanaka", position: "Cultural Liaison", country: "Japan" }
            ].map((exec, index) => (
              <div 
                key={index} 
                className="text-center cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
                onClick={() => openExecModal(exec)}
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-modern font-semibold text-gray-900">{exec.name}</h3>
                <p className="text-orange-600 font-body font-medium">{exec.position}</p>
                <p className="text-sm font-body text-gray-500">{exec.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Get In <span className="text-orange-600">Touch</span>
            </h2>
            <p className="text-xl font-elegant text-gray-600 max-w-2xl mx-auto">
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
                    <h3 className="text-lg font-modern font-semibold text-gray-900">Email Us</h3>
                    <p className="font-body text-gray-600">amatte01@gettysburg.edu</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-modern font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-modern font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-modern font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-modern font-medium text-gray-700 mb-2">Student Status</label>
                  <select 
                    name="studentStatus"
                    value={formData.studentStatus}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select your status</option>
                    <option value="International Student">International Student</option>
                    <option value="Domestic Student">Domestic Student</option>
                    <option value="Faculty/Staff">Faculty/Staff</option>
                    <option value="Alumni">Alumni</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-modern font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-modern font-semibold transition-colors">
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
              <h3 className="text-xl font-display font-semibold mb-4">International Club</h3>
              <p className="font-body text-gray-300 mb-4">
                Building bridges between cultures at Gettysburg College since 1995.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/gburg_intlclub/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                  <img src="/images/instagram.png" alt="Instagram" className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-display font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 font-body text-gray-300">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-orange-500 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('events')} className="hover:text-orange-500 transition-colors">Events</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="hover:text-orange-500 transition-colors">Gallery</button></li>
                <li><button onClick={() => scrollToSection('executives')} className="hover:text-orange-500 transition-colors">Executive Board</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-orange-500 transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-display font-semibold mb-4">Contact Info</h3>
              <div className="font-body text-gray-300 space-y-2">
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

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeImageModal}>
          <div className="max-w-4xl max-h-4xl p-4">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Executive Modal */}
      {selectedExec && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeExecModal}>
          <div className="bg-white rounded-lg max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-display font-bold text-gray-900">{selectedExec.name}</h3>
              <button 
                onClick={closeExecModal}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                ×
              </button>
            </div>
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-lg font-modern font-semibold text-orange-600 mb-1">{selectedExec.position}</p>
              <p className="text-gray-600 font-body">From {selectedExec.country}</p>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-modern font-semibold text-gray-900 mb-1">Bio:</h4>
                <p className="font-body text-gray-600 text-sm">
                  [Bio information will be added here]
                </p>
              </div>
              <div>
                <h4 className="font-modern font-semibold text-gray-900 mb-1">Major:</h4>
                <p className="font-body text-gray-600 text-sm">
                  [Major information will be added here]
                </p>
              </div>
              <div>
                <h4 className="font-modern font-semibold text-gray-900 mb-1">Year:</h4>
                <p className="font-body text-gray-600 text-sm">
                  [Year information will be added here]
                </p>
              </div>
              <div>
                <h4 className="font-modern font-semibold text-gray-900 mb-1">Contact:</h4>
                <p className="font-body text-gray-600 text-sm">
                  [Contact information will be added here]
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

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
