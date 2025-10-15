import { motion } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';

interface NavigationProps {
	isMenuOpen: boolean;
	setIsMenuOpen: (open: boolean) => void;
	scrollToSection: (sectionId: string) => void;
}

const Navigation = ({
	isMenuOpen,
	setIsMenuOpen,
	scrollToSection,
}: NavigationProps) => {
	const navItems = [
		{ label: 'Home', id: 'home' },
		{ label: 'Invitation', id: 'invitation' },
		{ label: 'Gallery', id: 'gallery' },
		{ label: 'Details', id: 'details' },
	];

	return (
		<>
			<nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="flex items-center space-x-2"
						>
							<Heart className="w-6 h-6 text-rose-600" fill="currentColor" />
							<span className="romantic-font text-2xl text-rose-700 font-semibold">
								Sam & Glory
							</span>
						</motion.div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex space-x-8">
							{navItems.map((item, index) => (
								<motion.button
									key={item.id}
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									onClick={() => scrollToSection(item.id)}
									className="elegant-font text-gray-700 hover:text-rose-600 transition-colors duration-200 py-2 px-4 rounded-md hover:bg-rose-50"
								>
									{item.label}
								</motion.button>
							))}
						</div>

						{/* Mobile Menu Button */}
						<div className="md:hidden">
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="text-gray-700 hover:text-rose-600 transition-colors duration-200"
							>
								{isMenuOpen ? (
									<X className="w-6 h-6" />
								) : (
									<Menu className="w-6 h-6" />
								)}
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Mobile Navigation Menu */}
			<motion.div
				initial={{ opacity: 0, x: '100%' }}
				animate={{
					opacity: isMenuOpen ? 1 : 0,
					x: isMenuOpen ? '0%' : '100%',
				}}
				transition={{ duration: 0.3 }}
				className="fixed top-16 right-0 bottom-0 w-64 bg-white/95 backdrop-blur-md shadow-lg z-30 md:hidden"
			>
				<div className="p-6 space-y-4">
					{navItems.map((item) => (
						<button
							key={item.id}
							onClick={() => scrollToSection(item.id)}
							className="block w-full text-left elegant-font text-lg text-gray-700 hover:text-rose-600 transition-colors duration-200 py-3 px-4 rounded-md hover:bg-rose-50"
						>
							{item.label}
						</button>
					))}
				</div>
			</motion.div>

			{/* Mobile Menu Overlay */}
			{isMenuOpen && (
				<div
					className="fixed inset-0 bg-black/20 z-20 md:hidden"
					onClick={() => setIsMenuOpen(false)}
				/>
			)}
		</>
	);
};

export default Navigation;
