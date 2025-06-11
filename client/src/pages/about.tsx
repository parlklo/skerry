export default function About() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Photo */}
          <div className="lg:col-span-1">
            {/* Professional headshot of founder */}
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
              alt="Founder headshot" 
              className="rounded-2xl shadow-lg w-full aspect-square object-cover"
            />
            <div className="mt-6 p-6 bg-warm-gray-100 rounded-xl">
              <div className="text-sm text-warm-gray-600 mb-2">Currently</div>
              <div className="font-semibold text-warm-gray-900">Building tools that help people build better stuff</div>
            </div>
          </div>

          {/* Story */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl sm:text-5xl font-black mb-8 text-warm-gray-900">
              Hey, I'm the person<br />
              <span className="text-skerry-orange-500">behind Skerry</span>
            </h1>

            <div className="prose prose-lg prose-warm-gray max-w-none">
              <p className="text-xl text-warm-gray-600 leading-relaxed mb-6">
                I've done tech deals. Worked with startups that grew fast and ones that didn't. 
                Seen what works and what's just noise.
              </p>

              <p className="text-lg text-warm-gray-600 leading-relaxed mb-6">
                But here's what got me started with Skerry: I kept meeting people who were building 
                really important stuff—construction companies fixing our infrastructure, 
                startups solving real problems—and they were all stuck on the same boring business tasks.
              </p>

              <p className="text-lg text-warm-gray-600 leading-relaxed mb-6">
                The construction folks needed websites that didn't suck and systems to bring in steady work. 
                The startup teams needed market research that actually helped and outreach that didn't feel spammy.
              </p>

              <p className="text-lg text-warm-gray-600 leading-relaxed mb-8">
                So I started helping. Turns out, when you cut through the corporate consulting nonsense 
                and just focus on what people actually need, you can move pretty fast.
              </p>

              <div className="bg-skerry-orange-50 rounded-xl p-6 border border-skerry-orange-200">
                <p className="text-lg text-warm-gray-700 italic">
                  "I believe the best work happens when smart people have the right tools 
                  and don't have to waste time on stuff that should just work."
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-warm-gray-900 mb-2">What I'm good at</h3>
                  <ul className="text-warm-gray-600 space-y-1">
                    <li>• Seeing what actually matters</li>
                    <li>• Building systems that scale</li>
                    <li>• Writing copy that converts</li>
                    <li>• Cutting through the noise</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-warm-gray-900 mb-2">What I don't do</h3>
                  <ul className="text-warm-gray-600 space-y-1">
                    <li>• Long discovery phases</li>
                    <li>• Corporate consulting speak</li>
                    <li>• One-size-fits-all solutions</li>
                    <li>• Stuff that doesn't work</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
