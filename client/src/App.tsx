import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Website from "@/pages/website";
import DigitalBusinessStart from "@/pages/digital-business-start";
import DigitalMarketing from "@/pages/digital-marketing";
import Automation from "@/pages/automation";
import Karriar from "@/pages/karriar";
import JuniorContentCreator from "@/pages/junior-content-creator";
import SalesRole from "@/pages/sales-role";
import Contact from "@/pages/contact";
import AlmannaVillkor from "@/pages/allmanna-villkor";
import Integritetspolicy from "@/pages/integritetspolicy";
import NotFound from "@/pages/not-found";
import Success from "@/pages/success";
import Cancel from "@/pages/cancel";

function Router() {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/website" component={Website} />
          <Route path="/website/digital-business-start" component={DigitalBusinessStart} />
          <Route path="/digital-marketing" component={DigitalMarketing} />
          <Route path="/automation" component={Automation} />
          <Route path="/karriar" component={Karriar} />
          <Route path="/karriar/junior-content-creator" component={JuniorContentCreator} />
          <Route path="/karriar/sales" component={SalesRole} />
          <Route path="/contact" component={Contact} />
          <Route path="/allmanna-villkor" component={AlmannaVillkor} />
          <Route path="/integritetspolicy" component={Integritetspolicy} />
          <Route path="/success" component={Success} />
          <Route path="/cancel" component={Cancel} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router />
  );
}

export default App;
