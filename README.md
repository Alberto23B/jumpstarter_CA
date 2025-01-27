# Jumpstarter

> _[Live demo](https://jstarter.netlify.app/)_.

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [New in Version 1.0.0](#new-in-version-100)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Development](#development)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## General Information

Jumpstarter is a productivity game designed to make daily tasks more engaging. Users can set tasks with a timer, creating a challenge to complete them efficiently. The game dynamically calculates task duration based on difficulty levels and provides a scoring system for motivation.

## Technologies Used

- React - version 18.3.1
- React-Redux - version 8.1.3
- Redux Toolkit - version 1.9.7
- TailwindCSS - version 3.4.14
- UUID - version 10.0.0
- OpenWeather API (for weather updates)
- LoremPicsum API (for free background images)

## Features

- Task manager with a countdown timer
- Task duration dynamically adjusted based on difficulty level
- Three game levels affecting time limits and scoring
- Displays current weather using OpenWeather API
- Background images fetched from LoremPicsum API, changeable by the user

## New in Version 1.0.0

- Task time dynamically recalculated based on selected difficulty
- Three game levels with increasing challenge:
  - Different time reductions per level
  - Scoring system based on completion time and difficulty

## Project Status

Project is: _active and under development_

## Room for Improvement

- Improve the performance of background image switching
- Enhance the UI for better user experience
- Add an explicit "break between tasks" setting
- Add a stopwatch mode

## Development

To run the project locally, use the following scripts:

- `npm start` - Runs the app in development mode.
- `npm build` - Builds the app for production.
- `npm test` - Runs the test suite.
- `npm eject` - Ejects from create-react-app (not recommended).

## Acknowledgements

- Uses [OpenWeather API](https://openweathermap.org/) for real-time weather data.
- Uses [LoremPicsum](https://picsum.photos/) for free, randomly generated background images.

## Contact

Created by [@Alberto23B](https://github.com/Alberto23B) - feel free to contact me!
