import { useRef } from "react";
import PageHeader from "../Components/PageHeader/PageHeader";
import SectionTitle from "../Components/Title/SectionTitle";
import { BsCheck2Circle, BsTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";


const ContactUsPage = () => {
  let inputFrom = useRef();
  return (
    <div>
      <PageHeader title="Contact Us"></PageHeader>
      <div className="p-[5%] mb-10">
        <SectionTitle
          subtitle="You have an event"
          title="We have the solutions"
        ></SectionTitle>

        <div className="contact-section gap-10 lg:gap-3 grid lg:grid-cols-2">
          <div className="info lg:block flex flex-col justify-center items-center text-center lg:text-left space-y-4">
            <h1 className="text-4xl font-bold text-color-secondary">We’ll make your next <br></br> celebration very special!</h1>
            <div className="info-times space-y-3">
            <div className="flex gap-2 items-center lg:text-xl"> <p className="text-lg bg-color-primary rounded-full inline-block p-2"><ImLocation2 ></ImLocation2></p> 
              <p>8500, Lorem Street, Chicago, IL, 55030</p>
            </div>
            <div className="flex gap-2 items-center lg:text-xl">
            <p className="text-lg bg-color-primary rounded-full inline-block p-2"><HiOutlineMail ></HiOutlineMail></p> 
              <a href="mailto:name@example.com">name@example.com</a>
            </div>
            <div  className="flex gap-2 items-center lg:text-xl">
            <p className="text-lg bg-color-primary rounded-full inline-block p-2"><BsTelephoneFill ></BsTelephoneFill></p> 
              <h1>(123) 456-78-90</h1>
            </div>
            </div>
          </div>
          <div className="form">
            <form
              ref={inputFrom}
              onSubmit={(e) => {
                e.preventDefault();
                inputFrom.current.reset();
                document.getElementById("my_modal_5").showModal();
                console.log("submitted");
              }}
              className="flex flex-col space-y-3"
            >
              {/* Name Input */}
              <div className="name">
                <label htmlFor="Name">Name: </label>
                <input
                  name="Name"
                  type="text"
                  required
                  placeholder="Your Name.."
                  className="input input-bordered input-warning w-full"
                />
              </div>

              {/* Budget Input */}
              <div className="budget">
                <label htmlFor="budget">Budget</label>
                <input
                  name="budget"
                  type="text"
                  required
                  placeholder="Your Budget.."
                  className="input input-bordered input-warning w-full"
                />
              </div>

              {/* Email Input */}
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email.."
                  className="input input-bordered input-warning w-full"
                />
              </div>

              {/* Textarea Input */}
              <div className="textarea !mx-0 !p-0 ">
                <label htmlFor="textarea">Your Message</label>
                <textarea
                  name="textarea"
                  type="text"
                  required
                  placeholder="Your Message.."
                  className="input input-bordered input-warning h-28 !w-full"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn bg-color-secondary text-[#fff] hover:bg-color-primary hover:text-color-main"
              >
                Send Message
              </button>
            </form>

            {/* Modal */}
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box flex justify-center items-center flex-col">
                <h3 className="font-bold text-lg">Message Sent Successful!</h3>
                <BsCheck2Circle className="text-4xl text-[#008000] my-5"></BsCheck2Circle>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
