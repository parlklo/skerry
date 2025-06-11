import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, Phone, Edit, Wand2, CheckCircle } from "lucide-react";

export default function Construction() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl sm:text-6xl font-black mb-6 text-warm-gray-900">
            For Real-World<br />
            <span className="text-skerry-orange-500">Builders</span>
          </h1>
          <p className="text-xl text-warm-gray-600 max-w-3xl leading-relaxed">
            You build things that matter. Let me help you build the business side just as strong—
            with systems that work, not software that gets in your way.
          </p>
        </div>

        {/* Service Blocks */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Website */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow lg:transform lg:translate-y-4">
            <div className="mb-6">
              <div className="w-16 h-16 bg-skerry-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Globe className="text-skerry-orange-500 text-2xl" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-warm-gray-900">A website that just works</h3>
              <p className="text-warm-gray-600 mb-6 text-lg">
                No fancy nonsense. Just a clean, professional site that shows your work, 
                explains what you do, and makes it easy for people to call you.
              </p>
              <ul className="space-y-2 text-warm-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  Works great on phones
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  Easy to update yourself
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  Shows up in local searches
                </li>
              </ul>
            </div>
          </div>

          {/* Systems */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Phone className="text-green-500 text-2xl" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-warm-gray-900">Simple systems to get more calls</h3>
              <p className="text-warm-gray-600 mb-6 text-lg">
                Set up the basics that bring in steady work: online reviews that matter, 
                simple ways to follow up with leads, and systems that work even when you're busy.
              </p>
              <div className="bg-warm-gray-50 rounded-xl p-4">
                <div className="text-sm text-warm-gray-500 mb-2">Last 30 days</div>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold text-green-500">+47%</div>
                  <div className="text-warm-gray-600">more inquiries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Writing */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Edit className="text-blue-500 text-2xl" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-warm-gray-900">Help writing what you actually want to say</h3>
              <p className="text-warm-gray-600 mb-6 text-lg">
                Proposals, emails, website copy—written in your voice, not corporate speak. 
                Clear, honest, and gets the point across.
              </p>
              <div className="bg-warm-gray-50 rounded-xl p-4 italic text-warm-gray-600 border-l-4 border-blue-300">
                "We've been doing quality work in this area for 15 years. 
                Here's what we can do for your project..."
              </div>
            </div>
          </div>

          {/* Automation */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow lg:transform lg:translate-y-4">
            <div className="mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Wand2 className="text-purple-500 text-2xl" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-warm-gray-900">Speed up boring tasks with smart tools</h3>
              <p className="text-warm-gray-600 mb-6 text-lg">
                Estimate templates, automated scheduling, simple invoicing. 
                The kind of stuff that saves you hours every week without making things complicated.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-warm-gray-50 rounded-lg p-3">
                  <span className="text-warm-gray-600">Estimate created</span>
                  <span className="text-green-500 font-semibold">2 min</span>
                </div>
                <div className="flex items-center justify-between bg-warm-gray-50 rounded-lg p-3">
                  <span className="text-warm-gray-600">Follow-up sent</span>
                  <span className="text-green-500 font-semibold">Auto</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial-style quote */}
        <div className="bg-warm-gray-100 rounded-2xl p-8 lg:p-12 mb-16">
          <blockquote className="text-2xl lg:text-3xl font-medium text-warm-gray-800 text-center leading-relaxed">
            "Finally, someone who gets that we don't need fancy software—
            we need stuff that works and doesn't waste our time."
          </blockquote>
          <div className="text-center mt-6">
            <div className="text-warm-gray-600">— Local contractor (name withheld for privacy)</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-skerry-orange-500 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">Let's build something better</h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            No long calls or complicated contracts. Just practical help that makes your business run smoother.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-skerry-orange-500 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-warm-gray-50 transition-colors h-auto">
              Say Hey
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
