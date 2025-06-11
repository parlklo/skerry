import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Map, Send, Presentation, Wrench } from "lucide-react";

export default function TechStartups() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl sm:text-6xl font-black mb-6 text-warm-gray-900">
            For Startups<br />
            <span className="text-skerry-orange-500">Moving Fast</span>
          </h1>
          <p className="text-xl text-warm-gray-600 max-w-3xl leading-relaxed">
            When you're building something new, every decision matters. I help startups cut through the noise 
            with tools, automation, and insights that actually move the needle.
          </p>
        </div>

        {/* Service Blocks */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Market Maps */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-skerry-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Map className="text-skerry-orange-500 text-2xl" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-warm-gray-900">Market Maps That Actually Help</h3>
              <p className="text-warm-gray-600 mb-4">
                Skip the generic research. Get custom market intelligence that shows you exactly where 
                the opportunities are and how to reach them.
              </p>
            </div>
            {/* Mock visual */}
            <div className="bg-warm-gray-50 rounded-xl p-4 border border-warm-gray-200">
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="h-6 bg-skerry-orange-200 rounded"></div>
                <div className="h-6 bg-warm-gray-200 rounded"></div>
                <div className="h-6 bg-warm-gray-200 rounded"></div>
                <div className="h-6 bg-warm-gray-200 rounded"></div>
                <div className="h-6 bg-skerry-orange-300 rounded"></div>
                <div className="h-6 bg-warm-gray-200 rounded"></div>
              </div>
              <div className="text-xs text-warm-gray-500">Market opportunity visualization</div>
            </div>
          </div>

          {/* Outreach Workflows */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Send className="text-green-500 text-2xl" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-warm-gray-900">Outreach Workflows That Scale</h3>
              <p className="text-warm-gray-600 mb-4">
                Turn manual outreach into systematic engines. Custom automations that feel personal 
                and actually get responses.
              </p>
            </div>
            {/* Mock visual */}
            <div className="bg-warm-gray-50 rounded-xl p-4 border border-warm-gray-200">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="h-2 bg-warm-gray-300 rounded flex-1"></div>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="h-2 bg-warm-gray-300 rounded flex-1"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="h-2 bg-warm-gray-200 rounded flex-1"></div>
              </div>
            </div>
          </div>

          {/* Pitch Prep */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Presentation className="text-blue-500 text-2xl" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-warm-gray-900">Pitch Prep With Context</h3>
              <p className="text-warm-gray-600 mb-4">
                Every investor is different. Get tailored pitch strategies with real insights 
                about what each fund actually cares about.
              </p>
            </div>
            {/* Mock visual */}
            <div className="bg-warm-gray-50 rounded-xl p-4 border border-warm-gray-200">
              <div className="grid grid-cols-4 gap-1 mb-3">
                <div className="aspect-square bg-blue-200 rounded"></div>
                <div className="aspect-square bg-blue-300 rounded"></div>
                <div className="aspect-square bg-warm-gray-200 rounded"></div>
                <div className="aspect-square bg-warm-gray-200 rounded"></div>
                <div className="col-span-4 h-2 bg-blue-100 rounded mt-1"></div>
              </div>
              <div className="text-xs text-warm-gray-500">Pitch deck optimization</div>
            </div>
          </div>

          {/* Tool Audits */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Wrench className="text-purple-500 text-2xl" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-warm-gray-900">Tool Audits That Save Time</h3>
              <p className="text-warm-gray-600 mb-4">
                Stop paying for tools you don't need. Get a complete audit of your tech stack 
                with recommendations that actually make sense.
              </p>
            </div>
            {/* Mock visual */}
            <div className="bg-warm-gray-50 rounded-xl p-4 border border-warm-gray-200">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="h-3 bg-red-200 rounded w-1/3"></div>
                  <span className="text-xs text-red-500">Remove</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="h-3 bg-green-200 rounded w-1/2"></div>
                  <span className="text-xs text-green-500">Keep</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="h-3 bg-yellow-200 rounded w-2/3"></div>
                  <span className="text-xs text-yellow-500">Optimize</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-warm-gray-900 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">Ready to move faster?</h3>
          <p className="text-xl text-warm-gray-300 mb-8 max-w-2xl mx-auto">
            Let's talk about where you're stuck and build a plan to get you unstuck.
          </p>
          <Link href="/contact">
            <Button className="bg-skerry-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-skerry-orange-600 transition-colors h-auto">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
