/* eslint-disable react/jsx-props-no-spreading */
import Hero from '@src/pages/about/components/hero/Hero';
import Overview from '@src/pages/about/components/overview/Overview';
import Services from '@src/pages/about/components/services/Services';
import Process from '@src/pages/about/components/process/Process';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Malik Fajar — About',
  description: 'PPLG student at SMK Informatika Fithrah Insani. I learn by building websites, interfaces, and experiments.',
  keywords: [
    'Malik Fajar',
    'About Muhammad Malik Fajar',
    'About me',
    'PPLG',
    'SMK Informatika Fithrah Insani',
    'Cimahi',
    'Frontend',
    'Web Development',
    'Laravel',
    'React',
  ],
};
function Page() {
  return (
    <>
      <CustomHead {...seo} />

      <Hero />
      <Overview />
      <Services />
      <Process />
    </>
  );
}

export default Page;
