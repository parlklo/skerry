import sweden from "@svg-maps/sweden"

type SwedenMapLocation = {
  id: string
  name: string
  path: string
}

const ServiceAreaMap = () => {
  const locations = (sweden.locations as SwedenMapLocation[]) || []

  const vb = Array.isArray(sweden.viewBox)
    ? (sweden.viewBox as number[]).join(" ")
    : (sweden.viewBox as unknown as string)

  const [viewBoxMinX, viewBoxMinY, viewBoxWidth, viewBoxHeight] = vb.split(" ").map(Number)
  
  // Definiera centrum för södra Sverige (exakt över Malmö-området)
  const centerX = viewBoxMinX + viewBoxWidth * 0.20
  const centerY = viewBoxMinY + viewBoxHeight * 0.92

  return (
    <div className="relative h-[400px] md:h-[440px] flex items-center justify-center overflow-hidden">
      <svg
        viewBox={vb}
        preserveAspectRatio="xMidYMid meet"
        className="block h-full max-h-full w-auto max-w-[500px] mx-auto"
        role="img"
        aria-label="Verksamhetsområde i Södra Sverige"
      >
        <title>Verksamhetsområde i Södra Sverige</title>
        <defs>
          {/* Mjuka radiella gradienter för verksamhetsområdet */}
          <radialGradient id="serviceAreaGradient" cx={centerX} cy={centerY} r={viewBoxWidth * 0.35} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#16A34A" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#22C55E" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#86EFAC" stopOpacity="0.4" />
            <stop offset="75%" stopColor="#86EFAC" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#86EFAC" stopOpacity="0.05" />
          </radialGradient>
          
          {/* Mjuk skuggning */}
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Clip path för att begränsa gradienten till Sverige */}
          <clipPath id="swedenClip">
            {locations.map((loc) => (
              <path key={`clip-${loc.id}`} d={loc.path} />
            ))}
          </clipPath>
        </defs>

        {/* Bas-kartan - alla regioner i ljusgrått */}
        <g vectorEffect="non-scaling-stroke">
          {locations.map((loc) => (
            <path
              key={loc.id}
              d={loc.path}
              fill="#f1f5f9"
              stroke="#e2e8f0"
              strokeWidth={0.8}
            >
              <title>{loc.name}</title>
            </path>
          ))}
        </g>

        {/* Mjuk gradient-overlay för verksamhetsområdet */}
        <g clipPath="url(#swedenClip)">
          <circle 
            cx={centerX} 
            cy={centerY} 
            r={viewBoxWidth * 0.35}
            fill="url(#serviceAreaGradient)"
            filter="url(#softGlow)"
          />
        </g>

        {/* Extra mjuk halo för kärnområdet */}
        <g clipPath="url(#swedenClip)">
          <circle 
            cx={centerX} 
            cy={centerY} 
            r={viewBoxWidth * 0.15}
            fill="#16A34A"
            opacity="0.3"
            filter="url(#softGlow)"
          />
        </g>
      </svg>


    </div>
  )
}

export default ServiceAreaMap


