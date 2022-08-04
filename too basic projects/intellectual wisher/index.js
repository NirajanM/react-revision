// todos:
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
let text = "";
let mystyle = {
    color: ""
}
let currentDate = new Date();
let currentHour = parseInt(currentDate.getHours());

if (currentHour < 12) {
    text = "Good morning";
    mystyle.color = "red";

}
else if (currentHour < 18) {
    text = "Good Afternoon";
    mystyle.color = "green";
}
else {
    text = "Good evening";
    mystyle.color = "blue";
};



ReactDOM.render(
    <h1 style={mystyle}>{text}</h1>,
    document.getElementById("root")
)