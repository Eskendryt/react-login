

function Button(){

    const handleClick = () => console.log("OUCH!");

    const handleClick2 = (name) => console.log(`${name} Stop clicking me`);

    return(<Button>Click me 😁 </Button>);
    

}

export default Button 