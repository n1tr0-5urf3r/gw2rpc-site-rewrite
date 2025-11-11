function Changelog() {
  return (
    <article id="changelog">
      <h1>Changelog</h1>
      <div className="log-list">
        <details open>
          <summary><h2>v2.55</h2></summary>
          <small>31 October 2025</small>
          <p>Add support for VoE elite specs. Races, professions, and elite specs are now moved to the GW2RPC API to facilitate future updates.</p>
        </details>
        <details>
          <summary><h2>v2.52</h2></summary>
          <small>9 January 2023</small>
          <p>Fixed a crash if discord is started after GW2RPC which only occured occasionally</p>
          <p>Fixed a crash if character and instance name exceed 128 bytes</p>
          <p>Fixed a crash if discord is started after GW2RPC</p>
          <p>Updated dependencies</p>
          <p>Updates Discord SDK lib</p>
          <p>Updated translations</p>
          <p>GW2RPC installer now autodetects install dir of GW2</p>
        </details>
        <details>
          <summary><h2>v2.51</h2></summary>
          <small>4 July 2022</small>
          <p>Reduced CPU usage by a lot</p>
        </details>
        <details>
          <summary><h2>v2.5</h2></summary>
          <small>1 July 2022</small>
          <p>Now displaying nearly in real-time</p>
          <p>More performance through caching of many API calls</p>
          <p>pt-br locale added (Thanks to Komashi)</p>
          <p>Translations updated</p>
          <p>All fractal bosses included (Thanks to Poiison)</p>
          <p>Debugging mode added: Config flag <code>loglevel</code></p>
          <p>Fixed a crash if config does not exist</p>
          <p>Fixed a crash of malformed config files</p>
          <p>Fixed a crash of different capitalization of Gw2-64.exe</p>
        </details>
        <details>
          <summary><h2>v2.35</h2></summary>
          <small>05 March 2022</small>
          <p>Added Discord Webhook Raid Announcer</p>
          <p>Fixed a crash when flying a jade bot</p>
        </details>
        <details>
        <summary><h2>v2.3</h2></summary>
        <small>18 February 2022</small>
        <p>Multiboxing support: Every instance has to have an unqiue MumbleLink ID, which can be specified with the <code>-mumble</code> config parameter. This can also be activated in the settings of gw2launcher. (Thanks to writzx)</p>
        <p>Return to "in character selection" if you log out from a character and remain in character selection. Previously this was stuck on displaying the last played character until you log in with another one. (Thanks to PR from BenLubar)</p>
        <p>Display an emoji (⚔️) behind your character name if you are currently in combat in game.</p>
        <p>Display currently used mount, can be deactivated in config file.</p>
        <p>Display a button in Discord, which leads you to a website for easily copy-pasting the chat link of the closest point of interest next to you for others. as well as a whisper string. Can be deactivated in config file.</p>
        <p>Display fractal (CM) boss images</p>
        <p>Only one instance of <code>gw2rpc.exe</code> will be active at a time now. If you start it again and another instance is already running, it will terminate.</p>
        <p>Fixed a crash with malformed json data</p>
        <p>Fixed a crash when quickly switching between multiboxed instances (Thanks to Breaking)</p>
        <p>Fixed a crash when connection to GW2 API or GW2RPC API could not be established due to client side limitations (proxy or firewall) (Thanks to TEnn)</p>
        <p>Fixed a crash when GW2 crashes (Thanks to Rengo)</p>
        <p>Fix timestamps / duration of fractal boss encounters (Thanks to Trinterin)</p>
        <p>Fixed images for strike bosses (API)</p>
        <p>Added images for Dragonfall, Dragonstorm, Cold War (API)</p>
        <p>Updated translations</p>
      </details>
      <details>
        <summary><h2>v2.2</h2></summary>
        <small>17 December 2021</small>
        <p>Added commander mode. Configurable in config</p>
        <p>Reworked elite specializations: Will now display without an active GW2 API key</p>
        <p>Added elite specs for EoD</p>
        <p>Updated translations for raids and new elite specializations</p>
        <p>Added missing images for some strike missions, W7 and EotN</p>
        <p>Fixed a crash when using core professions</p>
        <p>Fixed a rare crash when keeping GW2RPC open for a long time</p>
      </details>
      <details>
        <summary><h2>v2.11</h2></summary>
        <small>8 June 2021</small>
        <p>Added localization for en, es, de, fr</p>
        <p>Added fractal mode</p>
      </details>
      <details>
        <summary>
          <h2>v2.0</h2>
        </summary>
        <small>11 July 2018</small>
        <p>Added raid mode</p>
        <p>Added multi API key support by separating via comma</p>
        <p>Added nearest point of interest display on map hover</p>
        <p>Fixed status not properly clearing on exit</p>
        <p>Fixed crashes</p>
        <p>Update your config.ini to newest one!</p>
      </details>
      <details>
        <summary>
          <h2>v1.2</h2>
        </summary>
        <small>14 January 2018</small>
        <p>Fixed all known crashes</p>
      </details>
      <details>
        <summary>
          <h2>v1.1</h2>
        </summary>
        <small>29 December 2017</small>
        <p>Add a setting to display guild tag next to character name - DisplayGuildTag under [Settings] header in config.ini</p>
        <p>Add a setting to automatically close the program when GW2 exits - CloseWithGw2 under [Settings] header in config.ini</p>
        <p>Fix for crash on certain instances</p>
        <p>Fix for not properly exiting on crash</p>
      </details>
      <details>
        <summary>
          <h2>v1.0</h2>
        </summary>
        <small>19 December 2017</small>
        <p>First full release</p>
      </details>
      <details>
        <summary>
          <h2>v0.4</h2>
        </summary>
        <small>17 December 2017</small>
        <p>Performance improvements</p>
        <p>Region display (EU/NA) on hover</p>
        <p>Expand context menu</p>
        <p>Fix for status not updating under certain circumstances</p>
      </details>
      <details>
        <summary>
          <h2>v0.3</h2>
        </summary>
        <small>14 December 2017</small>
        <p>Added automatic update checking. Does not auto update!</p>
        <p>Improved logging of errors</p>
        <p>Added regions (default images for instances)</p>
        <p>A notification should GW2RPC crash</p>
        <p>Also, all wintersday activities now have images</p>
      </details>
      <details>
        <summary>
          <h2>v0.2</h2>
        </summary>
        <small>12 December 2017</small>
        <p>GW2RPC now resides in the system tray - there is no console window anymore.</p>
        <p>With this update, there is a new .exe, called GW2_with_rpc.exe This is a convenience script to launch both GW2 and RPC in one click</p>
        <p>For it to work, it needs to be present in %GW2FOLDER%\addons\gw2rpc\ along with gw2rpc.exe.</p>
        <p>You can replace your normal GW2 shortcut with it for easy launch by rightclicking → create shortcut.</p>
      </details>
      <details>
        <summary>
          <h2>v0.1</h2>
        </summary>
        <small>5 December 2017</small>
        <p>New web registry - new maps can be added without needing to update the client</p>
        <p>Which also means all raids are have working images now</p>
        <p>Fractal name display in FOTM (Thanks to QuitarHero)</p>
        <p>Performance improvements</p>
      </details>
      </div>
    </article>
  )
}

export default Changelog
