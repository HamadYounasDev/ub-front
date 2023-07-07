import React from 'react';

// ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }


  render() {

    if (this.state.hasError) {
      // Render fallback UI when there's an error
      return <h1>Its the fallback UI</h1>;
    }

    // Render the children if there's no error
    return this.props.children;
  }
}

export default ErrorBoundary