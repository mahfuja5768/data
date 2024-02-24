import Container from "@/Components/Utils/Container";
import { SlEarphones } from "react-icons/sl";
import { IoMailOpen, IoLocationOutline  } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle   } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";



const ContactUsPage = () => {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white pt-12">
      <Container>
        <div className="text-center my-12">
          <h4>Contact US</h4>
          <h2 className="text-3xl font-bold">Want To Know More? <br/> Reach out to us!</h2>
          
        </div>
        <div className=" my-12 max-w-screen-lg mx-auto  grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-8">
          <div className=" shadow-xl bg-white rounded h-44 p-5 text-center">
            <SlEarphones className="text-primary text-4xl mx-auto"/>
            <h2 className="my-3 font-bold">Contact Phone Number</h2>
            <p className="text-sm">+444 555 666 777</p>
            <p className="text-sm">+222 222 222 333</p>
          </div>
          <div className="shadow-xl h-44 bg-white rounded p-5 text-center">
            <IoMailOpen className="text-primary text-4xl mx-auto"/>
            <h2 className="my-3 font-bold">Our Email Address</h2>
            <p className="text-sm">edumate@gmail.com</p>
            <p className="text-sm">edumateTeam@gmail.com</p>
          </div>
          <div className="shadow-xl h-44 bg-white rounded p-5 text-center">
            <IoLocationOutline  className="text-primary text-4xl mx-auto"/>
            <h2 className="my-3 font-bold">Our Location</h2>
            <p className="text-sm">5678 Bangla Main Road, cities 580 GBnagla, example 54786</p>
          </div>
        </div>
         
         <div className="my-24 mb-28 max-w-screen-lg mx-auto  grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8">
         <div className="shadow-xl bg-gradient-to-t from-indigo-100 via-purple-100 to-pink-100 mx-auto p-12 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8">
         <a href="">

<IoLogoLinkedin className="text-4xl md:text-8xl" />
</a>
         <a href=""><AiFillInstagram  className="text-4xl md:text-8xl"/></a>
         
      
       <a href="">  <AiFillTwitterCircle className="text-4xl md:text-8xl"/></a>
      
       <a href="">
         <FaFacebook className="text-4xl md:text-8xl p-1"/>

       </a>
      
         </div>

         <div className="shadow-xl p-12 bg-white">
            <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
            <form action="" className=" flex flex-col gap-6">
            <input type="text" placeholder="Name" class="px-2 py-1 border-b-2 focus:border-transparent  w-full " />
            <input type="email" placeholder="Email" class="px-2 py-1 border-b-2 focus:border-transparent  w-full " />
            <input type="text" placeholder="Your Subject" class="px-2  py-1 border-b-2 focus:border-transparent  w-full " />
            <textarea type="text" placeholder="Message" class="px-2  py-1 border-b-2 focus:border-transparent  w-full " />
            </form>
            <input type="submit" className=" cursor-pointer w-full my-3 mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300  text-white font-bold py-2  rounded" value="Send" />
         </div>
         </div>         
      </Container>

      <div>
        <iframe className=" overflow-clip w-full h-[600px]" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" frameborder="0"></iframe>
      </div>
    </div>
  );
};

export default ContactUsPage;
