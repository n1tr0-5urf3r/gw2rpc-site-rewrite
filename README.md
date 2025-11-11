<div align="center">
  <img src="./public/static/img/logo.png" alt="GW2RPC Logo" width="200"/>

  <h2>GW2RPC Site Rewrite</h2>

  ![Language](https://img.shields.io/badge/lang-typescript-darkred)
  ![Built with React](https://img.shields.io/badge/built%20with-react-orange)
  ![Version](https://img.shields.io/badge/v-1.0.0-yellow)
[![Build & Deploy](https://github.com/n1tr0-5urf3r/gw2rpc-site-rewrite/actions/workflows/deploy.yml/badge.svg)](https://github.com/n1tr0-5urf3r/gw2rpc-site-rewrite/actions/workflows/deploy.yml)
</div>

## Overview

This repository contains a React + TypeScript + Vite rewrite of the GW2RPC website and lightweight API.

GW2RPC itself is a Guild Wars 2 addon that enables Discord Rich Presence. It can display:
- Character name and class (profession/elite spec)
- Current map and time spent on the map
- Mount and combat status, active commander tag
- Optional details with an API key (e.g., region, guild tag)
- Boss detection in raids, fractals, and strikes
- Multiboxing support via unique Mumble IDs
- Optional Discord webhook raid announcer

## Development

Requirements: Node.js LTS and npm

Run locally:
1. `npm install`
2. `npm run dev`

Build and preview:
- `npm run build`
- `npm run preview`

Notes:
- Public assets are served from `/static/...` (files live in `public/static/...`).
- Registry endpoints for the API are available in `public/api/...` and hosted at `api/v2/registry`.

## Contributing

Contributions are welcome! Please keep changes focused and consistent with the existing structure and style.

## Donate

GW2RPC is free and maintained by volunteers. If you find it helpful, please consider supporting development:

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UEBHM63V547KN)

Thank you for supporting GW2RPC!

## Links

- GW2RPC (addon repository): https://github.com/Maselkov/GW2RPC
- Hosted GW2RPC website: https://gw2rpc.info
- Legacy flask-based website: https://github.com/n1tr0-5urf3r/gw2rpc-site
