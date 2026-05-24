import Header from "../components/Header/Header";
import Banner from "../sections/Banner/Banner";
import About from "../sections/About/About";
import Founder from "../sections/Founder/Founder";
import { getXSchoolData } from "../services/xschoolApi";
import Program from "../sections/Program/Program";
import Marquee from "../sections/Marquee/Marquee";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";

export default async function Home() {
  const data = await getXSchoolData();

  return (
    <>
      <Header />
      <main>
        <Banner data={data} />
        <About data={data} />
        <Founder founders={data.founders} />
        <Program programs={data.programs} />
        <Marquee textSlider={data.text_slider} />
        <FAQ title={data.faq_title} items={data.xschool_faq} />
        <Footer />
      </main>
    </>
  );
}