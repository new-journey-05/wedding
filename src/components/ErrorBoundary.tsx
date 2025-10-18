import React, { Component, ReactNode } from 'react';

interface Props {
	children: ReactNode;
	fallback?: ReactNode;
}

interface State {
	hasError: boolean;
	error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error('ErrorBoundary caught an error:', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			if (this.props.fallback) {
				return this.props.fallback;
			}

			return (
				<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-200 via-pink-100 to-rose-300">
					<div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md mx-4">
						<div className="text-6xl mb-4">💔</div>
						<h1 className="text-2xl font-bold text-gray-800 mb-4">
							Oops! Something went wrong
						</h1>
						<p className="text-gray-600 mb-6">
							We're sorry, but something unexpected happened. Please try
							refreshing the page.
						</p>
						<button
							onClick={() => window.location.reload()}
							className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition-colors"
						>
							Refresh Page
						</button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
