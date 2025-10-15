import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

const EventDetails = () => {
	return (
		<section id="details" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="elegant-font text-4xl md:text-5xl text-gray-800 mb-4">
						Event Details
					</h2>
					<p className="romantic-font text-xl text-rose-600 mb-8">
						Everything you need to know for our special day
					</p>
					<div className="w-24 h-1 bg-rose-400 mx-auto"></div>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Venue Information */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						viewport={{ once: true }}
						className="space-y-8"
					>
						<div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-lg p-8 shadow-lg">
							<div className="flex items-center mb-6">
								<MapPin className="w-8 h-8 text-rose-600 mr-3" />
								<h3 className="elegant-font text-2xl text-gray-800">
									Venue Location
								</h3>
							</div>

							<div className="space-y-4">
								<div>
									<h4 className="romantic-font text-xl text-rose-700 mb-2">
										Shubam Celebrations
									</h4>
									<p className="text-gray-600 leading-relaxed">
										Miyapur, Hyderabad
										<br />
										Telangana, India
									</p>
								</div>

								<div className="pt-4 border-t border-rose-200">
									<h5 className="font-semibold text-gray-700 mb-2">
										Getting There:
									</h5>
									<p className="text-sm text-gray-600">
										The venue is easily accessible by metro (Miyapur Metro
										Station) and has ample parking space for guests.
									</p>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-lg p-6 shadow-md border border-rose-100">
							<div className="flex items-center mb-4">
								<Clock className="w-6 h-6 text-rose-600 mr-3" />
								<h4 className="elegant-font text-xl text-gray-800">Schedule</h4>
							</div>

							<div className="space-y-3">
								<div className="flex justify-between">
									<span className="text-gray-600">Guest Arrival</span>
									<span className="font-medium">5:30 PM</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-600">Wedding Ceremony</span>
									<span className="font-medium">6:00 PM</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-600">Photography</span>
									<span className="font-medium">7:30 PM</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-600">Reception Dinner</span>
									<span className="font-medium">8:00 PM</span>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Contact and Additional Info */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						viewport={{ once: true }}
						className="space-y-8"
					>
						<div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-lg p-8 shadow-lg">
							<h3 className="elegant-font text-2xl text-gray-800 mb-6">
								Contact Information
							</h3>

							<div className="space-y-4">
								<div className="flex items-center">
									<Phone className="w-5 h-5 text-rose-600 mr-3" />
									<div>
										<p className="font-medium text-gray-700">Sam's Family</p>
										<p className="text-sm text-gray-600">+91 98765 43210</p>
									</div>
								</div>

								<div className="flex items-center">
									<Phone className="w-5 h-5 text-rose-600 mr-3" />
									<div>
										<p className="font-medium text-gray-700">Glory's Family</p>
										<p className="text-sm text-gray-600">+91 98765 43211</p>
									</div>
								</div>

								<div className="flex items-center">
									<Mail className="w-5 h-5 text-rose-600 mr-3" />
									<div>
										<p className="font-medium text-gray-700">Email</p>
										<p className="text-sm text-gray-600">
											samglory2025@email.com
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-lg p-6 shadow-md border border-rose-100">
							<h4 className="elegant-font text-xl text-gray-800 mb-4">
								Important Notes
							</h4>

							<div className="space-y-3 text-sm text-gray-600">
								<p>• Dress code: Formal/Traditional attire preferred</p>
								<p>• The ceremony will be conducted in English and Telugu</p>
								<p>• Parking is available at the venue</p>
								<p>• Please arrive 30 minutes before the ceremony</p>
								<p>• Gifts are optional, your presence is the greatest gift</p>
							</div>
						</div>

						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="w-full bg-rose-600 text-white px-6 py-4 rounded-lg elegant-font text-lg hover:bg-rose-700 transition-colors duration-200 shadow-lg flex items-center justify-center space-x-2"
						>
							<Navigation className="w-5 h-5" />
							<span>Get Directions</span>
						</motion.button>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.6 }}
					viewport={{ once: true }}
					className="mt-16 text-center"
				>
					<div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-lg p-8 max-w-3xl mx-auto">
						<h3 className="romantic-font text-2xl text-rose-700 mb-4">
							We Can't Wait to Celebrate With You!
						</h3>
						<p className="elegant-font text-lg text-gray-700 leading-relaxed">
							Your presence on our special day would mean the world to us. We
							look forward to celebrating this joyous occasion with our family
							and friends.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default EventDetails;
