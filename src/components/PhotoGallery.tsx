import { motion } from 'framer-motion';
import { Camera, Heart } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const PhotoGallery = () => {
	// Using your actual engagement photos
	const galleryImages = [
		{
			id: 1,
			src: '/images/engagement/DSC04046.JPG',
			alt: 'Sam and Glory engagement photo 1',
			caption: 'The proposal moment',
		},
		{
			id: 2,
			src: '/images/engagement/DSC04284.JPG',
			alt: 'Sam and Glory engagement photo 2',
			caption: 'Celebrating our love',
		},
		{
			id: 3,
			src: '/images/engagement/DSC04599.JPG',
			alt: 'Sam and Glory engagement photo 3',
			caption: 'Perfect together',
		},
		{
			id: 4,
			src: '/images/engagement/DSC04660.JPG',
			alt: 'Sam and Glory engagement photo 4',
			caption: 'Our journey begins',
		},
		{
			id: 5,
			src: '/images/engagement/DSC04948.JPG',
			alt: 'Sam and Glory engagement photo 5',
			caption: 'Endless happiness',
		},
		{
			id: 6,
			src: '/images/engagement/DSC05044.JPG',
			alt: 'Sam and Glory engagement photo 6',
			caption: 'Forever and always',
		},
		{
			id: 7,
			src: '/images/engagement/DSC05061.JPG',
			alt: 'Sam and Glory engagement photo 7',
			caption: 'Beautiful memories',
		},
		{
			id: 8,
			src: '/images/engagement/DSC08132.JPG',
			alt: 'Sam and Glory engagement photo 8',
			caption: 'Love in bloom',
		},
		{
			id: 9,
			src: '/images/engagement/DSC08874.JPG',
			alt: 'Sam and Glory engagement photo 9',
			caption: 'Hearts united',
		},
		{
			id: 10,
			src: '/images/engagement/DSC08972.JPG',
			alt: 'Sam and Glory engagement photo 10',
			caption: 'Dreams come true',
		},
		{
			id: 11,
			src: '/images/engagement/DSC09083.JPG',
			alt: 'Sam and Glory engagement photo 11',
			caption: 'Blessed together',
		},
	];

	return (
		<section
			id="gallery"
			className="py-20 bg-gradient-to-br from-rose-50/60 to-pink-100/60 backdrop-blur-sm"
		>
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<motion.div
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
						transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
						viewport={{ once: true }}
						className="mb-8"
					>
						<Camera className="w-12 h-12 text-rose-600 mx-auto" />
					</motion.div>

					<h2 className="elegant-font text-4xl md:text-5xl text-gray-800 mb-4">
						Our Story
					</h2>
					<p className="romantic-font text-xl text-rose-600 mb-8">
						Capturing moments of our journey together
					</p>
					<div className="w-24 h-1 bg-rose-400 mx-auto"></div>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
					{galleryImages.map((image, index) => (
						<motion.div
							key={image.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.05 }}
							className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
						>
							<div className="aspect-w-4 aspect-h-5">
								<OptimizedImage
									src={image.src}
									alt={image.alt}
									className="w-full h-80 object-cover"
									loading={index < 2 ? 'eager' : 'lazy'}
								/>
							</div>

							<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
								<div className="p-4 text-white w-full">
									<p className="romantic-font text-lg">{image.caption}</p>
								</div>
							</div>

							<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<Heart className="w-6 h-6 text-white" fill="currentColor" />
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto shadow-lg">
						<Heart
							className="w-8 h-8 text-rose-600 mx-auto mb-4"
							fill="currentColor"
						/>
						<p className="elegant-font text-lg text-gray-700 leading-relaxed italic">
							"Every love story is beautiful, but ours is my favorite. From our
							first meeting to this special day, every moment has been a
							blessing. We can't wait to start this new chapter surrounded by
							our loved ones."
						</p>
						<div className="mt-6">
							<p className="romantic-font text-xl text-rose-700">
								— Sam & Glory
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default PhotoGallery;
