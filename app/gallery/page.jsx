import GallerySection2 from "@/components/GallerySection2";
import VideoSection from "../../components/VideoSection";
import ConnectSection from "@/components/ConnectSection";

export const metadata = {
  title: "Gallery | Original Oils",
};

export default function GalleryPage() {
  return (
    <main className="border-2 border-black">
      <GallerySection2 />
      <VideoSection />
      <ConnectSection />
    </main>
  );
}
