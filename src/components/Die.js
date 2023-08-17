import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "EEEEEE",
  };
  return (
    <div className="die-face" style={styles} onClick={props.holdDice}>
      <img
        src={require(`../images/dice-${props.value}.png`)}
        alt="dice"
        className="dice-images"
      />
    </div>
  );
}
