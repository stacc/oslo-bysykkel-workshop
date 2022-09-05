import "mapbox-gl/dist/mapbox-gl.css";
import dynamic from "next/dynamic";
import styles from "../styles/Tasks.module.css";
import React from "react";
import {Marker} from "react-map-gl";
import Image from "next/image";


const Map = dynamic(() => import("../config/Map"), {
    ssr: false,
});

export default function Home() {
    return (
        <div className={styles.taskContainer}>
            <h3>Velkommen til workshop i regi av STACC💪</h3>
            <p>
                Vi skal i denne workshoppen lære litt om hvordan en bygger en web
                applikasjon med React, NextJS, Mapbox og Bergen Bysykkel sitt åpne API.
                Det er ingen krav om forkunnskaper for å delta, bare mor dere og prøv
                dere frem! Ingen spørsmål er for dumme og vi er her for å hjelpe dere så
                mye som vi klarer!
            </p>
            <br/>
            <Map height={"1000px"} width={"1000px"} zoom={14} longitude={5.3339957} latitude={60.3800099}>
                <Marker longitude={5.3315857} latitude={60.3809852}>
                    <Image
                        src="/stacc_icon_red.png"
                        width={"30px"}
                        height={"30px"}
                        className={styles.image}
                    />
                </Marker>
                <Marker longitude={5.3366241} latitude={60.3772036}>
                    <Image
                        src="/echo_logo.png"
                        width={"60px"}
                        height={"20px"}
                        className={styles.image}
                    />
                </Marker>
            </Map>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            pageTitle: "STACC WORKSHOP",
        }, // will be passed to the page component as props
    };
}
