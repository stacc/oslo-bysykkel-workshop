import styles from '../styles/Home.module.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import React from "react";
import dynamic from "next/dynamic";

export async function getStaticProps(context) {
    return {
        props: {
            pageTitle: "💖GIRLPOWER WORKSHOP💖",
        }, // will be passed to the page component as props
    }
}

const Map = dynamic(() => import("../config/Map"), {
    ssr: false
});

export default function Home() {
    return (
        <>
            <h3>Velkommen til workshop i regi av STACC💪</h3>
            <p>Program:</p>
            <Map style="mapbox://styles/mapbox/streets-v9"
            
                containerStyle={{
                    height: "100vh",
                    width: "100vw"}}/>
            </>
            )}