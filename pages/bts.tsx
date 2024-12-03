import Navbar from '../app/components/Navbar'; // Adjust the import path if needed
import 'tailwindcss/tailwind.css'; // This should be in your globals or _app.js


const About = () => {
  return (
    <div>
      {/* Add the Navbar here */}
      <Navbar />
      
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Blog</h1>
        <p className="text-lg text-center mb-8">
          Welcome to our blog, where we share insights on business growth, data analysis, and more.
        </p>
        
        {/* Your blog content */}
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold">Blog Post 1</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac eros nec ligula dictum fermentum.</p>
          </div>
          
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold">Blog Post 2</h2>
            <p className="text-gray-600">Donec et sapien justo. Integer tincidunt gravida augue non vulputate.</p>
          </div>
          
          {/* Add more blog posts as needed */}
        </div>
      </div>
    </div>
  );
};

export default About;