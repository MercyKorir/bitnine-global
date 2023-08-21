import React from 'react';
import Image from 'next/image';

type Props = {};

const About: React.FC<{}> = (props: Props) => {
  return (
    <section className="min-h-[100vh]  bg-[#F3F6FB] py-24">
      <div className="flex justify-center">
        <Image
          src={
            'https://bitnine.net/wp-content/uploads/2022/04/img_diagram_eng-e1651143428347.png'
          }
          alt="Package Image"
          width={900}
          height={752}
        />
      </div>
    </section>
  );
};

export default About;
