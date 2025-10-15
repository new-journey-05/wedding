import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import InvitationSection from './components/InvitationSection';
import PhotoGallery from './components/PhotoGallery';
import EventDetails from './components/EventDetails';
import Footer from './components/Footer';

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
		<div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100">
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

					<main>
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
