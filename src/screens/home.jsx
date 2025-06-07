import '../styles/home.css';
import FAQSection from '../components/sections/faqSections';
import MenuSection from '../components/sections/menuSections';
import RecommendationsSection from '../components/sections/recommendationsSection';
import ServicePanel from '../components/services/servicePanel';


const Home = () => {
    return (
        <main className='home'>
            <h1>Welcome to Sanvalencia Guest Portal</h1>
            <FAQSection />
            <ServicePanel />
            <MenuSection />
            <RecommendationsSection />
        </main>
    );
}
export default Home;