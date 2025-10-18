import { motion } from 'framer-motion';
import { Heart, Phone } from 'lucide-react';

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<div className="mb-8">
						<Heart
							className="w-12 h-12 text-rose-400 mx-auto mb-4"
							fill="currentColor"
						/>
						<h3 className="script-font text-4xl text-rose-300 mb-2">
							Sam & Glory
						</h3>
						<p className="elegant-font text-lg text-gray-300">
							November 5th, 2025
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 mb-8">
						<div>
							<h4 className="elegant-font text-lg font-semibold mb-3 text-rose-300">
								Contact
							</h4>
							<div className="space-y-2 text-sm text-gray-400">
								<div className="flex items-center justify-center space-x-2">
									<Phone className="w-4 h-4" />
									<span>+91 98765 43210</span>
								</div>
							</div>
						</div>

						<div>
							<h4 className="elegant-font text-lg font-semibold mb-3 text-rose-300">
								Venue
							</h4>
							<div className="text-sm text-gray-400">
								<p>Shubam Celebrations</p>
								<p>Miyapur, Hyderabad</p>
								<p>Telangana, India</p>
							</div>
						</div>

						<div>
							<h4 className="elegant-font text-lg font-semibold mb-3 text-rose-300">
								Time
							</h4>
							<div className="text-sm text-gray-400">
								<p>Wedding Ceremony</p>
								<p>6:00 PM - 8:00 PM</p>
								<p>Reception follows</p>
							</div>
						</div>
					</div>

					<div className="border-t border-gray-700 pt-8">
						<p className="romantic-font text-xl text-rose-300 mb-4">
							"Two hearts, one love, one life together"
						</p>
						<p className="text-sm text-gray-400">
							With love and gratitude, Sam & Glory
						</p>
						<div className="mt-4">
							<p className="text-xs text-gray-500">
								© 2025 Sam & Glory Wedding. Made with ❤️ for our special day.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
