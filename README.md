<h1 align="center">Welcome to ddd-deck 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: UNLICENSED" src="https://img.shields.io/badge/License-UNLICENSED-yellow.svg" />
  </a>
</p>

> API to handle decks and cards to be used in games like Poker and Blackjack

## Install

If you have docker in your computer, simply run `docker-compose up` and the project will be up and running on port 8888. Otherwise, please follow the following steps.

```sh
yarn install
```

## Usage

```sh
yarn run start
```

### Create a SHORT deck

```sh
curl -X POST \
  'localhost:8888/api/v1/deck/create' \
  -H 'Accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "SHORT",
    "shuffled": true
}'
```

### Open a previously created deck by its id

```sh
curl -X GET \
  'localhost:8888/api/v1/deck/open/b6d8a2ff-a014-4c49-a8db-56f5824e5cec' \
  -H 'Accept: */*'
```

### Add an amount of cards from the deck to your hand

```sh
curl -X POST \
  'localhost:8888/api/v1/deck/draw' \
  -H 'Accept: */*' \
  -H 'User-Agent: Thunder Client (https://www.thunderclient.io)' \
  -H 'Content-Type: application/json' \
  -d '{
    "deckId": "3f7730db-5d69-4f80-8137-8885329e7b12",
    "amount": 5
}'
```

## Author

👤 **Ricardo Brambila**

- Website: https://www.linkedin.com/in/ricardo-brambila-939252143/
- Github: [@ricardo-jsx](https://github.com/ricardo-jsx)
