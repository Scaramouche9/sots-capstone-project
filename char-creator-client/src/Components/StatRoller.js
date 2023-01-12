import React, { useState } from "react";

export default function StatRoller(props) {


    const [statArray, setStatArray] = useState([]);
    const [visible, setVisible] = useState(false);
    const handleClick = () => {
        var newArray = [];
        for (let i = 0; i < 6; i++) {
            var statRolls = [];
            for (let j = 0; j < 4; j++) {
                var roll = (Math.floor(Math.random() * 6) + 1);
                statRolls.push(roll);       
            }
            statRolls.sort();
            newArray.push(statRolls[1] + statRolls[2] + statRolls[3])
        }
        newArray.sort(function(a, b){return a-b});
        setStatArray(newArray);

        props.setStrength(String(statArray[0]))
        props.setDexterity(String(statArray[1]))
        props.setConstitution(String(statArray[2]))
        props.setIntelligence(String(statArray[3]))
        props.setWisdom(String(statArray[4]))
        props.setCharisma(String(statArray[5]))

        //setVisible(true);
    }



    return (

        <section>
            <button type="button" onClick = {() => handleClick()}>Roll Stats!</button> 
            {/* {visible && <p>Stats: {statArray[0]}, {statArray[1]}, {statArray[2]}, {statArray[3]}, {statArray[4]}, {statArray[5]}</p>} */}
            
        </section>

    )
    
}