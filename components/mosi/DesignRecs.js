import Image from "next/image";

const DesignRecs = () => {
  return (
    <>
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
                    Design Rec #1
                </h3>

                <h4
                    className="section-subtitle"
                >
                    Removable String-Type Texture on the Touchpad
                </h4>

                <p
                    className="text-lg"
                >
                    One important feature from the Feature Requests Matrix was the Removable String-Type Texture for Nova&apos;s touchpad. This feature was created for Strum Mode, where Nova functions like a regular guitar, allowing users to &quot;strum&quot; the touchpad. To make the experience feel more like playing a real guitar, the removable string texture can be placed over the touchpad. This helps users feel where to position their fingers, making it feel more like strumming a traditional guitar. This tactile feedback makes the user experience better.
                </p>

                <div
                    className="my-10
                    p-5
                    border border-text-primary rounded-3xl
                    flex flex-col items-center gap-12
                    xl:flex-row"
                >
                    <Image
                        className="w-full rounded-xl"
                        src="/mosi/string-texture-spacing.png"
                        alt="String Texture Spacing"
                        width={140}
                        height={121}
                    />

                    <Image
                        className="w-full rounded-xl"
                        src="/mosi/string-texture-prototype.png"
                        alt="String-Type Texture Prototype"
                        width={251}
                        height={159}
                    />
                </div>
            </div>
        </section>

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
                Design Rec #2
            </h3>

            <h4
                className="section-subtitle"
            >
                Physical Knob Selectors
            </h4>

            <p
                className="text-lg"
            >
                Another important feature from the Feature Requests Matrix was the addition of Physical Knob Selectors. While the X, Y, and Z axes of the touchpad can control various sound settings in a DAW, like pitch and volume, users found it more intuitive to control these settings with physical knobs, similar to how traditional guitars work. Adding these knobs wouldn&apos;t just make volume and pitch control easier, but would also give users the option to map them to other settings they want quick access to, alongside the touchpad controls. This feature improves the user experience by offering an additional way to adjust key sound settings.
            </p>

            <Image
                className="my-10 p-5
                border border-text-primary rounded-3xl"
                src="/mosi/physical-knob-selector.png"
                alt="Illustration for physical knob selector design rec"
                width={1920}
                height={1080}
            />
        </div>
        </section>
    </>
  )
}

export default DesignRecs