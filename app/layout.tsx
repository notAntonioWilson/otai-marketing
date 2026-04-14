import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title:"OTAI Marketing | Social Media Marketing for Business Growth",
  description:"We build your social media strategy, create AI-powered content, and post consistently across every platform. 20M+ lifetime views, 3+ years proven results, zero ad spend.",
  keywords:"social media marketing agency, organic social media growth, content creation business, social media management service, TikTok Instagram Facebook marketing",
  openGraph:{title:"OTAI Marketing | Social Media Marketing",description:"20M+ views. 3+ years. Zero paid ads. We handle your social media so you can handle your business.",url:"https://otaimarketing.com",siteName:"OTAI Marketing",type:"website"},
  twitter:{card:"summary_large_image",title:"OTAI Marketing",description:"Your business is invisible online. We fix that."},
  robots:{index:true,follow:true},
  alternates:{canonical:"https://otaimarketing.com"},
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return (<html lang="en"><head><link rel="icon" href="/favicon.ico"/></head><body>{children}</body></html>);
}
