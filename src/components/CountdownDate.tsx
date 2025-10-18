import React, { useEffect, useState } from 'react';

// Target wedding date/time in IST (UTC+5:30): Nov 5 2025 18:00 IST.
// We'll store target as UTC milliseconds for accurate diff.
const targetIST = () => {
	// Create date in IST by constructing with UTC then subtracting offset.
	// Simpler: Use Date with explicit time zone assumption by building components then adjusting.
	// 18:00 IST corresponds to 12:30 UTC (IST is +5:30), so target UTC = 2025-11-05T12:30:00Z
	return Date.UTC(2025, 10, 5, 12, 30, 0, 0); // month 10 = November
};

const TARGET_TIME = targetIST();

interface CountdownDateProps {
	className?: string;
}

const CountdownDate: React.FC<CountdownDateProps> = ({ className = '' }) => {
	const [now, setNow] = useState<number>(Date.now());

	useEffect(() => {
		const tick = setInterval(() => setNow(Date.now()), 1000);
		return () => clearInterval(tick);
	}, []);

	// Flip removed - always show countdown

	const diff = TARGET_TIME - now;
	const ended = diff <= 0;

	let countdownDisplay = "It's time!";
	if (!ended) {
		const totalSeconds = Math.floor(diff / 1000);
		const days = Math.floor(totalSeconds / 86400);
		const hours = Math.floor((totalSeconds % 86400) / 3600);
		const minutes = Math.floor((totalSeconds % 3600) / 60);
		const seconds = totalSeconds % 60;
		countdownDisplay = `${days}d ${hours}h ${minutes}m ${seconds}s`;
	}

	return (
		<div className={className}>
			<p className="elegant-font text-2xl md:text-3xl text-rose-700 font-semibold mb-2">
				{ended ? "Today's The Day!" : countdownDisplay}
			</p>
			{!ended && (
				<p className="text-sm text-gray-600">
					until November 5th, 2025 • 6:00 PM IST
				</p>
			)}
		</div>
	);
};

export default CountdownDate;
