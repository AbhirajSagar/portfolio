import Show from '@/components/Show';
import Tools from '@/components/Tools';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home()
{
  return (
    <div className='p-[3%] py-12'>
      <Show />
      <Tools />
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}