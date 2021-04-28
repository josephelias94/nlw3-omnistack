<p align="center">
   <img src="logo.png" alt="Happy" width="280"/>
</p>

> :rocket: Project designed to facilitate contact between the population and NGOs, made in Next Level Week #3 by Rocketseat

# :pushpin: Table of Contents

- [Technologies](#computer-technologies)
- [Features](#rocket-features)
- [How to Run](#construction_worker-how-to-run)
- [License](#closed_book-license)

# :computer: Technologies

This project was made using the follow technologies:

- [Expo](https://expo.io/)
- [Express](https://expressjs.com/)
- [Leaflet](https://leafletjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [SQLite](https://www.sqlite.org/)
- [TypeORM](https://typeorm.io/)

# :rocket: Features

- Website to search and schedule visits to orphanages.
- App to search and schedule visits to orphanages.

# :construction_worker: How to run

```bash
# Clone Repository
$ git clone https://github.com/josephelias94/nlw3-omnistack.git

# Go to folder
$ cd nlw3-omnistack
```

### 📦 Run Server

```bash
# Go to server folder
$ cd server

# Install Dependencies
$ yarn install

# Make migrations
$ yarn run typeorm -- migration:run

# Run Aplication
$ yarn dev
```

### 💻 Run Web Project

```bash
# Go to web folder
$ cd web

# Install Dependencies
$ yarn install

# Run Aplication
$ yarn start
```

Website at http://localhost:3000/.

### 📱 Run Mobile Project

To run the mobile project you need a smartphone with the [expo](https://play.google.com/store/apps/details?id=host.exp.exponent) app instaled or an emulator android/ios.

```bash
# Go to mobile folder
$ cd mobile

# Install Dependencies
$ yarn install

# Run Aplication
$ yarn start
```

Read the QR Code with expo or run in an emulator.

# :closed_book: License

Made in 2020 by [José Elias](https://github.com/josephelias94).
This project is under the [MIT license](./LICENSE).
