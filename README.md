# OFDMA Network Stimulation

## 📝 Table of Contents

- [What is OFDMA?](#Explanation)
- [Limitations](#limitations)
- [Future Scope](#future_scope)
- [Setting up a local environment](#getting_started)
- [Technology Stack](#tech_stack)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🧐 What is OFDMA <a name = "Explanation"></a>

OFDMA stands for Orthogonal Frequency Division Multiple Access. It is a multiple access technique used in wireless communication systems, particularly in the context of cellular networks such as 4G LTE and 5G.
OFDMA is based on the principle of dividing the available frequency spectrum into multiple orthogonal subcarriers. Each subcarrier is a narrowband channel that can be allocated to different users simultaneously. By dividing the spectrum into orthogonal subcarriers, multiple users can transmit data simultaneously without causing interference to each other.
This project is a stimulation of what happens in an OFDMA network & it is built with Node.js

## ⛓️ Limitations <a name = "limitations"></a>

This project is only a stimulation of what happens in an OFDMA network and how a frequency spectrum can be divided into multiple orthogonal subcarriers. As such should only be used for study or example. It does not in any way prove that the programming language used in carrying out this experiment is best in solving this problem.

## 🚀 Future Scope <a name = "future_scope"></a>

Currently no real network data is used as such it is just a stimulation/example.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development
and testing purposes.

```console
git clone https://github.com/devgranty/OFDMA-network-stimulation.git
```

To clone this repository

### Prerequisites

```console
npm install
```

To install dependencies

```console
npm start
```

To start app

### Endpoints

- POST /v1/users      :   add/create profile            :   fields [ profileId ]
- DELETE /v1/user/:id :   delete profile with profileId
- GET /v1/profiles    :   get all existing profiles
- GET /v1/subcarriers :   get all existing subcarriers

## ⛏️ Built With <a name = "tech_stack"></a>

- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@devgranty](https://github.com/devgranty)

## 🎉 Acknowledgments <a name = "acknowledgments"></a>

- Hat tip to anyone whose code was used
