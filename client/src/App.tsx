import React from "react";
import { Switch, Route } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Website from "@/pages/website";
import DigitalMarketing from "@/pages/digital-marketing";
import Automation from "@/pages/automation";
import Contact from "@/pages/contact";
import AlmannaVillkor from "@/pages/allmanna-villkor";
import Integritetspolicy from "@/pages/integritetspolicy";
import NotFound from "@/pages/not-found";
import Success from "@/pages/success";
import Cancel from "@/pages/cancel";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/website" component={Website} />
          <Route path="/digital-marketing" component={DigitalMarketing} />
          <Route path="/automation" component={Automation} />
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
