import React from "react";
import { Link } from "react-router-dom";
import cc1 from '../assets/cc1.png'
import cc2 from '../assets/cc2.png'
import cc3 from '../assets/cc3.png'
import cc4 from '../assets/cc4.png'
import cc5 from '../assets/cc5.jpg'

const data = [
  {
    id: "1",
    heading: "Email Marketing That Wows:",
    content:
      "Creating eye-catching emails shouldn't feel like rocket science. Constant Contact's drag-and-drop editor and hundreds of customizable templates let you craft professional campaigns in minutes. Whether you're promoting a San Diego surf shop's summer sale or a Palo Alto startup's new app, your emails will look stunning on every device. No design skills? No problem, Constant Contact's templates are beginner-friendly yet polished. Ready to create emails that convert?",
  },

  {
    id: "2",
    heading: "Social Media Management:",
    content:
      "In today's social media-driven world, a strong social presence is a must. Constant Contact integrates seamlessly with popular social media platforms, allowing you to schedule posts, track engagement, and analyze performance all from one dashboard. This simplifies your social media marketing efforts and helps you stay connected with your audience.",
  },

  {
    id: "3",
    heading: "Website Builder:",
    content:
      "A professional and user-friendly website is crucial for online success. Constant Contact offers a website builder that's intuitive and beginner-friendly. You can create a stunning website without any coding knowledge, ensuring that your online presence aligns with your brand identity.",
  },

  {
    id: "4",
    heading: "Online Marketing Tools:",
    content:
      "Constant Contact doesn't stop at email marketing and websites. It provides a wide array of online marketing tools, including event management, surveys, and e-commerce integrations, all aimed at helping you reach your business goals more effectively.",
  },

  {
    id: "5",
    heading: "Automation That Saves Time:",
    content:
      "Running a business in California means juggling a million tasks. Constant Contact's automation tools take the load off by sending the right email at the right time. Set up welcome series, birthday offers, or re-engagement campaigns with ease. For example, a Sacramento gym can automate a “We Miss You” email to lapsed members, bringing them back to classes. Plus, Constant Contact integrates with tools you already use, like Shopify for ecommerce, WordPress for blogging, or Instagram for social media. This means your Oakland boutique can sync online sales with email campaigns, all in one place. It's like having a marketing assistant who never sleeps.",
  },

  {
    id: "6",
    heading: "Analytics To Grow Stronger:",
    content:
      "Want to know what's working? Constant Contact's real-time analytics track open rates, clicks, and conversions, giving you clear insights to refine your strategy. A Monterey restaurant can see which email drove the most reservations and double down on what works. With data this easy to understand, you'll feel like a marketing pro in no time.",
  },
];

const BusinessFeatures = () => {
  return (
    <section id="services">
      <div className="px-[20px] md:px-[100px] font-Open pb-10 pt-10 md:pt-20">
        <div className="space-y-4 pb-5">
          <h1 className="font-bold text-[25px] leading-tight md:text-5xl text-center">
            What Makes Constant Contact Shine?
          </h1>
          <p className="font-semibold text-[20px] md:text-3xl text-center">
            Key Features of Business
          </p>
          <p className="text-sm md:text-[19px] text-justify pt-4 leading-6">
            As a marketer who's tested countless tools, I can tell you Constant
            Contact strikes the perfect balance of power and simplicity. Here's
            why it's a must-have for California businesses:
          </p>
        </div>
        <ol className="list-decimal pl-6 space-y-5 md:space-y-7">
          {data
            .filter((item) => item.id !== "6")
            .map((item) => (
              <li key={item.id}>
                <a
                  href="https://constant-contact.ibfwsl.net/zNPOq7"
                  className="text-sm md:text-[20px] text-blue-600 font-bold underline"
                >
                  {item.heading}
                </a>
                <p className="pt-1 text-justify text-sm md:text-[18px] leading-6 md:leading-8">
                  {item.id === "1" ? (
                    <>
                      Creating eye-catching emails shouldn't feel like rocket
                      science. Constant Contact's drag-and-drop editor and
                      hundreds of customizable templates let you craft
                      professional campaigns in minutes. Whether you're
                      promoting a San Diego surf shop's summer sale or a Palo
                      Alto startup's new app, your emails will look stunning on
                      every device. No design skills? No problem, Constant
                      Contact's templates are beginner-friendly yet polished.
                      Ready to create emails that convert?{" "}
                      <a
                        href="https://constant-contact.ibfwsl.net/zNPOq7"
                        className="text-blue-600 font-semibold underline"
                      >
                        Check out Constant Contact's templates and start for
                        free today.
                      </a>
                    </>
                  ) : (
                    item.content
                  )}
                </p>
              </li>
            ))}
        </ol>
      </div>
      <div className="pb-5 md:hidden">
        <img src={cc1} alt="" className="w-full md:max-h-[450px]" />
      </div>

      {data
        .filter((item) => item.id === "6")
        .map((item) => (
          <div className="px-[20px] md:px-[100px] font-Open">
            <ol
              className="list-decimal pl-6 space-y-5"
              start={data.length}
              key={item.id}
            >
              <li>
                <a
                  href="https://constant-contact.ibfwsl.net/zNPOq7"
                  className="text-sm md:text-[18px] text-blue-600 font-bold underline"
                >
                  {item.heading}
                </a>
                <p className="pt-1 text-justify text-sm md:text-[18px] pb-2 leading-6 md:leading-8">
                  {item.content}
                </p>
                <p className="text-sm md:text-[18px]">
                  Click{" "}
                  <a href="https://constant-contact.ibfwsl.net/zNPOq7"
                  className="text-sm md:text-[18px] text-blue-600 font-semibold underline">
                    here
                  </a>
                   {" "}to {" "}
                   <a href="https://constant-contact.ibfwsl.net/zNPOq7"
                  className="text-sm md:text-[18px] text-blue-600 font-semibold underline">
                    sign-up
                  </a>{" "}
                  today
                </p>
              </li>
            </ol>
          </div>
        ))}

     
      <div className="pb-10 pt-10 md:hidden">
        <img src={cc2} alt="" className="w-full h-auto" />
      </div>

      <div className="pb-10 md:hidden">
        <img src={cc3} alt="" className="w-full h-auto" />
      </div>

      <div className="font-Open text-sm md:text-[18px] text-justify space-y-5 px-[20px] md:px-[100px] leading-6 md:leading-8 pb-10 md:pb-25">
        <p>
          Use this space to add more details about your site, a customer quote,
          or to talk about important news
        </p>

        <a href="https://constant-contact.ibfwsl.net/zNPOq7"
         className="text-blue-600 font-bold underline">
          Constant Contact vs. the Competition: Why It Wins
        </a>
        <p>
          You might be wondering, “How does Constant Contact stack up against
          Mailchimp or HubSpot?” Heres the scoop:
        </p>

        <a href="https://constant-contact.ibfwsl.net/zNPOq7"
        className="text-blue-600 font-bold underline">
          Constant Contact vs. Mailchimp:
        </a>
        <p>
          Constant Contact: Super intuitive, with top-notch customer support
          (phone, chat, email) and robust automation. Perfect for small
          businesses who want results without the hassle.
          <br /> Mailchimp: Offers a free plan with more features but can feel
          overwhelming, with less hands-on support.
        </p>

        <a href="https://constant-contact.ibfwsl.net/zNPOq7"
        className="text-blue-600 font-bold underline">
          Constant Contact vs. HubSpot:
        </a>
        <p>
          Constant Contact: Affordable (plans start at $12/month) and ideal for
          California small businesses or solopreneurs.
          <br /> HubSpot: Great for big companies with complex needs, but its
          pricing and complexity can be overkill for most.
        </p>

        <p>
          For California entrepreneurs who value simplicity and support,
          Constant Contact is the clear winner. And with a 30-day free trial, no
          credit card required, there's zero risk to try it.{" "}
          <a href="https://constant-contact.ibfwsl.net/zNPOq7"
          className="text-blue-600 font-semibold underline">
            Start your free trial now
          </a>{" "}
          and see why it's my go-to recommendation!
        </p>
      </div>

      <div>
        <h1 className="font-bold text-[25px] leading-tight md:text-5xl text-center pb-5 md:pb-10 px-2 md:px-25 lg:px-50">
          Why You Should Jump on Constant Contact Today?
        </h1>
        <div className="md:hidden">
          <img src={cc4} alt="cc4" className="w-full h-auto" />
        </div>

        <div className="font-Open text-sm md:text-[18px] text-justify space-y-5 px-[20px] md:px-[100px] leading-6 md:leading-8 pt-5 md:pt-10 pb-10">
          <p>
            I get it, trying a new tool can feel daunting. But Constant Contact
            makes it a no-brainer, especially with their unbeatable offer.
            Here's why you should act now:
          </p>
          <p>
            {" "}
            <a href="https://constant-contact.ibfwsl.net/zNPOq7"
            className="text-blue-600 font-bold underline">
              30-Day Free Trial, No Credit Card Needed:
            </a>{" "}
            Explore every feature—emails, automation, analytics—without spending
            a dime. You've got nothing to lose and everything to gain.
            <br /> Perfect for California Businesses: From San Francisco
            startups to San Diego retailers, Constant Contact's tools are built
            to help you grow, no matter your industry.
          </p>
          <p>
            {" "}
            <a href="https://constant-contact.ibfwsl.net/zNPOq7"
            className="text-blue-600 font-bold underline">
              24/7 Support:
            </a>{" "}
            Stuck? Their friendly team is available via phone, chat, or email to
            guide you, day or night.
          </p>
          <p>
            {" "}
            <a href="https://constant-contact.ibfwsl.net/zNPOq7"
            className="text-blue-600 font-bold underline">
              Proven Results:
            </a>{" "}
            Businesses using Constant Contact see higher engagement, like a Los
            Angeles boutique that tripled their email click-throughs in weeks.
          </p>
          <p>
            {" "}
            <a href="https://constant-contact.ibfwsl.net/zNPOq7"
            className="text-blue-600 font-bold underline">
              Simplified Marketing:
            </a>{" "}
            Constant Contact brings all your marketing efforts under one roof,
            simplifying the management of your online presence. This means less
            time spent navigating various tools and more time focused on growing
            your business.
          </p>
          <p>
            {" "}
            <a href="https://constant-contact.ibfwsl.net/zNPOq7"
            className="text-blue-600 font-bold underline">
              Targeted Campaigns:
            </a>{" "}
            The platform empowers you to segment your audience and send
            personalized messages. This targeted approach leads to higher
            engagement and conversion rates, ultimately boosting your ROI.
          </p>
          <p>
            {" "}
            <a href="https://constant-contact.ibfwsl.net/zNPOq7"
            className="text-blue-600 font-bold underline">
              Analytics and Insights:
            </a>{" "}
            Constant Contact provides detailed analytics, allowing you to track
            the performance of your campaigns. You can measure the success of
            your emails, social media posts, and website traffic, enabling
            data-driven decisions to optimize your marketing strategy.
          </p>
          <p>
            Don't let another day go by without tapping into email marketing's
            power. With Constant Contact's risk-free trial, you can start
            building campaigns that drive sales today.{" "}
            <a href="https://constant-contact.ibfwsl.net/zNPOq7"
            className="text-blue-600 font-semibold underline">
              Sign up for your 30-day free trial
            </a>{" "}
            and watch your business soar!
          </p>
        </div>

        <div className="px-3 md:px-25 md:hidden">
          <img src={cc5} alt="cc5" className="w-full h-auto md:max-h-[400px]" />
        </div>
        <h3 className="font-bold text-[25px] md:text-5xl text-center pt-8 md:pt-10">
          Conclusion
        </h3>
        <div className="font-Open px-[20px] md:px-[100px] space-y-8 pt-5 ">
          <p className="text-sm md:text-[18px] text-justify leading-6 md:leading-7 md:pb-3">
            Constant Contact is more than an email marketing tool—it's your
            partner in growing your California business. With its user-friendly
            design, powerful automation, and crystal-clear analytics, it's no
            wonder entrepreneurs from Sacramento to Santa Barbara swear by it.
            And with a 30-day free trial that requires no credit card, there's
            never been a better time to try it. You've got everything to gain
            and nothing to lose, so why wait?
            <br />{" "}
            <a href="https://constant-contact.ibfwsl.net/zNPOq7"
            className="text-blue-600 font-semibold underline">
              Sign up for your 30-day free trial
            </a>{" "}
            with Constant Contact and take your marketing to new heights in
            2025!
          </p>
          <a
            href="https://constant-contact.ibfwsl.net/zNPOq7"
            className="text-white text-center font-semibold bg-red-600 px-5 py-3 rounded-md w-full md:max-w-[150px]"
          >
            Start Here
          </a>
        </div>

        <div className="font-Open px-[20px] md:px-[100px] pt-10 md:pt-20 pb-15 md:pb-30">
          <h1 className="font-bold text-[25px] md:text-5xl text-center pb-5 md:pb-10">
            Testimonials
          </h1>

          <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-center">
            <div>
              <h1 className="font-bold text-[25px] md:text-[55px] leading-none md:leading-17">
                What Our Clients Say
              </h1>
            </div>

            <div className="text-sm md:text-[18px] w-full max-w-[600px] space-y-7">
              <p>
                "E report Digitalz transformed our approach to business
                strategy, resulting in significant growth and improved market
                position."
                <br />— Sarah Johnson, CEO of Apex Industries
              </p>
              <div className="h-1 w-full bg-gray-800"></div>
              <p>
                "Their operational expertise helped us streamline processes and
                boost productivity. A game-changer for our company."
                <br />— John Perez, COO of FutureTech Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessFeatures;
