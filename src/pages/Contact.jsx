const Contact = () => {
  return (
    // <div className=" m-sm-4 m-md-6 m-lg-8 m-xl-10">
    //     <h3 className=" font-bold">Contact Details</h3>
    //     <ul className=" m-4">
    //       <li className=" p-2">Phone:{" "}<a href="">+91 8669001004</a></li>
    //       <li  className=" p-2">Email: {" "} <a href="">abdulbasitkhan2733@gmail.com</a></li>
    //       <li className=" p-2">LinkedIn: {" "} <a href="">abdulbasitkhan2733@gmail.com</a></li>
    //       <li className=" p-2">Github: {" "} <a href="">https://github.com/AbdulBasit2733</a></li>
    //     </ul>
    // </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl mb-4">Contact Me</h2>
        <p className="mb-4">Feel free to reach out to me:</p>
        <address className="mb-4">
          <p className="font-semibold">Email:</p>
          <a
            href="abdulbasitkhan2733@gmail.com"
            className="text-blue-500 hover:underline"
          >
            abdulbasitkhan2733@gmail.com
          </a>
        </address>
        <address>
          <p className="font-semibold">Phone:</p>
          <a
            href="tel:+91 8669001004"
            className="text-blue-500 hover:underline"
          >
            +91 8669001004
          </a>
        </address>
      </div>
    </div>
  );
};

export default Contact;
