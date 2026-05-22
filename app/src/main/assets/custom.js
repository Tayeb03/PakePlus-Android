window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});(function() {
    // 1. Define common CSS selectors used by ad networks
    const adSelectors = [
        '.ad', '.ads', '.adsbygoogle', '.ad-box', '.ad-container', '.ad-wrapper',
        '#ad-slot', '[id^="div-gpt-ad"]', '[class*="sponsor"]', '[class*="ad-banner"]',
        'iframe[src*="googleads"]', 'iframe[src*="doubleclick"]', 'amp-ad'
    ];

    // 2. Core function to find and remove ad elements
    function removeAds() {
        adSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                // Completely remove the element from the layout
                el.style.display = 'none'; 
                el.remove();
            });
        });

        // 3. Clean up broken layouts or floating text leftovers from blocked iframes
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            const src = iframe.src || '';
            if (src.includes('ads') || src.includes('track') || src.includes('doubleclick')) {
                iframe.remove();
            }
        });
    }

    // Run immediately when the page structure is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', removeAds);
    } else {
        removeAds();
    }

    // Run again when all assets finish loading
    window.addEventListener('load', removeAds);

    // 4. Interval loop to catch dynamic ads loaded via AJAX/Scroll events
    setInterval(removeAds, 1500);
})();
