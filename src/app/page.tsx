"use client";
import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";

export default function Page() {
  return (
    <div className="bg-[#10141b] text-white">
      <Header />
      <div className="w-full">
        <a href="/" className="block">
          <img
            src="https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018969.jpg&w=1920&q=75"
            alt="Banner phim"
            className="w-full h-auto object-cover"
          />
        </a>
      </div>
      <Footer />
    </div>
  );
}
