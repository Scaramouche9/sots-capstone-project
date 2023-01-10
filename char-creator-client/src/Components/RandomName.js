import React from "react";
import {useState} from "react";
export default function RandomName() {

    const [randomName, setRandomName] = useState("");
    const namesArray = ["Alhandra", "Devis", "Ember", "Jozan", "Krusk", "Lidda", "Mialee", "Nebin", "Redgar", "Soveliss", 
    "Tordek", "Hennet", "Vadania", "Zeyrashi", "Voth", "Rijlan", "Leone", "Yivis", "Khrusos", "Soren", 
    "Joeri", "Aloros", "Bartleby Higgentot", "Pappardelle Marinara", "Lanceroy Fisticuff", "Brienya Glaseis Balorbane",
    "Plink Nimblerod", "Sandor Rastifar", "Solena Ember", "Gronk Umberbuck", "Grohl", "Druzilla Vizzick", "Briola Stonks",
    "Vance Avondale", "Alessandra Blueberry", "Codex", "Zaboo", "Vork", "Bladezz", "Clara", "Tinkerballa"]

    return (
        <section>
            <label>Generate a random name:</label>
            <button onClick = {() => setRandomName(randomName => namesArray[Math.floor(Math.random() * namesArray.length)] )}>Click!</button>
            <p>{randomName}</p>

        </section>
    )
    
}