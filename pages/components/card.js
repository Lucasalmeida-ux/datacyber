export default function CardCollapseble({ children, title}) {
  var id = title.replace(/\s/g, '');
  return (
    <div id="card">
      <input type="checkbox" id={id} />
      <label className="collapse" for={id}>
        <h3 className="has-background-white-ter py-2 px-3 my-2 box">{title}</h3>
        <div className="details has-background-white-bis px-3 py-3">{children}</div>
      </label>
      
    </div>

  )
}
