import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { PaxStatus } from "./PaxStatus";

export enum RADAL_ITEM_COLOR { RED, YELLOW, GREEN }
export interface RadarItem {
    ID: string,
    color: RADAL_ITEM_COLOR
}
const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",
        position: "relative",
        justifyContent: "center",
        alignItems: "center"

    },
    radarImage: {
        flex: 1,
        width: null,
        height: null,
    },
    radarImagaeBack: {
        position: "absolute",
        width: "100%",
        height: "100%",

    },
    radarItems: {
        width: "80%",
        height: "80%",
        position: "absolute",
        borderRadius: 170,
        backgroundColor: "#F004"
    },
    paxStatus: {
        position: "absolute",
        width: "60%",
        height: "60%",
    }


})

interface Point {
    x: number,
    y: number
}

//Create Radar with  alarm alert, pax showing item showing their status
export const Radar = (props: { items: Array<RadarItem>, alarm: boolean }): React.ReactElement => {
    const [displayPaxStatus, setDisplayPaxStatus] = useState(false)
    const [count, setCount] = useState(0);

    const height = Dimensions.get("window").height * .55;
    const width = Dimensions.get("window").width * .22;
    var paxStatus;

    //map pax item as icon on radar
    //call for alarm if param:alarm is true
    if (props.alarm === true) {
        setTimeout(() => {
            if (count < 4)
                setCount(count + 1)
            else
                setCount(0)
        }, 200);
    }

   // useEffect(() => {
        paxStatus = generateRandomPointsWithMinDistance(width * .03, width, height * .03, height, props.items.length, 35).map((item, index) => {
            return <TouchableOpacity key={index} style={[{
                position: 'absolute',
                width: 25,
                height: 25,
                borderRadius: 13,
                backgroundColor: ["#F00", "#FF0", "#0F0"][props.items[index].color]
            }, { top: item.y, left: item.x }]} onPress={() => { setDisplayPaxStatus(true) }} />
        })
   // }, [paxStatus])


  

    return <View style={styles.background}>
        <View style={styles.radarImagaeBack}>
            <Image style={styles.radarImage} source={require("../assets/radar.gif")} />
        </View>
        <View style={styles.paxStatus}>
            {paxStatus}
           
        </View>
        {displayPaxStatus && <PaxStatus paxNumber="PAX-005-B" altitude={800} avgSpeed={20} display={setDisplayPaxStatus} />}
    </View>
}



//generate random point with mininum distance
function generateRandomPointsWithMinDistance(minX: number, maxX: number, minY: number, maxY: number, count: number, minDistance: number) {
    function distance(point1: Point, point2: Point) {
        // Calculate Euclidean distance between two points
        return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    }

    function isValidPoint(newPoint: Point, points: Array<Point>) {
        // Check if newPoint is at least minDistance away from all other points
        return points.every(point => distance(point, newPoint) >= minDistance);
    }

    let points = [];
    for (let i = 0; i < count; i++) {
        let newPoint;
        let attempts = 0;

        do {
            newPoint = {
                x: Math.random() * (maxX - minX) + minX,
                y: Math.random() * (maxY - minY) + minY,
            };

            // Limit the number of attempts to prevent an infinite loop
            if (++attempts > 100) {
                break;
            }
        } while (points.length > 0 && !isValidPoint(newPoint, points));

        points.push(newPoint);
    }

    return points;
}
