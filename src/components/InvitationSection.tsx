import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin } from 'lucide-react';

const InvitationSection = () => {
	return (
		<section id="invitation" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="max-w-4xl mx-auto text-center"
				>
					<div className="mb-12">
						<motion.div
							initial={{ scale: 0 }}
							whileInView={{ scale: 1 }}
							transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
							viewport={{ once: true }}
							className="mb-8"
						>
							<Heart
								className="w-12 h-12 text-rose-600 mx-auto"
								fill="currentColor"
							/>
						</motion.div>

						<h2 className="elegant-font text-4xl md:text-5xl text-gray-800 mb-8">
							Wedding Invitation
						</h2>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						viewport={{ once: true }}
						className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-lg p-8 md:p-12 shadow-lg mb-12"
					>
						<p className="elegant-font text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
							We cordially invite you to the holy matrimony of
						</p>

						<div className="script-font text-6xl md:text-8xl text-rose-700 mb-8">
							Sam & Glory
						</div>

						<div className="space-y-6 text-lg md:text-xl text-gray-700">
							<div className="flex items-center justify-center space-x-3">
								<Calendar className="w-6 h-6 text-rose-600" />
								<span className="elegant-font">
									on 5th November 2025, 6:00 PM
								</span>
							</div>

							<div className="flex items-center justify-center space-x-3">
								<MapPin className="w-6 h-6 text-rose-600" />
								<span className="elegant-font">
									at Shubam Celebrations, Miyapur
								</span>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.6 }}
						viewport={{ once: true }}
						className="grid md:grid-cols-2 gap-8"
					>
						<div className="bg-white rounded-lg p-6 shadow-md border border-rose-100">
							<h3 className="romantic-font text-2xl text-rose-700 mb-4">
								Ceremony
							</h3>
							<p className="elegant-font text-gray-600 mb-2">
								Wedding Ceremony
							</p>
							<p className="text-gray-700">6:00 PM - 8:00 PM</p>
						</div>

						<div className="bg-white rounded-lg p-6 shadow-md border border-rose-100">
							<h3 className="romantic-font text-2xl text-rose-700 mb-4">
								Reception
							</h3>
							<p className="elegant-font text-gray-600 mb-2">
								Dinner & Celebration
							</p>
							<p className="text-gray-700">8:00 PM onwards</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.8, duration: 0.6 }}
						viewport={{ once: true }}
						className="mt-12"
					>
						<p className="romantic-font text-xl text-rose-600 italic">
							"Two hearts, one love, one life together"
						</p>
						<div className="w-24 h-1 bg-rose-400 mx-auto mt-4"></div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default InvitationSection;
