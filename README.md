# Simple Node.js benchmark

Frameworks:

- Express
- Fastify
- Vanilla http server
- uWebSockets.js

## System

- Windows 10
- Intel Core i7-8550U

## Single instance

| express     | fastify     | http        | uSocket     | uSocket + fast json |
| ----------- | ----------- | ----------- | ----------- | ------------------- |
| 296         | 668         | 560         | 973         | 1026                |
| 262         | 645         | 570         | 967         | 1101                |
| 272         | 560         | 620         | 1085        | 1077                |
| Average     | Average     | Average     | Average     | Average             |
| 276.6666667 | 624.3333333 | 583.3333333 | 1008.333333 | 1068                |

## Cluster (PM2)

| express     | fastify | http    | uSocket | uSocket + fast json |
| ----------- | ------- | ------- | ------- | ------------------- |
| 493         | 754     | 569     | 935     | 967                 |
| 523         | 782     | 602     | 1000    | 924                 |
| 462         | 708     | 662     | 912     | 1048                |
| Average     | Average | Average | Average | Average             |
| 492.6666667 | 748     | 611     | 949     | 979.6666667         |
