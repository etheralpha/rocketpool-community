---
layout: default
title: POAPs
description: A collection of official and community POAPs.
keywords: poap, poaps, rocket, pool, rpl
permalink: /poaps/
---


<!-- Header -->
<header class="container py-4 mt-5">
  <div class="text-center">
    <h1 class="display-6 fw-bold mb-3">Rocket Pool POAPs</h1>
    <p class="col-md-10 col-lg-8 mx-auto lead">
      A collection of official and community POAPs.
      <br>
    </p>
    <p>
      <small><em>Total POAPs: {{site.data.poaps.size}}</em></small><br>
      <small><em>
        <a href="https://poap.zendesk.com/hc/en-us/articles/9702718846989-How-Do-I-Set-Up-a-POAP-Drop-">Create a POAP</a>
      </em></small>
    </p>
    <a href="/poap-leaderboard" class="btn btn-outline-dark btn-lg px-4 m-1">Leaderboard</a>
    <a href="/poap-graveyard" class="btn btn-outline-dark btn-lg px-4 m-1">Graveyard</a>
  </div>
</header>


<!-- Content -->
<section class="container py-4">
  <p class="text-center">
    <small>Did we miss one? <a href="{{site.general_form}}">Submit here</a></small>
  </p>
  <div class="row row-cols-auto justify-content-center">
    {%- for poap in site.data.poaps -%}
      {%- if poap.creator -%}
        <div class="col d-flex align-items-stretch">
          <div class="card mb-3" style="width: 12rem;">
            {%- capture dataTargets -%}
              data-bs-toggle="modal" 
              data-bs-target="#detailsModal" 
              data-bs-id="{{poap.id}}" 
              data-bs-link="{{poap.link}}" 
              data-bs-imgurl="{{poap.img_url}}" 
              data-bs-title="{{poap.title}}" 
              data-bs-desc="{{poap.description}}" 
              data-bs-descurl="{{poap.desc_url}}" 
              data-bs-date="{{poap.date}}" 
              data-bs-supply="{{poap.supply}}" 
              data-bs-creator="{{poap.creator}}" 
              data-bs-type="{{poap.type}}"
            {%- endcapture -%}
            {%- if poap.creator == "unknown" -%}
              <div style="width: 100%; height: 1.6rem; position: absolute;" class="bg-warning">
                <p class="text-center"><small class="text-center"><i>who made dis?</i></small></p>
              </div>
            {%- endif -%}
            {%- if poap.filesize -%}
              <div class="position-relative text-center" style="height: 12rem; width: 12rem; cursor: pointer;" {{dataTargets}}>
                <img data-src="/assets/img/poaps/placeholder-2.png" class="card-img-top mx-auto p-3 d-block lazyload" 
                  style="width: 100%; object-fit: contain; cursor: pointer;">
                <div class="placeholder-overlay text-center">Large File<br>({{poap.filesize}})<br>Click to View</div>
              </div>
            {%- else -%}
              {%- assign round = "rounded-circle" -%}
              {%- if poap.creator == "POAP Art Canvas" -%}
                {%- assign round = "rounded-none" -%}
              {%- endif -%}
              <div style="height: 12rem; width: 12rem;">
                <img data-src="{{poap.img_url}}" class="card-img-top mx-auto p-3 d-block {{round}} lazyload" 
                  style="height: 100%; object-fit: contain; cursor: pointer;" {{dataTargets}}>
              </div>
            {%- endif -%}
            <div class="card-body d-flex align-items-start flex-column pt-0">
              <div id="{{poap.id}}badge">
                {%- assign type = poap.type -%}
                {%- case type -%}
                  {%- when "official" -%}
                    <span class="badge rounded-pill bg-orange">Official</span>
                  {%- when "community" -%}
                    <span class="badge rounded-pill bg-warning">Community</span>
                  {%- when "ethstaker" -%}
                    <span class="badge rounded-pill bg-ethstaker">EthStaker</span>
                  {%- when "bankless" -%}
                    <span class="badge rounded-pill bg-bankless">Bankless</span>
                  {%- when "sushi" -%}
                    <span class="badge rounded-pill bg-sushi">Sushi</span>
                  {%- when "poap" -%}
                    <span class="badge rounded-pill bg-poap">POAP</span>
                  {%- when "daily gwei" -%}
                    <span class="badge rounded-pill bg-dailygwei">Daily Gwei</span>
                  {%- when "zapper" -%}
                    <span class="badge rounded-pill bg-zapper">Zapper</span>
                  {%- when "rari capital" -%}
                    <span class="badge rounded-pill bg-rari">Rari Capital</span>
                  {%- when "reddit" -%}
                    <span class="badge rounded-pill bg-reddit">Reddit</span>
                  {%- when "balancer" -%}
                    <span class="badge rounded-pill bg-balancer">Balancer</span>
                  {%- when "bancor" -%}
                    <span class="badge rounded-pill bg-bancor">Bancor</span>
                  {%- when "gitpoap" -%}
                    <span class="badge rounded-pill bg-gitpoap">GitPOAP</span>
                  {%- when "tally" -%}
                    <span class="badge rounded-pill bg-tally">Tally</span>
                  {%- when "ens" -%}
                    <span class="badge rounded-pill bg-ens">ENS</span>
                  {%- else -%}
                    {%- assign words = type | split: " " -%}
                    {%- capture titlecase -%}
                      {%- for word in words -%}
                        {{ word | capitalize }}
                      {%- endfor -%}
                    {%- endcapture -%}
                    <span class="badge rounded-pill bg-secondary">{{titlecase}}</span>
                {%- endcase -%}
              </div>
              <p class="card-subtitle lh-1 mt-2 text-muted"><small>{{poap.date}}</small></p>
              <h6 class="card-title mt-2 mb-auto">{{poap.title}}</h6>
              <div>
                <a href="{{poap.link}}" class="btn btn-sm btn-outline-dark mt-3">Link</a>
                <a href="{{poap.link}}" class="btn btn-sm btn-outline-dark mt-3" {{dataTargets}}>
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      {%- else -%}
      {%- endif -%}
    {%- endfor -%}
  </div>
</section>


<!-- Modal -->
<div class="modal fade" id="detailsModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">POAP <span id="modalId"></span></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <img id="modalImg" src="" class="card-img-top mx-auto d-block" style="max-height: 500px; object-fit: contain;">
            <div id="modalType" class="mt-1"></div>
          </div>
          <div class="mb-3">
            <h6 id="modalTitle" class="card-title mt-2 mb-2"></h6>
          </div>
          <div class="mb-3">
            <p class="card-subtitle lh-1 text-muted">
              <small>Date: 
                <span id="modalDate"></span>
              </small>
            </p>
          </div>
          <div class="mb-3">
            <p class="card-subtitle lh-1 text-muted">
              <small>By: 
                <span id="modalCreator"></span>
              </small>
            </p>
          </div>
          <div class="mb-3 text-break">
            <p id="modalDescription" class="card-text"></p>
            <a id="modalDescLink" href=""></a>
          </div>
          <div class="mb-3">
            <p class="card-subtitle lh-1 text-muted">
              <small>Supply: 
                <span id="modalSupply"></span>
              </small>
            </p>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a class="btn btn-outline-dark" data-bs-dismiss="modal">Close</a>
        <a id="modalLink" href="" class="btn btn-dark">View</a>
      </div>
    </div>
  </div>
</div>