---
layout: default
title: Raffles
description: A list of official and community raffles.
keywords: raffles, rocketpool, rocket, pool
permalink: /raffles/
---


<!-- Header -->
<header class="container py-4 mt-5">
  <div class="text-center">
    <h1 class="display-6 fw-bold mb-3">Rocket Pool Raffles</h1>
    <p class="col-md-10 col-lg-8 mx-auto lead">
      A list of official and community raffles.
    </p>
  </div>
</header>


<!-- Content -->
<section class="container py-4">
  <p class="text-center">
    <small>Did we miss one? <a href="{{site.general_form}}">Submit here</a></small>
  </p>
  <div class="row row-cols-auto justify-content-center">
    {%- for raffle in site.data.raffles -%}
      <div class="col d-flex align-items-stretch">
        <div class="card mb-3" style="width: 12rem;">
          <div class="card-body d-flex align-items-start flex-column">
            {%- if raffle.winner -%}
              <span class="badge bg-success">Complete</span>
            {%- else -%}
              <span class="badge bg-warning">In Progress</span>
            {%- endif -%}
            <p class="card-subtitle lh-1 mt-2 text-muted"><small>{{raffle.date | split: "T" | first}}</small></p>
            <h6 class="card-title mt-2 mb-auto">{{raffle.title}}</h6>
            {%- assign address = raffle.winner | remove: "https://etherscan.io/address/" -%}
            {%- capture address -%}
              {%- if raffle.ens -%}
                {{raffle.ens}}
              {%- else -%}
                {{address | slice: 0, 6}}...{{address | slice: -5, 4}}
              {%- endif -%}
            {%- endcapture -%}
            {%- if raffle.winner -%}
              <p class="card-subtitle lh-1 mt-2 text-muted">
                <small>🥇 <a href="{{raffle.winner}}">{{address}}</a></small>
              </p>
            {%- else -%}
              <p class="card-subtitle lh-1 mt-2 text-muted">
                <small>&nbsp;</small>
              </p>
            {%- endif -%}
            <div>
              <a href="{{raffle.link}}" class="btn btn-sm btn-outline-dark mt-3">View</a>
            </div>
          </div>
        </div>
      </div>
    {%- endfor -%}
  </div>
</section>