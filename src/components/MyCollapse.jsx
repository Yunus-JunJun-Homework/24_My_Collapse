import React from 'react';
import { useState, useEffect } from 'react';
import { Collapse } from 'bootstrap';

function MyCollapse(props) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const myCollapse = document.getElementById('collapseTarget');
    const bsCollapse = new Collapse(myCollapse, { toggle: false });
    toggle ? bsCollapse.show() : bsCollapse.hide();
  });

  const onChange = () => setToggle((toggle) => !toggle);

  return (
    <div className="my-collapse">
      <button className="btn btn-primary" onClick={onChange}>
        Click me
      </button>
      <div className="collapse" id="collapseTarget">
        {props.text}
      </div>
    </div>
  );
}

export default MyCollapse;
