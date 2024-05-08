import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { licensesAndCertifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const LicenseAndCertificationCard = ({
  index,
  title,
  issuer,
  issue_date,
  credential_url,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(credential_url, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='credential'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{title}</h3>
          <p className='mt-2 text-secondary text-[14px]'>Issuer: {issuer}</p>
          <p className='mt-2 text-secondary text-[14px]'>Issue Date: {issue_date}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const LicensesAndCertifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Credentials</p>
        <h2 className={`${styles.sectionHeadText}`}>Licenses and Certifications.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following represent my licenses and certifications acquired through completion of various courses and programs, attesting to my expertise and commitment to continuous learning and professional development.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {licensesAndCertifications.map((credential, index) => (
          <LicenseAndCertificationCard key={`credential-${index}`} index={index} {...credential} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(LicensesAndCertifications, "");