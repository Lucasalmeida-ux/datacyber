export default function CardCollapseble({ children, title}) {
  const idBox = Math.round(Math.random(1,5) * 1000);

  return (
    <div id="card">
      <input type="checkbox" id={idBox} />
      <label className="collapse" for={idBox}>
        <h3 className="has-background-white-ter py-2 px-3 my-2 box">{title}</h3>
        <div className="details has-background-white-bis px-3 py-3">{children}</div>
      </label>
      
    </div>

  );
}