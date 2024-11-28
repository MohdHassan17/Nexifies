import "./App.css";

// Library Import
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 

//Header & Footer Import
import Header from "./components/Header";
import Footer from "./components/Footer";

// Utils Import
import ScrollToTop from "./utils/ScrollToTop";

//Page Imports
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Testimonial from './pages/Testimonial'
import Career from './pages/Career'
import ContactPage from './pages/ContactPage'
import ServicesPage from "./pages/ServicesPage";



// Image Imports

//Services Images
import ChatBotImg from "./images/ChatBot.jpg";
import CyberImg from "./images/Cyber.jpg";
import RPAImg from "./images/RPAImg.jpg";
import FinanceImg from "./images/finance-service.jpg";
import SupplyImg from "./images/supply-chain-service.jpg";
import AIImg from "./images/AI-service.png";
import { useEffect } from "react";





function App() {

  useEffect(() => {
    // Select all section elements and add the 'data-aos' attribute
    const sections = document.querySelectorAll('section');
    sections.forEach((section,index) => {
      section.setAttribute('data-aos', 'fade-up');
     
    });

    // Initialize AOS with the "once" option
    AOS.init({
      once: true, // Ensures animation happens only once
    });
  }, []);



  const servicePages = [
    {
      id: 0,
      link: "cyber-security",
      name: "Cyber Security",
      img: `${CyberImg}`,
      text: `In today’s digital age, where data drives every operation, protecting your business from cyber threats is more critical than ever. At Nexifies, we specialize in premier cybersecurity solutions designed to secure your digital world and empower your business to thrive.

Our advanced cybersecurity systems leverage cutting-edge technologies, including artificial intelligence and machine learning, to fortify your defenses against emerging and evolving threats. By implementing a proactive, multi-layered approach, we ensure your data remains safe, allowing you to focus on what matters most—growing your business.

At Nexifies, we stay one step ahead of cyber threats by providing early detection of potential risks and immediate responses to security incidents. Our solutions are designed to safeguard your data, ensuring its security, accuracy, and availability, no matter what challenges arise.

Choosing Nexifies means protecting more than just your data—it’s about securing the future of your business. With our expertise and constant vigilance, you can enjoy peace of mind knowing your digital assets are protected, freeing you to focus on innovation and growth without the worry of cyber threats.`,
    },
    {
      id: 1,
      link: "robotic-process-automation",
      name: "Robotic Process Automation",
      img: `${RPAImg}`,
      text: `Have you ever wondered what it’s like to have a team that never gets tired? Discover the incredible efficiency of our Robotic Process Automation (RPA) solutions. By automating repetitive tasks, our RPA technology transforms task execution, allowing your team to focus on high-impact strategic work. Imagine a team of digital assistants working tirelessly to handle your everyday processes, reduce errors, and accelerate your workflow.

Whether it’s routine data entry or complex organizational tasks, our RPA tools integrate seamlessly with your existing systems. They operate with unmatched precision and speed, significantly reducing task completion times. This enhances your operational efficiency, reduces costs, and unlocks new levels of productivity.

With our RPA solutions, you’re doing more than automating tasks—you’re future-proofing your business for success. By accomplishing more with fewer resources, you’ll have the freedom to focus on expansion and strategic growth initiatives. Step into a world where performance meets accuracy and watch your business processes reach new heights with streamlined, efficient system management.`,
    },
    {
      id: 2,
      link: "chatbots/",
      name: "ChatBots",
      img: `${ChatBotImg}`,
      text: `Do you think chatbots and virtual assistants could renovate how you do business? If you’re thinking that then all your worries will soon go away because you get to meet our advanced chatbots and virtual assistants—your new partners in developing customer interactions and streamlining your operations. Imagine a world where every customer query is resolved swiftly and smoothly by increasing satisfaction and loyalty like never before.

Our latest technology equips businesses to improve user experiences, making sure operations runs more efficiently in our fast-moving digital world. Whether it’s providing customized support to your customers or managing day-to-day tasks, our chatbots and virtual assistants are built to significantly expand your productivity. This way, you can focus more on growing your business while we handle the routine competently.Top of Form

Step into the future of communication with our advanced solutions. They redefine success in the age of AI, helping your business thrive one conversation at a time. Get ready to raise your customer service and operational efficiency simultaneously with our innovative tools.`,
    },
    {
      id: 3,
      link: "financial-software",
      name: "Financial Services Software",
      img: `${FinanceImg}`,
      text: `Ready to elevate your financial operations? Look no further—our AI-driven solutions are designed to revolutionize your approach. By combining the precision of artificial intelligence with advanced financial analytics, our platform empowers businesses and institutions to make informed decisions with speed and efficiency. This seamless integration ensures not only accuracy but also confidence in navigating the complexities of today’s economic landscape.

Our AI tools bring predictive analytics to the forefront, enabling you to anticipate market trends and adjust your strategies proactively. Coupled with flexible risk management solutions, our platform adapts to ever-changing market conditions, ensuring you stay ahead of challenges rather than reacting to them.

With our AI-enhanced financial solutions, you’re not just keeping pace—you’re leading the way. This transformative approach redefines how financial success is achieved, making your operations smarter, faster, and more reliable. Whether optimizing investments, managing risks, or predicting economic shifts, our platform provides the tools you need to craft a forward-thinking financial strategy.`,
    },
    {
      id: 4,
      link: "supplychain-solutions",
      name: "Supplychain Solutions",
      img: `${SupplyImg}`,
      text: `
Here’s a cleaner, more refined version of the content:

Ready to elevate your financial operations? Our AI-driven solutions are here to transform your approach. By seamlessly integrating the precision of artificial intelligence with advanced financial analytics, our platform empowers businesses and institutions to make faster, well-informed decisions with confidence. This powerful combination ensures both efficiency and accuracy, enabling you to navigate the complexities of today’s economic landscape with ease.

Our platform offers predictive analytics to help you anticipate market trends and proactively adapt your strategies. Additionally, our flexible risk management solutions are designed to evolve with changing market conditions, keeping you ahead of potential challenges. With these tools, you’re not just responding to changes—you’re prepared for them.

With our AI-enhanced financial solutions, you’ll do more than keep up with the competition—you’ll lead the way. This innovative approach reshapes how you achieve financial success, making your operations smarter, faster, and more reliable. Whether you’re optimizing investments, managing risks, or forecasting economic shifts, our platform provides everything you need to build a cutting-edge financial strategy.`,
    },
    {
      id: 5,
      link: "ai-solutions",
      name: "AI Solutions",
      img: `${AIImg}`,
      text: `Want to know what’s transforming the world of business? Nexifies’ advanced AI solutions are revolutionizing industries by bringing precision and intelligence to your fingertips. By leveraging cutting-edge artificial intelligence, we empower organizations to make smarter, data-driven decisions that boost efficiency, optimize resources, and drive exceptional results.

Our technology provides real-time insights into critical operations, analyzing data to give you a clear understanding of trends, performance, and potential challenges. This instant visibility allows you to take proactive actions exactly when needed. With predictive analytics, our AI solutions can identify risks and opportunities before they arise, keeping you one step ahead in managing your operations effectively.

Nexifies also offers automation capabilities that streamline processes, reducing manual intervention and improving operational speed. By optimizing resource utilization and eliminating inefficiencies, our AI solutions not only increase productivity but also support sustainable, long-term growth.

Step into the future with Nexifies’ AI-powered solutions, where innovation meets intelligence. With our technology, you’re not just improving operations—you’re transforming them to be smarter, faster, and more reliable. Together, let’s build a smarter, more sustainable futur`,
    },
  ];

  return (
    <div className="App">
       <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
      <ScrollToTop />
      <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage/>}/>
          {servicePages.map((service) => (
            <Route key={service.id} path={`/services/${service.link}`} element={<Services serviceImg={service.img} serviceText={service.text} serviceName={service.name} />} />
          ))}
          <Route path="/testimonials" element={<Testimonial/>}/>
          <Route path='/careers' element={<Career/>}/>
          <Route path="/contact-us" element={<ContactPage/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
