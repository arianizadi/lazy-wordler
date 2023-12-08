<p id="readme-top" />

<div align="center">
    <img src="https://1000logos.net/wp-content/uploads/2023/05/Wordle-Emblem.png" alt="Logo" height="150">
  <h1 align="center">Lazy Wordler</h1>

  <p align="center">
    A Next.js app that scrapes the Wordle website and displays the current puzzle answers!
    </br>
  </p>
</div>

## Usage

Click on the link below to open the app in your browser.

[Click to open Lazy Wordler](https://lazy-wordler.vercel.app/)

## How it works

I started with reverse engineering the Wordle website to find out how the game works. If you look in the networking tab you can see that it reaches out to an endpoint that matches the current date. After finding this all I needed was to create a Next.js project that utilizes the server side rendering to fetch the data from the endpoint and display it on the page. The serverside rendering is important because it bypasses the CORS policy that would not allow client side requests to an endpoint on a different domain.
