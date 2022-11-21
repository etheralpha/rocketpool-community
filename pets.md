---
layout: default
title: Pets
description: A collection of official and community NFTs.
keywords: dogs, pups, rocket, pool, community
permalink: /pets/
---


<!-- Header -->
<header class="container py-4 mt-5">
  <div class="text-center">
    <h1 class="display-6 fw-bold mb-3">Rocket Pool Pets</h1>
    <p class="col-md-10 col-lg-8 mx-auto lead">
      A showcase for our furry fans.
    </p>
    <small><em>Images courtesy of Daserpet.</em></small>
  </div>
</header>


<!-- Content -->
<section id="pets" class="container py-4">
  <div class="row row-cols-auto justify-content-center">
    {%- for pet in site.data.pets -%}
      <div class="col d-flex align-items-stretch">
        <div class="card mb-3" style="width: 12rem;">
          <div class="card-header owner">
            {{pet.owner}}
          </div>
          {%- assign border = "border-blue" -%}
          {%- if pet.sex == "female" -%}
            {%- assign border = "border-pink" -%}
          {%- endif -%}
          <div style="height: 12rem; width: 12rem;">
            <img src="/{{pet.img_url}}" class="card-img-top mx-auto p-2 d-block" style="height: 100%; object-fit: contain;">
          </div>
          <div class="card-body d-flex align-items-start flex-column pt-0">
            {%- if pet.sex == "female" -%}
              <span class="badge rounded-pill bg-baby-pink">Good Girl</span>
            {%- else -%}
              <span class="badge rounded-pill bg-baby-blue">Good Boy</span>
            {%- endif -%}
            <div>
              {%- case pet.type -%}
                {%- when "dog" -%}
                  <span class="badge rounded-pill bg-warning">Doge</span>
                {%- when "cat" -%}
                  <span class="badge rounded-pill bg-secondary">Cate</span>
                {%- when "lizard" -%}
                  <span class="badge rounded-pill bg-success">Slitherin</span>
                {%- when "murbid" -%}
                  <span class="badge rounded-pill bg-primary">Fur Ball</span>
                {%- else -%}
                  <span class="badge rounded-pill bg-dark">Unknown</span>
              {%- endcase -%}
            </div>
            {%- if pet.owner == "unknown" or pet.name == "unknown" -%}
              <!-- <span class="badge rounded-pill bg-orange">Lost Pet</span> -->
            {%- endif -%}
            <h6 class="card-title mt-2 pb-1">{{pet.name}}</h6>
            <p class="card-subtitle lh-1 text-muted mb-auto"><small>{{pet.breed}}</small></p>
            <div>
              <a href="/{{pet.img_url}}" class="btn btn-sm btn-outline-dark mt-3">View</a>
            </div>
          </div>
        </div>
      </div>
    {%- endfor -%}
  </div>
</section>