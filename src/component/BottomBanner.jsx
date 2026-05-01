function BottomBanner() {
  return (
    <div className="w-full bg-yellow-400 text-black overflow-hidden relative group">
      <div className="animate-bounce-marquee group-hover:[animation-play-state:paused] py-2 font-semibold text-sm md:text-base whitespace-nowrap">
        💰 Get Free Delivery On Orders Above $40 Within 4 Km 🚚
      </div>
    </div>
  );
}

export default BottomBanner;