const Background = () => {
  return (
    <section
        className="case-study-section"
    >
        <div
            className="w-11/12
            max-w-7xl
            mx-auto"
        >
            <h3
                className="section-title"
            >
                Background
            </h3>

            <h4
                className="section-subtitle"
            >
                <span
                    className="bg-gradient-to-r from-mosi-secondary via-text-primary to-mosi-secondary
                    text-transparent bg-clip-text
                    bg-[length:200%_auto]
                    animate-gradient"
                >
                    Synth connection
                </span>
                &nbsp;at your fingertips
            </h4>

            <p
                className="text-lg"
            >
                The Nova is a <span className="text-mosi-secondary">MIDI controller</span> designed from the ground up <span className="text-mosi-secondary">to push synthesizers to the next level</span>.
                It gives musicians and producers <span className="text-mosi-secondary">expressive freedom</span> typically found only in acoustic instruments.
            </p>
        </div>
    </section>
  )
}

export default Background