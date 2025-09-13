import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const textElements = document.querySelectorAll('.half'); // Select all elements with class 'half'
    textElements.forEach(textElement => {
      const text = textElement.textContent;
      const middle = Math.floor(text.length / 2);
      const firstHalf = text.substring(0, middle);
      const secondHalf = text.substring(middle);

      textElement.innerHTML = ''; // Clear the original text

      const span1 = document.createElement('span');
      span1.textContent = firstHalf;
      span1.style.color = 'orange';

      const span2 = document.createElement('span');
      span2.textContent = secondHalf;
      span2.style.color = 'white';

      textElement.appendChild(span1);
      textElement.appendChild(span2);
    });
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="h-50 flex justify-between items-center p-6 text-lg">
        <div className="half font-[Academy_Engraved_LET] text-[70px] font-bold text-xl">
          Gettysburg College
        </div>
        <div className="space-x-30">
          <a href="#" className="px-10 py-5 half font-[Academy_Engraved_LET] text-[40px] ">BurgBurst</a>
          <a href="#" className="px-10 py-5 half font-[Academy_Engraved_LET] text-[40px] ">Events</a>
          <a href="#" className="px-10 py-5 half font-[Academy_Engraved_LET] text-[40px] ">Gallery</a>
          <a href="#" className="px-10 py-5 half font-[Academy_Engraved_LET] text-[40px] mr-20">Execs</a>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative text-center h-300">
        <img src="/images/main.png" alt="Flags Performance" className="w-full h-[80vh] object-cover opacity-40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="half font-light px-30 py-10 tracking-wide font-[Academy_Engraved_LET] text-[100px]">
            International Club
          </h1>
          <div className="absolute border-1 border-white w-[1050px] h-[239px] top-[42%] left-[50.5%] -translate-x-1/2 -translate-y-1/2 z-0"></div>
          <div className="absolute border-1 border-white w-[1050px] h-[239px] top-[39%] left-[49.5%] -translate-x-1/2 -translate-y-1/2 z-0"></div>

          <p className="all half font-[Academy_Engraved_LET] mt-4 text-xl text-[60px]">Become part of our vibrant community.</p>
          <button className="w-60 h-20 all mt-6 px-6 py-3 bg-white text-black font-[Academy_Engraved_LET] text-[40px] font-semibold rounded-full hover:bg-orange-300">
            JOIN US
          </button>
        </div>
      </div>

      {/* About Us */}
      <div className="bg-gray-100 text-black py-16 px-8">
        <div className=" mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-orange-600 mb-4 font-[Academy_Engraved_LET] text-[100px]">About Us</h2>
            <p className="text-lg leading-relaxed font-[Academy_Engraved_LET] text-[40px]">
              The International Club seeks to promote a multicultural exchange of perspectives between international students and all of the students, faculty, administrators, staff, and members of the local Gettysburg College community. It encourages the welcome of new international students with as much support as possible, including the creation and strengthening of bonds between students and the school's environment.
            </p>
          </div>
          <img src="/images/aboutus.jpg" alt="Club Group Photo" className="rounded-lg shadow-lg w-full" />
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 text-center gap-8 font-[Academy_Engraved_LET] text-[100px]">
          <div className="flex flex-col items-center">
            <img className="w-32 max-w-full aspect-square object-cover" src="/images/user.png" />
            <div className="mt-4 text-6xl font-bold">7</div>
            <div className="mt-1 text-6xl">Officers</div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-32 max-w-full aspect-square object-cover" src="/images/people.png" />
            <div className="mt-4 text-6xl font-bold">217</div>
            <div className="mt-1 text-6xl">Members</div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-32 max-w-full aspect-square object-cover" src="/images/calendar.png" />
            <div className="mt-4 text-6xl font-bold">66</div>
            <div className="mt-1 text-6xl">Events</div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-32 max-w-full aspect-square object-cover" src="/images/world.png" />
            <div className="mt-4 text-6xl font-bold">100+</div>
            <div className="mt-1 text-6xl">Countries</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 text-center space-y-6">
        <button className="px-6 py-3 border-2 border-white mt-10 hover:bg-white hover:text-black font-[Academy_Engraved_LET] transition text-6xl">
          Click here to Collab!
        </button>
        <img class="flex justify-center w-32 max-w-full aspect-square object-cover" src="/images/instagram.png"/>
        <div>
          <a href="#" className=" hover:underline font-[Academy_Engraved_LET] text-3xl">Privacy Policy</a>
        </div>
        <div className=" text-gray-400 font-[Academy_Engraved_LET] text-3xl">© 2025 International Club</div>
      </footer>
    </div>
  );
}
