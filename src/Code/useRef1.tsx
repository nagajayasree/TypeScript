import * as React from "react";

function UseRefFComp() {
  const ipEl = React.useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    if (ipEl && ipEl.current) {
      ipEl.current.focus();
      console.log(ipEl.current);
    }
  };

  React.useEffect(() => {
    if (ipEl.current) {
      console.log(`HookRef input width:${ipEl.current.clientWidth}`);
    }
  }, []);

  return (
    <>
      <h3>UseRef in Func Comp</h3>
      <input ref={ipEl} type="text" style={{ width: "100%" }} />
      <button onClick={onButtonClick}>Focus the Input</button>
    </>
  );
}

export default UseRefFComp;
