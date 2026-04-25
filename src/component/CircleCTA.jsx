function CircleCTA() {
  return (
    <div className="relative w-[180px] h-[180px] group cursor-pointer">
      
      {/* 🔥 BLACK OUTER CIRCLE */}
      <div className="absolute inset-0 bg-black rounded-full"></div>

      {/* 🔥 ROTATING TEXT (VISIBLE ABOVE BLACK) */}
      <div className="absolute inset-0 flex items-center justify-center animate-spin-slow group-hover:[animation-play-state:paused] z-10">
        
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="
                M 100,100
                m -70,0
                a 70,70 0 1,1 140,0
                a 70,70 0 1,1 -140,0
              "
            />
          </defs>

          <text fill="#facc15" fontSize="20" fontWeight="600" letterSpacing="2">
            <textPath href="#circlePath">
              ONLINE ORDERING NOW AVAILABLE  ONLINE ORDERING NOW AVAILABLE 
            </textPath>
          </text>
        </svg>
      </div>

      {/* 🔥 INNER YELLOW BUTTON */}
      <div className="absolute inset-[25px] bg-yellow-400 rounded-full flex items-center justify-center text-center font-bold text-black text-lg z-20 m-3">
        CLICK <br /> HERE
      </div>
    </div>
  );
}

export default CircleCTA;