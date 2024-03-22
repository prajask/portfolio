"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"

export default function SensorsOverview(){
    return(
        <>
            <article
                className="flex flex-col items-center justify-start
                border-b border-dark-primary
                lg:h-[65vh]
                lg:flex-row"
            >
                <section
                    className="w-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center
                    border-b border-dark-primary
                    lg:w-1/2 lg:h-full
                    lg:border-r lg:border-b-0"
                >
                    <h2
                        className="mb-[12px] text-xl"
                    >
                        Architectural Blueprint
                    </h2>
                    <h3
                        className="mb-[24px]
                        text-2xl font-semibold"
                    >
                        The&nbsp;
                        <span
                            className="bg-gradient-to-r from-visual_brain-primary via-dark-primary to-visual_brain-primary
                            text-transparent bg-clip-text
                            bg-[length:200%_auto]
                            animate-gradient"
                        >
                            Choice of Sensors
                        </span>
                    </h3>
                    <hr className="mb-4 border border-dark-primary"/>
                    <p
                        className="text-lg"
                    >
                        The choice of sensors became a pivotal decision that would dictate the fidelity and intuitiveness of the experience. Central to this endeavor were two types of sensors: a joystick for directional input and a pressure sensor for cue force, both interfacing with Arduino to translate physical cues into digital actions.
                    </p>
                    <hr className="my-4 border border-dark-primary"/>
                    <p
                        className="text-lg"
                    >
                        The joystick axis sensor was selected for capturing player movements, a crucial aspect in mimicking the aiming process of snooker. By converting the analog inputs from the joystick into a range of serial commands: &apos;move_left_slow&apos;, &apos;move_left_medium&apos;, and &apos;move_left_fast&apos;, along with their rightward counterparts, the system ensures a granular control over cue positioning.
                    </p>
                    <hr className="my-4 border border-dark-primary"/>
                    <p
                        className="text-lg"
                    >
                        The pressure sensor&apos;s role was to interpret the force behind each shot, converting analog pressure into &apos;hit_slow&apos;, &apos;hit_medium&apos;, and &apos;hit_fast&apos; commands. This choice allowed for a varied and realistic cueing experience, where the strength of the player&apos;s shot could be controlled, adding depth to the digital game.
                    </p>
                    <hr className="mt-4 border border-dark-primary"/>
                </section>

                <section
                    className="w-full
                    py-[24px]
                    flex flex-row items-center justify-center
                    lg:w-1/2 lg:h-full
                    lg:py-0"
                >
                    <RevealWrapper
                        origin='right' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[35%]"
                    >
                        <Image
                            className="w-full"
                            src={"/alt_pool/sensors_overview.png"}
                            width={574}
                            height={765}
                            alt="Initial Sensor Circuit"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>

            </article>
        </>
    )
}