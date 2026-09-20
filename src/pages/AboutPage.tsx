import AboutSection from '../components/AboutSection'
import FocusSection from '../components/FocusSection'
import SkillsSection from '../components/SkillsSection'
import PageMeta from '../components/PageMeta'
const AboutPage = () => {
    return <>
        <PageMeta title="About" description="Education, interests, and technical skills." />
        <AboutSection />
        <FocusSection />
        <SkillsSection />
    </>
}

export default AboutPage
