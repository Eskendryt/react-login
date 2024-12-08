function Button() {
    const handleClick = (e) => e.target.textContent = "OUCH! 🤕";
  
    return <button onDoubleClick={handleClick}>Click me 😁</button>;
  }
  
  export default Button;
  