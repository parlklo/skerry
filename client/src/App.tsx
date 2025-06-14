import React from "react";
import { Switch, Route } from "wouter";
import { Navigation } from "@/components/navigation";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import Success from "@/pages/success";
import Cancel from "@/pages/cancel";

function Router() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/success" component={Success} />
        <Route path="/cancel" component={Cancel} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <Router />
  );
}

export default App;
