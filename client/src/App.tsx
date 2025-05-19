import { Suspense, lazy } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const PricingComparison = lazy(() => import("@/pages/PricingComparison"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const PaymentPolicy = lazy(() => import("@/pages/PaymentPolicy"));
const PaymentRedirect = lazy(() => import("@/pages/PaymentRedirect"));

function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/payment-policy" component={PaymentPolicy} />
        <Route path="/pricing-comparison" component={PricingComparison} />
        <Route path="/redirect" component={PaymentRedirect} />
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
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
