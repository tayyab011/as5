import MasterLayout from "../MasterLayout/MasterLayout";
import img from '../assets/images/SAVE_20240227_242447-removebg-preview-enhanced.png'
import Team from "../component/Team";

const AboutPage = () => {
    
    return (
      <MasterLayout>
        <section className="bg-gray-500 py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              I am a passionate developer with a love for creating dynamic and
              responsive web applications. With a strong foundation in frontend
              and backend technologies, I aim to build products that enhance
              user experience and solve real-world problems.
            </p>
          </div>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
            <img
              src={img}
              alt="About"
              className="w-64 h-64 object-cover rounded-2xl shadow-lg"
            />
            <div className="max-w-lg text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                My Mission
              </h3>
              <p className="text-gray-600 text-lg">
                My mission is to create scalable and maintainable applications
                with clean code and intuitive user interfaces. I believe in
                continuous learning and adapting to new technologies to stay
                ahead in the industry.
              </p>
            </div>
          </div>
       <Team/>
        </section>

      </MasterLayout>
    );
};

export default AboutPage;