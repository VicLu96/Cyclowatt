export function VideoSection() {
  return (
    <section className="py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src="/video_cycling_power_meter_finale.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
