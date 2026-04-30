import React from "react";
import { Carousel } from "@mantine/carousel";
import { jobCategories } from "../../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const JobCategory = () => {
  return (
    <div className="mt-20 mb-10 pb-5">
      <div className="text-4xl font-semibold text-center text-mine-shaft-100 mb-3">
        Browse <span className="text-orient-400">Job</span> categories
      </div>
      <div className="text-center w-1/2 mx-auto text-mine-shaft-300 text-lg ">
        Explain diverse job opportunites tailored to your skills. Start your
        career journey today!!
      </div>

      {/* Carousel */}

      <Carousel
        slideSize="22%"
        slideGap="md"
        controlsOffset="xl"
        controlSize={35}
        withControls
        withIndicators={false}
        nextControlIcon={<IconArrowRight stroke={3} size={16} color="black" />}
        previousControlIcon={
          <IconArrowLeft stroke={3} size={16} color="black" />
        }
        emblaOptions={{
          loop: true,
          align: "center",
        }}
        className="[&_button]:!bg-orient-300 [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100"
      >
        {/* ...slides */}
        {jobCategories.map((category, idx) => (
          <Carousel.Slide key={idx}>
            <div className="flex flex-col items-center w-66 p-5 gap-3 border border-orient-500 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5pzx_2px_black] !shadow-orient-400 my-5 transition duration-300 ease-in-out ">
              <div className="p-2 bg-orient-300 rounded-full">
                <img
                  src={`/Categories/${category.name}.png`}
                  alt=""
                  className="h-8 w-8"
                />
              </div>
              <div className="text-mine-shaft-100 font-semibold text-xl">
                {category.name}
              </div>
              <div className="text-mine-shaft-300 text-center text-sm">
                {category.desc}
              </div>
              <div className="text-orient-400 text-base">
                {category.jobs}K+ new job posted
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
      {/* Cards */}
    </div>
  );
};

export default JobCategory;
