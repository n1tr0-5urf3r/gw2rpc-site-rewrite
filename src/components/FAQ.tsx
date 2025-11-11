function FAQ() {
  return (
    <article id="faq">
      <h1>F.A.Q.</h1>
      <div className="faq-item">
        <h3>Can I get banned for this?</h3>
        <p>No. It doesn’t interact with the game. It uses the Mumble API for read‑only data.</p>
      </div>
      <div className="faq-item">
        <h3>What API permissions are required for the API key?</h3>
        <p>Currently <code>characters</code>, <code>builds</code>, and <code>account</code>. More may be added over time for new features.</p>
      </div>
      <div className="faq-item">
        <h3>How can I use command line arguments with the launcher?</h3>
        <p>Use a <code>Settings.json</code> file. See the <a href="https://wiki.guildwars2.com/wiki/Command_line_arguments#Using_Command-Line_Arguments" target="_blank" rel="noreferrer">GW2 wiki</a> for details.</p>
      </div>
      <div className="faq-item">
        <h3>Can I use multiple API keys?</h3>
        <p>Yes. Separate multiple keys with commas in <code>config.ini</code>. No restart needed when switching accounts.</p>
      </div>
      <div className="faq-item">
        <h3>Can I disable Points of Interest display?</h3>
        <p>Yes. There are options in <code>config.ini</code> to disable it entirely or only in WvW.</p>
      </div>
      <div className="faq-item">
        <h3>Is GW2RPC open source?</h3>
        <p>Yes. The repository is available <a href="https://github.com/Maselkov/GW2RPC" target="_blank" rel="noreferrer">here</a>.</p>
      </div>
      <div className="faq-item">
        <h3>How do I set up multiboxing?</h3>
        <p>Use the <code>-mumble</code> launch parameter (also available in GW2Launcher). See the <a href="https://wiki.guildwars2.com/wiki/Command_line_arguments#-mumble_.3Cstring.3E" target="_blank" rel="noreferrer">wiki</a>.</p>
      </div>
      <div className="faq-item">
        <h3>How do I set up the raid announcer?</h3>
        <p>Create a Discord webhook and paste the URL into <code>config.ini</code> after <code>webhooks =</code>. Multiple webhooks can be separated by commas. Ensure <code>AnnounceRaids</code> is set to <code>true</code>.</p>
      </div>
      <div className="faq-item">
        <h3>How do I disable the raid announcer?</h3>
        <p>Right‑click the GW2RPC tray icon and toggle “Announce Raids:”. This appears only if a webhook is configured.</p>
      </div>
    </article>
  )
}

export default FAQ
