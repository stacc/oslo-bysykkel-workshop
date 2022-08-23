import axios from "axios"

const mapboxAxios = axios.create({
    baseURL: "https://api.mapbox.com",
    params: {
        access_token: process.env.NEXT_PUBLIC_MAPBOX_TOKEN
    }
})

export const getCycleRoute = async (coordinates, options={format: "geojson"}) => {
    const points = coordinates.reduce((route, coord) => {
        return [route, `${coord.long},${coord.lat}`].filter(x=>!!x).join(";")
    }, "")

    const { data } = await  mapboxAxios.get(`/directions/v5/mapbox/cycling/${points}?continue_straight=true&geometries=${options.format}&overview=simplified`, {
    })
    return data
}

