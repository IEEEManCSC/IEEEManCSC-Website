import BlackMainSection from "@/app/components/BlackMainSection";
import Image from "next/image";
import BorderedBlackSection from "@/app/components/BorderedBlackSection";

const page = () => {
  return (
    <>
      <section className="text-white px-6 pt-16 pb-8 md:pt-20 md:pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-amber-500 uppercase font-[Merriweather]">
            IEEE Membership
          </h2>
          <p className="text-lg md:text-xl font-medium tracking-widest  leading-7 text-gray-200 mt-4">
            IEEE Membership Connects You To Exclusive Tech
            <br />
            Resources And Global Opportunities
          </p>
        </div>

        <div className=" mx-auto md:mx-0 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-gray-300  md:h-[50%]  md:ml-16 text-center md:text-left">
            <p className="mb-6 text-base md:text-xl  leading-9 tracking-wide ">
              IEEE Membership Is An Annual Subscription That Connects You To A
              Global Community Of Tech And Research Enthusiasts. It Gives You
              Exclusive Access To Research Papers, Courses, Competitions,
              Scholarships, And Training — All For An Affordable Fee.
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-full md:text-lg text-base  transition duration-300">
              Become an IEEE member
            </button>
          </div>

          <div className="relative w-full h-auto md:block hidden md:overflow-hidden md:pb-0 md:mb-[-250px]">
            <Image
              src="/membershipmain.svg"
              alt="IEEE laptops"
              width={400}
              height={200}
              className="w-full h-auto "
            />
          </div>
        </div>
      </section>
      <section className="bg-[#00000036] text-white px-6 pt-10 pb-20 md:pt-12 md:pb-20 relative overflow-hidden">
        <div className="h-[1px] p-[1px] w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-24" />

        <div className="text-center mb-16 ">
          <h2 className="text-3xl md:text-4xl tracking-wider font-bold text-amber-500 uppercase font-[Merriweather]">
            Membership Advantages
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mt-4">
            Unlock Exclusive Opportunities And Grow Your Skills With <br />
            IEEE Membership
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 relative my-8">
          <div className="px-6 text-center space-y-10 pb-16">
            <Image
              src="/membershipextreme.svg"
              alt="IEEEXtreme"
              width={250}
              height={150}
              className="mx-auto"
            />
            <p className="text-base md:text-lg text-gray-300 leading-relaxed ">
              A global 24-hour programming competition for students. Challenging
              real-world problems to test your coding skills Collaborate with
              peers and compete for prizes. An exciting opportunity to push your
              limits and learn.
            </p>
          </div>

          <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-amber-500" />
          <div className="px-6 text-center space-y-6 pb-16">
            <Image
              src="/membershipsper.svg"
              alt="IEEE Spectrum"
              width={350}
              height={250}
              className="mx-auto"
            />
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              The official IEEE magazine covering the latest innovations and
              technologies worldwide. <br />
              In-depth articles and analyses in various technology fields. News
              and updates on the latest technical developments. Reliable and
              continuously updated content.
            </p>
          </div>

          <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-px bg-gradient-to-b from-transparent via-amber-500" />

          <div className="px-6 text-center space-y-6 pb-16">
            <Image
              src="/membershipcollab.svg"
              alt="IEEE Collabratec"
              width={350}
              height={250}
              className="mx-auto"
            />
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              A professional networking platform connecting engineers and
              researchers worldwide. <br />
              Collaborate on projects, share ideas, and grow your career. Join
              communities and discussions in your technical fields. Access
              resources and opportunities tailored for IEEE members.
            </p>
          </div>
        </div>
      </section>
      <div className="h-[1px] p-[1px] w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-0" />
      <section className="bg-black text-white py-12 px-4 md:px-16 flex flex-col md:flex-row items-center justify-center gap-24">
        <div className="w-full md:w-[40%] md:flex justify-center  hidden">
          <Image
            src="/membershipmore.svg"
            alt="IEEE Spectrum Mockup"
            width={400}
            height={600}
            className="object-contain"
          />
        </div>

        <div className=" md:w-[60%] w-[90%] mx-auto">
          <h2 className="text-3xl font-bold tracking-wider font-[Merriweather] text-amber-500 mb-6">
            MORE MEMBERSHIP PERKS
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-200 text-base leading-relaxed">
            <li>
              Training Courses And Workshops To Develop Your Technical And
              Personal Skills.
            </li>
            <li>
              Opportunities To Participate In Global Competitions Like
              IEEEDuino.
            </li>
            <li>
              Get An Official Email Address With The @Ieee.Org Domain To Boost
              Your Training And Job Prospects.
            </li>
            <li>Discounts On Conferences And Tech Events Organized By IEEE.</li>
            <li>
              Access To Scholarships, Training, And Accredited Certificates That
              Increase Your Market Value.
            </li>
            <li>
              Join Specialized Technical Societies (IEEE Societies) In Various
              Fields To Deepen Your Knowledge.
            </li>
            <li>
              Continuous Updates On Job Opportunities, Training, And
              Scholarships Via Email.
            </li>
          </ul>
        </div>
      </section>
      <div className="h-[1px] p-[1px] w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent " />
      <section className="bg-black text-white py-16 px-4 md:px-20 text-center ">
        <div className="w-[90%] mx-auto md:w-full">
          <h2 className="text-3xl font-bold tracking-wider text-amber-500 uppercase font-[Merriweather] mb-2">
            YOUR MEMBERSHIP
          </h2>
          <p className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto">
            Explore IEEE Membership Plans Designed To Fit Your <br />
            Needs, Goals, And Budget Perfectly
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <BorderedBlackSection className="rounded-xl">
              <div className="px-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Student Membership
                </h3>
                <ul className="list-disc list-inside text-gray-200 space-y-2">
                  <li>Access To IEEE Xplore Research Library</li>
                  <li>Courses And Workshops</li>
                  <li>Competitions Like IEEE Xtreme</li>
                  <li>Official Email Address</li>
                  <li>Discounts On Conferences</li>
                  <li>Training And Scholarship Opportunities</li>
                </ul>
                <p className="text-orange-400 mt-4 font-semibold">
                  Price: About $30 Per Year
                </p>
              </div>
            </BorderedBlackSection>

            <BorderedBlackSection className="rounded-xl">
              <div className="px-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Graduate Transition
                </h3>
                <ul className="list-disc list-inside text-gray-200 space-y-2">
                  <li>Support For Recent Graduates</li>
                  <li>Resources For Job Market Entry</li>
                  <li>All Student Benefits Plus Professional Extras</li>
                  <li>Training And Scholarship Opportunities</li>
                </ul>
                <p className="text-orange-400 mt-4 font-semibold">
                  Price: Varies By Region, Usually Less Than Professional
                  Membership
                </p>
              </div>
            </BorderedBlackSection>

            <BorderedBlackSection className="rounded-xl">
              <div className="px-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Professional Membership
                </h3>
                <ul className="list-disc list-inside text-gray-200 space-y-2">
                  <li>Networking With Professionals</li>
                  <li>Updates On Latest Research</li>
                  <li>Advanced Training Opportunities</li>
                  <li>Discounts On Conferences</li>
                </ul>
                <p className="text-orange-400 mt-4 font-semibold">
                  Price: Starts At Around $100 Per Year
                </p>
              </div>
            </BorderedBlackSection>

            <BorderedBlackSection className="rounded-xl">
              <div className="px-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Life Membership
                </h3>
                <ul className="list-disc list-inside text-gray-200 space-y-2">
                  <li>Lifetime Membership</li>
                  <li>Exclusive Benefits</li>
                  <li>Special Updates And Opportunities</li>
                </ul>
                <p className="text-orange-400 mt-4 font-semibold">
                  Price: One-Time Fee, Varies By Age
                </p>
              </div>
            </BorderedBlackSection>
          </div>
        </div>
      </section>
      <div className="h-[1px] p-[1px] w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent " />
      )
    </>
  );
};

export default page;
