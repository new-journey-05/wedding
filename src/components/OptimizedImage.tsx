import { useState } from 'react';

interface OptimizedImageProps {
	src: string;
	alt: string;
	className?: string;
	loading?: 'lazy' | 'eager';
	style?: React.CSSProperties;
}

const OptimizedImage = ({
	src,
	alt,
	className = '',
	loading = 'lazy',
	style,
}: OptimizedImageProps) => {
	const [imageError, setImageError] = useState(false);
	const [imageLoaded, setImageLoaded] = useState(false);

	// Generate WebP path from original path
	const generateWebPPath = (originalPath: string) => {
		return originalPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
	};

	const handleError = () => {
		setImageError(true);
	};

	const handleLoad = () => {
		setImageLoaded(true);
	};

	if (imageError) {
		return (
			<div
				className={`bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center ${className}`}
			>
				<div className="text-center text-rose-600 p-4">
					<svg
						className="w-12 h-12 mx-auto mb-2"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fillRule="evenodd"
							d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
							clipRule="evenodd"
						/>
					</svg>
					<p className="text-sm">Image not found</p>
					<p className="text-xs text-rose-500 mt-1">
						Add photos to src-images/ and run
						<br />
						<code className="bg-white/50 px-1 rounded">
							npm run optimize-images
						</code>
					</p>
				</div>
			</div>
		);
	}

	return (
		<picture className={`relative ${className}`} style={style}>
			{/* WebP version for modern browsers */}
			<source srcSet={generateWebPPath(src)} type="image/webp" />

			{/* Fallback to original image */}
			<img
				src={src}
				alt={alt}
				loading={loading}
				onError={handleError}
				onLoad={handleLoad}
				className={`transition-opacity duration-300 ${
					imageLoaded ? 'opacity-100' : 'opacity-0'
				} w-full h-full object-cover`}
				style={{ imageOrientation: 'from-image' }}
			/>

			{/* Loading placeholder */}
			{!imageLoaded && !imageError && (
				<div
					className={`absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-200 animate-pulse flex items-center justify-center`}
				>
					<div className="text-rose-400">
						<svg
							className="w-8 h-8 animate-spin"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							></circle>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
					</div>
				</div>
			)}
		</picture>
	);
};

export default OptimizedImage;
