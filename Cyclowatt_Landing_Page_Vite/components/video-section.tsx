export function VideoSection() {
  return (
    <section className="pt-0 pb-0">
      <div className="relative w-full aspect-video overflow-hidden shadow-lg">
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="/cyclists.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}