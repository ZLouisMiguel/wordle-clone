const Keypad = ({ usedKeys, handleKeyUp }) => {
  const KEYS = [
    "q,w,e,r,t,y,u,i,o,p",
    "a,s,d,f,g,h,j,k,l",
    "↵,z,x,c,v,b,n,m,←",
  ];

  return (
    <div className="keypad">
      {KEYS.map((row, i) => (
        <div key={i} className="keypad-row">
          {row.split(",").map((letter) => {
            const color = usedKeys[letter];
            const isSpecial = letter === "↵" || letter === "←";
            return (
              <button
                key={letter}
                className={isSpecial ? "special-key" : color}
                onClick={() => handleKeyUp({ key: letter })}
              >
                {letter}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Keypad;
