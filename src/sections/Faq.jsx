import { Element } from "react-scroll";
import { faq } from "../constants/index.jsx";
import FaqItem from "../components/FaqItem.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);
  useGSAP(() => {
    gsap.from("#left", {
      right: "50%",
      opacity: 0,
      delay: 0.75,
      duration: 1.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#left",
        scroll: "body",
      },
    });
  });
  useGSAP(() => {
    gsap.from("#right", {
      left: "50%",
      delay: 0.75,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#right",
        scroll: "body",
      },
    });
  });
  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container relative z-2 py-28">
          <div>
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
              Curiosity did not kill the cat, it gave it answers.
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              You well got questions, we well got answers.
            </p>
          </div>

          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
        </div>

        <div
          className="faq-glow_before relative z-2 border-2 border-s2 bg-s1"
          id="Faq"
        >
          <div className="container flex gap-10 max-lg:block">
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
            </div>

            <div className="relative flex-1  lg:pt-24" id="left">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={index} />
              ))}
            </div>

            <div className="relative flex-1 lg:pt-24" id="right">
              {" "}
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={halfLength + index} />
              ))}
            </div>
          </div>

          <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default Faq;
