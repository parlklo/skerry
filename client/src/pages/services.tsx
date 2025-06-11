import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, Wrench, Search, PaintBucket, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-black mb-6 text-warm-gray-900">
            Digital Services<br />
            <span className="text-skerry-orange-500">That Actually Work</span>
          </h1>
          <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
            We create professional websites and handle all the technical stuff so you can 
            focus on running your business. No jargon, no complicated processes—just results.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Website Creation */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-skerry-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Globe className="text-skerry-orange-500 text-2xl" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-warm-gray-900">Professional Website Creation</h3>
              <p className="text-warm-gray-600 mb-6 text-lg">
                Custom websites that look professional, load fast, and convert visitors into customers. 
                Designed specifically for your business and industry.
              </p>
              <ul className="space-y-3 text-warm-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Mobile-responsive design that works on all devices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Contact forms and online booking integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Professional photography and content creation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Local SEO optimization for better visibility</span>
                </li>
              </ul>
            </div>
            <div className="bg-warm-gray-50 rounded-xl p-4 border border-warm-gray-200">
              <div className="text-sm text-warm-gray-500 mb-2">Typical project timeline</div>
              <div className="text-2xl font-bold text-skerry-orange-500">2-3 weeks</div>
            </div>
          </div>

          {/* Ongoing Maintenance */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-200 hover:shadow-md transition-shadow">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Wrench className="text-green-500 text-2xl" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-warm-gray-900">Ongoing Maintenance & Support</h3>
              <p className="text-warm-gray-600 mb-6 text-lg">
                Your website needs regular care to stay secure, fast, and effective. 
                We handle all the technical maintenance so you don't have to worry about it.
              </p>
              <ul className="space-y-3 text-warm-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Regular security updates and backups</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Content updates and changes as needed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Performance monitoring and optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Priority support when you need help</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <div className="text-sm text-green-700 mb-2">Monthly maintenance</div>
              <div className="text-2xl font-bold text-green-600">Always included</div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-warm-gray-900">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* SEO Optimization */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-warm-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="text-blue-500" size={24} />
              </div>
              <h4 className="text-lg font-bold mb-2 text-warm-gray-900">Local SEO</h4>
              <p className="text-warm-gray-600 text-sm">
                Help customers find you online with local search optimization and Google My Business setup.
              </p>
            </div>

            {/* Branding */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-warm-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <PaintBucket className="text-purple-500" size={24} />
              </div>
              <h4 className="text-lg font-bold mb-2 text-warm-gray-900">Brand Identity</h4>
              <p className="text-warm-gray-600 text-sm">
                Logo design and brand guidelines to make your business look professional and consistent.
              </p>
            </div>

            {/* Security */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-warm-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-red-500" size={24} />
              </div>
              <h4 className="text-lg font-bold mb-2 text-warm-gray-900">Security & Backup</h4>
              <p className="text-warm-gray-600 text-sm">
                Comprehensive security measures and automated backups to protect your business data.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-warm-gray-100 rounded-2xl p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-warm-gray-900">How We Work Together</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h4 className="text-lg font-bold mb-2 text-warm-gray-900">Discovery Call</h4>
              <p className="text-warm-gray-600">
                We discuss your business, goals, and what you need from your website.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h4 className="text-lg font-bold mb-2 text-warm-gray-900">Design & Build</h4>
              <p className="text-warm-gray-600">
                We create your website and keep you updated throughout the process.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-skerry-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h4 className="text-lg font-bold mb-2 text-warm-gray-900">Launch & Support</h4>
              <p className="text-warm-gray-600">
                Your site goes live and we provide ongoing support and maintenance.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 mb-16 border border-warm-gray-200">
          <blockquote className="text-2xl lg:text-3xl font-medium text-warm-gray-800 text-center leading-relaxed mb-6">
            "Our new website has brought in more customers in 3 months than our old one did in 2 years. 
            The maintenance service means we never have to worry about technical issues."
          </blockquote>
          <div className="text-center">
            <div className="text-warm-gray-600">— Local Business Owner</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-skerry-orange-500 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a digital presence that grows your business.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-skerry-orange-500 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-warm-gray-50 transition-colors h-auto">
              Get Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}