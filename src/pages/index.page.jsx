/* eslint-disable react/jsx-props-no-spreading */
import Home from '@src/pages/components/home/Index';
import About from '@src/pages/components/about/Index';
import Quote from '@src/pages/components/quote/Index';
import Projects from '@src/pages/components/projects/Index';
import Clients from '@src/pages/components/clients/Index';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Malik Fajar — Portfolio',
  description: 'PPLG student at SMK Informatika Fithrah Insani. I build websites, interfaces, and experiments — from Laravel systems to motion-heavy frontends.',
  keywords: [
    'Malik Fajar',
    'Muhammad Malik Fajar',
    'Portfolio',
    'Frontend',
    'Web Development',
    'React',
    'Laravel',
    'UI/UX',
    'Cimahi',
    'Indonesia',
    'SMK Informatika Fithrah Insani',
    'PPLG',
    'JavaScript',
    'Next.js',
    'GSAP',
  ],
};

function Page() {
  return (
    <>
      <CustomHead {...seo} />
      <Home />
      <About />
      <Clients />
      <Quote />
      <Projects />
    </>
  );
}

export default Page;
