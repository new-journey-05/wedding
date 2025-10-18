import React from 'react';
import { motion } from 'framer-motion';
import { getAssetPath } from '../utils/assetPath';

// Contract:
// Props:
//  image: base path under /images/backgrounds (supports webp + optional jpg fallback)
//  alt: descriptive alt (for accessibility when used as <img> fallback layer)
//  focal: optional object of breakpoint -> y percentage (string like '20%' ) controlling background-position-y
//  fixedOnDesktop: whether to use background-attachment: fixed on large screens
// Renders an absolutely positioned background layer with gradient overlay.
// We keep it separate from content to allow future focal point adjustments without touching main layout.

interface BackgroundImageProps {
	image: string; // e.g. 'DSC08132'
	alt?: string;
	focal?: {
		default?: string; // base y position
		lg?: string; // >=1024px
		md?: string; // 768-1023
		sm?: string; // 480-767
		xs?: string; // <480
	};
	fixedOnDesktop?: boolean;
	overlayCenter?: { x?: string; y?: string }; // percentage positions e.g. {x:'50%', y:'35%'}
	overlayOpacities?: [number, number, number, number]; // RGBA alpha stops for gradient
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
	image,
	alt = 'Wedding background image',
	focal = { default: '20%', lg: '20%', md: '25%', sm: '30%', xs: '35%' },
	fixedOnDesktop = true,
	overlayCenter = { x: '50%', y: '40%' }, // raise center slightly (40% Y) to favor faces higher in frame
	overlayOpacities = [0.1, 0.22, 0.42, 0.58],
}) => {
	// We'll utilize CSS variables to allow responsive overrides in global stylesheet if desired.
	// For now we implement inline style with media queries via a small style tag.
	const webpSrc = getAssetPath(`images/backgrounds/${image}.webp`);
	const jpgSrc = getAssetPath(`images/backgrounds/${image}.jpg`);

	return (
		<div aria-hidden="true" className="absolute inset-0 -z-10">
			{/* Responsive style injection for focal point */}
			<style>
				{`
          .bg-layer {
            background-position: center ${focal.default};
          }
          @media (max-width: 1024px) {
            .bg-layer { background-position: center ${
							focal.md || focal.default
						}; }
          }
          @media (max-width: 768px) {
            .bg-layer { background-position: center ${
							focal.sm || focal.md || focal.default
						}; }
          }
          @media (max-width: 480px) {
            .bg-layer { background-position: center ${
							focal.xs || focal.sm || focal.default
						}; }
          }
        `}
			</style>
			<motion.div
				className="bg-layer w-full h-full bg-gradient-to-br from-rose-200 via-pink-100 to-rose-300"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.2 }}
				style={{
					backgroundImage: `url('${webpSrc}')`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: fixedOnDesktop ? 'fixed' : 'scroll',
				}}
			/>
			{/* Radial fade overlay (lighter center, soft tinted edges) */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background: `radial-gradient(circle at ${overlayCenter.x} ${overlayCenter.y}, rgba(255,255,255,${overlayOpacities[0]}) 0%, rgba(255,255,255,${overlayOpacities[1]}) 35%, rgba(255,182,193,${overlayOpacities[2]}) 70%, rgba(255,182,193,${overlayOpacities[3]}) 100%)`,
				}}
			/>
			{/* Hidden fallback img so browser can still request jpg if webp unsupported (rare) */}
			<picture className="hidden">
				<source srcSet={webpSrc} type="image/webp" />
				<img src={jpgSrc} alt={alt} />
			</picture>
		</div>
	);
};

export default BackgroundImage;
