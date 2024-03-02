import { protData } from '@/app/constant/NavLink';
import HomeText from '@/components/HomeText';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic'
import Link from 'next/link';

const ProtfolioCardReverse = dynamic(() => import('@/components/ProtCardReverse'), { ssr: false });
const ProtfolioCard = dynamic(() => import('@/components/ProtfolioCard'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero.jsx'), { ssr: false });




const Page = () => {




  return (
    <div className='overflow-hidden h-full'>
      {/* Hero Section */}
      <section className='h-[70vh] xsm:h-[87vh] mx-auto'>
        <Hero />
      </section>

      {/* Text Section */}
      
<HomeText />
      {/* Work Section */}
      <section className='w-full max-w-[1440px] min-h-[100vh] px-[20px] sm:px-[60px] lg:px-[90px] xlb:px-[120px] py-[2rem] mx-auto'>
        <h1 className='font-Montserrat text-[60px] font-[500] text-[#2e2e2e]'>Here’s our <span className='font-bold'>work</span> </h1>
        <div className='w-full flex mb-[10px] ssm:mb-[40px] flex-col items-center justify-center gap-[40px] h-full'>
          {protData.map((item, index) => (
            index % 2 === 0 ? (
              <ProtfolioCard key={index} logo={item.logo} spanTitle={item.spanTitle} title={item.title} desc={item.desc} image={item.image} id={index + 1} />
            ) : (
              <ProtfolioCardReverse key={index} logo={item.logo} spanTitle={item.spanTitle} title={item.title} desc={item.desc} image={item.image} id={index + 1} />
            )
          ))}
           <Link href={'/work'} className='px-[30px] btn font-Montserrat bg-transparent font-semibold text-[#2957A7] hover:text-[#fff] py-[10px] text-[20px] rounded-[40px] border-[#2957A7] border-[1px]'>
          see more work
        </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
