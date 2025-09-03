export interface UTMParams {
  utm_platform?: string;    // instagram, facebook, tiktok
  utm_content_type?: string; // story, post, reel, ad
  utm_creator?: string;     // edward, anna, marcus
}

/**
 * Läser UTM-parametrar från URL:en
 */
export function getUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  
  return {
    utm_platform: urlParams.get('utm_platform') || undefined,
    utm_content_type: urlParams.get('utm_content_type') || undefined, 
    utm_creator: urlParams.get('utm_creator') || undefined,
  };
}

/**
 * Sparar UTM-parametrar i localStorage för senare användning
 */
export function saveUTMParams(params: UTMParams): void {
  if (typeof window === 'undefined') return;
  
  // Spara bara om vi faktiskt har UTM-data
  if (params.utm_platform || params.utm_content_type || params.utm_creator) {
    localStorage.setItem('utm_params', JSON.stringify(params));
    localStorage.setItem('utm_timestamp', Date.now().toString());
  }
}

/**
 * Hämtar sparade UTM-parametrar från localStorage
 * Returnerar null om data är äldre än 30 dagar
 */
export function getSavedUTMParams(): UTMParams | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const savedParams = localStorage.getItem('utm_params');
    const timestamp = localStorage.getItem('utm_timestamp');
    
    if (!savedParams || !timestamp) return null;
    
    // Kontrollera om data är äldre än 30 dagar
    const thirtyDaysMs = 30 * 24 * 60 * 60 * 1000;
    if (Date.now() - parseInt(timestamp) > thirtyDaysMs) {
      // Rensa gammal data
      localStorage.removeItem('utm_params');
      localStorage.removeItem('utm_timestamp');
      return null;
    }
    
    return JSON.parse(savedParams);
  } catch (error) {
    console.error('Error reading UTM params from localStorage:', error);
    return null;
  }
}

/**
 * Hämtar UTM-parametrar (från URL eller localStorage)
 */
export function getActiveUTMParams(): UTMParams {
  // Försök först läsa från URL
  const urlParams = getUTMParams();
  
  // Om vi har nya UTM-parametrar i URL:en, spara dem
  if (urlParams.utm_platform || urlParams.utm_content_type || urlParams.utm_creator) {
    saveUTMParams(urlParams);
    return urlParams;
  }
  
  // Annars försök hämta sparade parametrar
  const savedParams = getSavedUTMParams();
  return savedParams || {};
}

/**
 * Rensa UTM-data (t.ex. vid logout eller när man vill börja om)
 */
export function clearUTMParams(): void {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem('utm_params');
  localStorage.removeItem('utm_timestamp');
}
