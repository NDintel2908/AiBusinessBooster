import { Suspense, lazy } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import React from 'react';

const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const PricingComparison = lazy(() => import("@/pages/PricingComparison"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const PaymentPolicy = lazy(() => import("@/pages/PaymentPolicy"));

// HelpButton component
function HelpButton() {
  const handleClick = () => {
    window.open("https://zalo.me/3297451762229454190", "_blank");
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
  };

  const hoverStyle = {
    opacity: 0.8,
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      Help
    </button>
  );
}


function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/payment-policy" component={PaymentPolicy} />
        <Route path="/pricing-comparison" component={PricingComparison} />
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <HelpButton /> {/* Add HelpButton here */}
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;