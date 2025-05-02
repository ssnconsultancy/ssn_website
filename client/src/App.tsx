import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Team from "@/pages/team";
import SuccessStory from "@/pages/success-story";
import WhyChooseUs from "@/pages/why-choose-us";
import Contact from "@/pages/contact";
import CeoMessage from "@/pages/ceo-message";
import { useEffect } from "react";

function Router() {
  const [location] = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/team" component={Team} />
          <Route path="/success-story" component={SuccessStory} />
          <Route path="/why-choose-us" component={WhyChooseUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/ceo-message" component={CeoMessage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
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
