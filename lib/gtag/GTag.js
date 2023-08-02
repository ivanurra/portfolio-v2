import Script from "next/script";

export const GTag = () => {
  return (
    <div>
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID" />
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'GA_TRACKING_ID');
      `}
      </Script>
    </div>
  );
};
