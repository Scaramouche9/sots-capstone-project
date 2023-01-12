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
        switch(props.characterClass) {
            case 1:
                console.log("Cleric");
                props.setStrength(String(statArray[2]))
                props.setDexterity(String(statArray[3]))
                props.setConstitution(String(statArray[4]))
                props.setIntelligence(String(statArray[1]))
                props.setWisdom(String(statArray[5]))
                props.setCharisma(String(statArray[0]))
                break;
            case 2:
                console.log("Fighter");
                props.setStrength(String(statArray[5]))
                props.setDexterity(String(statArray[3]))
                props.setConstitution(String(statArray[4]))
                props.setIntelligence(String(statArray[1]))
                props.setWisdom(String(statArray[2]))
                props.setCharisma(String(statArray[0]))
                break;
            case 3:
                console.log("Rogue");
                props.setStrength(String(statArray[0]))
                props.setDexterity(String(statArray[5]))
                props.setConstitution(String(statArray[3]))
                props.setIntelligence(String(statArray[2]))
                props.setWisdom(String(statArray[1]))
                props.setCharisma(String(statArray[4]))
                break;
            case 4:
                console.log("Wizard");
                props.setStrength(String(statArray[0]))
                props.setDexterity(String(statArray[4]))
                props.setConstitution(String(statArray[3]))
                props.setIntelligence(String(statArray[5]))
                props.setWisdom(String(statArray[2]))
                props.setCharisma(String(statArray[1]))
                break;
            default:
                console.log("Default");
                props.setStrength(String(statArray[0]))
                props.setDexterity(String(statArray[1]))
                props.setConstitution(String(statArray[2]))
                props.setIntelligence(String(statArray[3]))
                props.setWisdom(String(statArray[4]))
                props.setCharisma(String(statArray[5]))       
        }
        

        //setVisible(true);
    }



    return (

        <section>
            <button type="button" onClick = {() => handleClick()}>Roll Stats!</button> 
            {/* {visible && <p>Stats: {statArray[0]}, {statArray[1]}, {statArray[2]}, {statArray[3]}, {statArray[4]}, {statArray[5]}</p>} */}
            
        </section>

    )
    
}