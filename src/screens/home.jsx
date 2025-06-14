import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import FAQSection from '../components/sections/faqSections';
import MenuSection from '../components/sections/menuSections';
import RecommendationsSection from '../components/sections/recommendationsSection';
import ServicePanel from '../components/services/servicePanel';
import { checkCheckoutDate } from '../utils/checkoutHandler';


const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const guestData = localStorage.getItem('guestData');
        
        if (!guestData) {
            // No guest data found, redirect to error page
            navigate('/error');
            return;
        }

        // Check if checkout date has passed
        if (checkCheckoutDate()) {
            navigate('/goodbye');
        }
    }, [navigate]);
    return (
        <main className='home'>
            <h1>Welcome to SanValencia Guest Portal</h1>
            <FAQSection />
            <ServicePanel />
            {/* <MenuSection /> */}
            {/* <RecommendationsSection /> */}
        </main>
    );
}
export default Home;