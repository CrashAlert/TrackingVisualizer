# TrackingVisualizer
Store tracking data in REST backend and show a map view for each listed tracking

<img src="http://i.imgur.com/ESdYTW8.jpg" alt="Screenshot" width="600">

## Installation

You will need 

- gulp
- node/ npm


CD into the repository directory and run the following to install:

```bash
npm install
```
`

## Usage

Put your `.csv` files into the `data` directory and inspect the waypoints.
The header has to include a `lat` and a `lng` column containing float values.

```bash
gulp run
```

Then open a browser on `localhost:4000`
