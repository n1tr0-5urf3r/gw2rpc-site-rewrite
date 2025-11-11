function Usage() {
  return (
    <article id="usage">
      <h1>Usage</h1>
      <p className="lead">Quick steps to get Discord Rich Presence working smoothly with Guild Wars 2.</p>
      <ul className="list-steps">
        <li>
          Run <code>gw2rpc.exe</code>. Keep it running in the background while you play.
        </li>
        <li>
          Optional: add your API key in <code>config.ini</code> to display your region (EU/NA) and guild tag.
        </li>
        <li>
          Use the convenience launcher <code>launch_gw2_with_rpc.exe</code> to start GW2 and GW2RPC together.
        </li>
        <li>
          For auto-start on boot, add <code>gw2rpc.exe</code> to your system startup.
        </li>
      </ul>
      <div className="callout">
        Place the launcher in <code>GW2FOLDER\\addons\\gw2rpc</code> to use it as your regular shortcut.
      </div>
    </article>
  )
}

export default Usage
