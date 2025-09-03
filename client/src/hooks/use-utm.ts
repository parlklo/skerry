import { useEffect, useState } from 'react';
import { getActiveUTMParams, saveUTMParams, type UTMParams } from '@/lib/utm';

/**
 * Hook för att hantera UTM-parametrar i React-komponenter
 */
export function useUTM() {
  const [utmParams, setUtmParams] = useState<UTMParams>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Läs UTM-parametrar när komponenten mountar
    const params = getActiveUTMParams();
    setUtmParams(params);
    setIsLoaded(true);

    // Spara om vi hittade nya parametrar i URL:en
    if (params.utm_platform || params.utm_content_type || params.utm_creator) {
      saveUTMParams(params);
    }
  }, []);

  return {
    utmParams,
    isLoaded,
    hasUTMData: !!(utmParams.utm_platform || utmParams.utm_content_type || utmParams.utm_creator)
  };
}
