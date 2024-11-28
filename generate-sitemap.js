const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

(async () => {
  // Define static URLs
  const staticUrls = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/about-us", changefreq: "monthly", priority: 0.8 },
    { url: "/services", changefreq: "monthly", priority: 0.8 },
    { url: "/testimonials", changefreq: "monthly", priority: 0.7 },
    { url: "/contact-us", changefreq: "monthly", priority: 0.7 },
    { url: "/careers", changefreq: "monthly", priority: 0.6 },
  ];

  // Define dynamic URLs (service pages)
  const dynamicUrls = [
    { url: "/services/robotic-process-automation", changefreq: "weekly", priority: 0.9 },
    { url: "/services/chatbots", changefreq: "weekly", priority: 0.9 },
    { url: "/services/cybersecurity", changefreq: "weekly", priority: 0.9 },
    { url: "/services/financial-software", changefreq: "weekly", priority: 0.9 },
    { url: "/services/ai-solutions", changefreq: "weekly", priority: 0.9 },
    { url: "/services/supply-chain-solutions", changefreq: "weekly", priority: 0.9 },
  ];

  // Combine static and dynamic URLs
  const urls = [...staticUrls, ...dynamicUrls];

  // Create the sitemap stream
  const sitemap = new SitemapStream({ hostname: "https://www.nexifies.com" });

  // Pipe the stream to a file
  const writeStream = createWriteStream("./public/sitemap.xml");
  sitemap.pipe(writeStream);

  // Add each URL to the sitemap
  urls.forEach((urlConfig) => sitemap.write(urlConfig));

  sitemap.end();

  // Wait for the sitemap to finish and save
  await streamToPromise(sitemap);
  console.log("Sitemap.xml has been generated successfully!");
})();
