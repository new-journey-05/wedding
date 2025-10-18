import { motion } from 'framer-motion';
import { Heart, ChevronDown } from 'lucide-react';
import CountdownDate from './CountdownDate';

interface HeroProps {
	scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center relative overflow-hidden"
		>
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23db2777' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm10 0c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				/>
			</div>

			<div className="container mx-auto px-4 text-center relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.2 }}
					className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl"
				>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							delay: 0.5,
							type: 'spring',
							stiffness: 260,
							damping: 20,
						}}
						className="mb-8"
					>
						<Heart
							className="w-16 h-16 text-rose-600 mx-auto animate-float"
							fill="currentColor"
						/>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.8 }}
						className="script-font text-7xl md:text-9xl text-rose-700 mb-6"
					>
						Sam & Glory
					</motion.h1>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.2, duration: 0.6 }}
						className="elegant-font text-xl md:text-2xl text-gray-700 mb-8"
					>
						<p className="mb-2">Together with their families</p>
						<p>request the honor of your presence</p>
						<p>at their holy matrimony</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 1.5, duration: 0.5 }}
						className="mb-12"
					>
						<CountdownDate className="inline-block bg-white/70 backdrop-blur-sm rounded-lg px-8 py-6 shadow-lg" />
					</motion.div>

					<motion.button
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.8, duration: 0.5 }}
						onClick={() => scrollToSection('invitation')}
						className="inline-flex items-center space-x-2 bg-rose-600 text-white px-8 py-4 rounded-full elegant-font text-lg hover:bg-rose-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<span>View Invitation</span>
						<ChevronDown className="w-5 h-5" />
					</motion.button>
				</motion.div>
			</div>

			{/* Floating elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{[...Array(6)].map((_, i) => (
					<motion.div
						key={i}
						initial={{
							x: Math.random() * window.innerWidth,
							y: Math.random() * window.innerHeight,
							scale: 0,
						}}
						animate={{
							scale: [0, 1, 0],
							rotate: 360,
						}}
						transition={{
							duration: 8 + Math.random() * 4,
							delay: Math.random() * 4,
							repeat: Infinity,
							ease: 'linear',
						}}
						className="absolute"
					>
						<Heart className="w-3 h-3 text-rose-300" fill="currentColor" />
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Hero;
