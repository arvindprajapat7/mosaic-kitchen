function InnerBanner({ title, bgImage }) {
  return (
    <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Dark Overlay */}
      <div
  className="absolute inset-0"
  style={{
    background:
      "linear-gradient(99.16deg, #090909 2.67%, rgba(6, 6, 6, 0.9) 35.11%, rgba(36, 36, 36, 0.45) 99%)",
  }}
></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        
        <h1 className="text-[60px] md:text-[100px] font-extrabold text-transparent stroke-text leading-none">
          {title}
        </h1>

      </div>
    </section>
  );
}

export default InnerBanner;