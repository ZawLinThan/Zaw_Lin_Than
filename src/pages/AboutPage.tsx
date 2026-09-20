import AboutSection from "../components/AboutSection";
import FocusSection from "../components/FocusSection";
import PageMeta from "../components/PageMeta";
const AboutPage = () => {
  return (
    <>
      <PageMeta
        title="About"
        description="Education, background, and interests."
      />
      <AboutSection />
      <FocusSection />
    </>
  );
};

export default AboutPage;
