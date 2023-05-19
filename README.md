<p align="center">
  <a href="" rel="noopener">
 <img src="https://i.imgur.com/AZ2iWek.png" alt="Project logo"></a>
</p>
<h3 align="center">automated-block-control-network-system</h3>

<div align="center">

[![Hackathon](https://img.shields.io/badge/hackathon-name-orange.svg)](http://hackathon.url.com)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

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

- This project is only a stimulation of what happens in an OFDMA network and how a frequency spectrum can be divided into multiple orthogonal subcarriers. As such should only be used for study or example. It does not in any way prove that the programming language used in carrying out this experiment is best in solving this problem.

## 🚀 Future Scope <a name = "future_scope"></a>

Currently no real network data is used as such it is just a stimulation/example.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development
and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

1. Run "npm install" to install dependencies.

### Routes
- [post] /v1/users      :   add/create profile            :   fields { profileId }  
- [delete] /v1/user/:id :   delete profile with profileId
- [get] /v1/profiles    :   get all existing profiles
- [get] /v1/subcarriers :   get all existing subcarriers



## ⛏️ Built With <a name = "tech_stack"></a>

- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@devgranty](https://github.com/devgranty) - Idea & Initial work


## 🎉 Acknowledgments <a name = "acknowledgments"></a>

- Hat tip to anyone whose code was used