import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../../Data/Data";
import { Carousel } from "@mantine/carousel";
import React from "react";

const Testimonials = () => {
  return (
    <div>
      <div className="text-4xl font-semibold text-center text-mine-shaft-100 py-6">
        What our <span className="text-orient-400">Users</span> says about us ?
      </div>

      <Carousel
        slideSize="22%"
        withControls={false}
        emblaOptions={{
          loop: true,
          align: "center",
        }}
      >
        {/* ...slides */}
        {testimonials.map((data, idx) => (
          <Carousel.Slide key={idx} className="p-4 m-auto">
            <div className="flex flex-col gap-4 h-full border border-orient-300 rounded-lg px-4 py-4 ">
              {/* Top: avatar + name + rating */}
              <div className="flex items-center gap-3 px-4">
                <Avatar
                  className="!h-14 !w-14 "
                  src={data.img}
                  alt={data.name}
                />

                <div>
                  <div className="text-mine-shaft-100 font-semibold">
                    {data.name}
                  </div>
                  <Rating value={data.rating} fractions={2} readOnly />
                </div>
              </div>

              {/* Bottom: testimonial text */}
              <div className="text-mine-shaft-300 text-sm leading-relaxed text-center">
                {data.testimonials}
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;

/* 
<div className="flex flex-col items-center gap-4 h-[100%] border border-orient-300 rounded-lg p-4 mx-auto">
              <div className="flex items-center  px-3">
                <Avatar className="!h-14 !w-14" src={data.img} alt="image" />
                <div className="flex flex-col items-center">
                  <div className="text-mine-shaft-100 font-semibold">
                    {data.name}
                  </div>
                  <Rating value={data.rating} fractions={2} readOnly />
                </div>
                <div className="text-mine-shaft-300 mt-4 text-sm">
                  {data.testimonials}
                </div>
              </div>
            </div>

*/
