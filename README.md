> A minimal, ES6-based HTTP server built from scratch in Node.js — a playground for networking, TCP, and HTTP internals.

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)  
[![ES6](https://img.shields.io/badge/ES6-FFDD00?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
[![TCP](https://img.shields.io/badge/TCP-007ACC?style=for-the-badge&logo=azure&logoColor=white)](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)  

### **Learning Resources**

I’m learning HTTP, TCP, and networking concepts while building this project. Key resources I’m following include:  

- [MDN Web Docs – HTTP Guides](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides) – for understanding **HTTP requests, responses, headers, and the protocol flow**.  
 

---

## **About**

souHTTP is my personal project to **build a lightweight HTTP server from scratch** and understand how HTTP works at its core.  

Instead of using frameworks like Express, I built this server using **Node.js `net` module** and modern **ES6 syntax**. It handles TCP connections, interprets HTTP requests, and sends basic HTTP responses.  

This project provides a **foundation for experimenting with routing, static file serving, custom headers, and low-level networking concepts**.

---

## **HTTP Overview**

HTTP (Hypertext Transfer Protocol) is the **foundation of data exchange on the Web**. It is a **client-server protocol**, meaning requests are always initiated by the client (usually a web browser), and responses are returned by the server.  

- A single web document can be composed of multiple resources, such as text, images, scripts, and videos, often fetched from different servers.  
- Clients and servers communicate by exchanging **individual messages**: requests from the client and responses from the server.  
- HTTP is an **application-layer protocol** built on top of **TCP** (transport layer) and **IP** (network layer). It is extensible, allowing not only document retrieval but also posting data, fetching partial content, and updating web pages dynamically.  
- HTTP can run over plain TCP or encrypted connections (TLS).  

![HTTP Overview](https://mdn.github.io/shared-assets/images/diagrams/http/overview/fetching-a-page.svg)  

souHTTP builds on this protocol by **handling TCP connections directly** and **parsing HTTP messages manually**, giving insight into what happens “under the hood” when a browser fetches a web page.

---

## **Core Concepts**

- TCP socket communication in Node.js  
- Parsing and responding to **HTTP requests**  
- Event-driven programming with `socket.on`  
- Modular, lightweight server architecture  
- Modern ES6 JavaScript

---

## **Tech Stack**

- Node.js
- TCP Networking (`net` module)  
- JavaScript

---

© 2026 Prom Sereyreaksa


