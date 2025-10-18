import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import InvitationSection from './components/InvitationSection';
import PhotoGallery from './components/PhotoGallery';
import EventDetails from './components/EventDetails';
import Footer from './components/Footer';
import BackgroundImage from './components/BackgroundImage';

function App() {
	const [showSplash, setShowSplash] = useState(true);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSplash(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setIsMenuOpen(false);
	};

	return (
		<div className="min-h-screen relative overflow-hidden">
			<BackgroundImage
				image="DSC08132"
				focal={{ default: '18%', md: '22%', sm: '28%', xs: '34%' }}
				fixedOnDesktop={true}
				overlayCenter={{ x: '50%', y: '38%' }}
				overlayOpacities={[0.08, 0.18, 0.38, 0.54]}
			/>
			<AnimatePresence>{showSplash && <SplashScreen />}</AnimatePresence>

			{!showSplash && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<Navigation
						isMenuOpen={isMenuOpen}
						setIsMenuOpen={setIsMenuOpen}
						scrollToSection={scrollToSection}
					/>

					<main className="relative">
						<Hero scrollToSection={scrollToSection} />
						<InvitationSection />
						<PhotoGallery />
						<EventDetails />
					</main>

					<Footer />
				</motion.div>
			)}
		</div>
	);
}

export default App;
