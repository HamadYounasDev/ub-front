import React, {ReactNode} from 'react';


interface MyComponentProps {
  children: ReactNode;
}

interface MyComponentState {
  hasError: boolean
}

// ErrorBoundary component
class ErrorBoundary extends React.Component <MyComponentProps, MyComponentState> {
  constructor(props:any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state to show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
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