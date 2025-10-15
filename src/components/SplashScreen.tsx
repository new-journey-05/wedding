import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const SplashScreen = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-rose-200 via-pink-100 to-rose-300"
		>
			<div className="text-center">
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{
						delay: 0.2,
						type: 'spring',
						stiffness: 260,
						damping: 20,
					}}
					className="mb-8"
				>
					<Heart
						className="w-20 h-20 text-rose-600 mx-auto animate-hearts"
						fill="currentColor"
					/>
				</motion.div>

				<motion.h1
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.8 }}
					className="script-font text-6xl md:text-8xl text-rose-700 mb-4"
				>
					Sam & Glory
				</motion.h1>

				<motion.p
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.8, duration: 0.6 }}
					className="elegant-font text-xl md:text-2xl text-rose-600"
				>
					November 5th, 2025
				</motion.p>

				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ delay: 1.2, duration: 0.5 }}
					className="mt-8"
				>
					<div className="w-16 h-1 bg-rose-500 mx-auto"></div>
				</motion.div>
			</div>

			{/* Floating hearts animation */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{[...Array(8)].map((_, i) => (
					<motion.div
						key={i}
						initial={{
							x: Math.random() * window.innerWidth,
							y: window.innerHeight + 100,
							opacity: 0,
						}}
						animate={{
							y: -100,
							opacity: [0, 1, 0],
						}}
						transition={{
							duration: 4 + Math.random() * 2,
							delay: Math.random() * 2,
							repeat: Infinity,
							ease: 'linear',
						}}
						className="absolute"
					>
						<Heart className="w-4 h-4 text-rose-400" fill="currentColor" />
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

export default SplashScreen;
