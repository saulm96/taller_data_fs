import "./submitbutton.css";

const SubmitButton = () => {
  return (
    <button type="submit" className="btn">
      <strong>SPACE</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  );
};

export default SubmitButton
