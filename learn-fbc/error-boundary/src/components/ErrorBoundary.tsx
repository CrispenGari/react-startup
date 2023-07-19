import React from "react";

interface PropsType {
  children: React.ReactNode;
  fallback: any;
}
interface StateType {
  hasError: boolean;
}
export class ErrorBoundary extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }
  componentDidCatch = (error: Error, errorInfo: React.ErrorInfo): void => {
    console.log(error, errorInfo);
  };

  render() {
    const {
      state: { hasError },
      props: { children, fallback },
    } = this;
    return hasError ? fallback : children;
  }
}
