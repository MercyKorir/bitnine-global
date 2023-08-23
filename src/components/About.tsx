import React from 'react';
import Image from 'next/image';

type Props = {};

const About: React.FC<{}> = (props: Props) => {
  return (
    <section className="min-h-fit  bg-[#F3F6FB] py-20 xs:py-24">
      <div className="flex justify-center items-center">
        <Image
          src={
            'https://bitnine.net/wp-content/uploads/2022/04/img_diagram_eng-e1651143428347.png'
          }
          alt="Package Image"
          width={900}
          height={752}
          className='w-[300px] h-[272px] xxs:w-[350px] xxs:h-[270px] xs:w-[400px] xs:h-[350px] sm:w-[650px] sm:h-[450px] md:w-[800px] md:h-[652px] xl:w-[900px] xl:h-[752px]'
        />
      </div>
    </section>
  );
};

export default About;
