---
layout: default
title: Asset Library
description: A collection of useful assets and graphics.
keywords: poap, assets, media, library, rocket, pool, rpl
permalink: /asset-library/
---


<!-- Header -->
<header class="container py-4 mt-5">
  <div class="text-center">
    <h1 class="display-6 fw-bold mb-3">Asset Library</h1>
    <p class="col-md-10 col-lg-8 mx-auto lead">
      A collection of useful assets and graphics.
    </p>
    <!-- <a href="/poaps" class="btn btn-outline-dark btn-lg px-4 m-1">View POAPs</a> -->
    <!-- <a href="/create-poap" class="btn btn-outline-dark btn-lg px-4 m-1">Create POAP</a> -->
  </div>
</header>


<!-- Content -->
<section class="container py-4">
  <p class="text-center">
    <small>Did we miss one? <a href="{{site.general_form}}">Submit here</a></small>
  </p>
  <div class="row row-cols-auto justify-content-center">
    {%- for file in site.static_files -%}
      {%- if file.path contains 'img/asset-library' -%}
        <div class="col">
          <div class="card mb-3" style="width: 12rem;">
            <img src="{{file.path}}" class="card-img-top mx-auto d-block trans-grid-bg" style="height: 12rem; object-fit: contain;">
            <div class="card-body">
              <p class="card-subtitle lh-1 mt-2 text-muted mb-auto text-break"><small>{{file.name}}</small></p>
              <a href="{{file.path}}" class="btn btn-sm btn-outline-dark mt-3">View</a>
              <a href="{{file.path}}" class="btn btn-sm btn-outline-dark mt-3" download>Download</a>
            </div>
          </div>
        </div>
      {%- endif -%}
    {%- endfor -%}
  </div>
</section>