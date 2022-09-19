import React from "react";
import './Stats.css'

function Stats() {
    
    return (
        <div class="Stats">
            <div class="Data">
                <h2>Tool Stats <p class="data__scroll"> (Scroll)</p></h2>
                <hr/>
                <h3>Speed</h3>
                <hr/>
                <div class="data__bar">
                    <div class="data__progress"/>
                </div>
                <h3>Range</h3>
                <hr/>
                <div class="data__bar">
                    <div class="data__progress"/>
                </div>
                <h3>Damage</h3>
                <div class="data__bar">
                    <div class="data__progress"/>
                </div>
                <hr/>
                <h3>Radius</h3>
                <div class="data__bar">
                    <div class="data__progress"/>
                </div>
                <hr/>
                <h3>Efficiency</h3>
                <hr/>
                <div class="data__bar">
                    <div class="data__progress"/>
                </div>
                <div>
                    <br/>
                    Hello world!
                </div>
            </div>
        </div>
    );
}

export default Stats;