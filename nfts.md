---
layout: default
title: NFTs
description: A collection of official and community NFTs.
keywords: nfts, rocket, pool, rpl
permalink: /nfts/
---


<!-- Header -->
<header class="container py-4 mt-5">
  <div class="text-center">
    <h1 class="display-6 fw-bold mb-3">Rocket Pool NFTs</h1>
    <p class="col-md-10 col-lg-8 mx-auto lead">
      A collection of official and community NFTs.
    </p>
    <p>
      <small><em>Total NFTs: {{site.data.nfts.size}}</em></small>
    </p>
  </div>
</header>


<!-- Content -->
<section class="container py-4">
  <p class="text-center">
    <small>Did we miss one? <a href="{{site.general_form}}">Submit here</a></small>
  </p>
  <div class="row row-cols-auto justify-content-center">
    {%- assign months = site.data.months -%}
    {%- assign nfts_by_date = site.data.nfts | sort: "date" | reverse -%}
    {%- for nft in nfts_by_date -%}
      <div class="col d-flex align-items-stretch">
        <div class="card mb-3" style="width: 12rem;">
          {%- if nft.img_url contains ".mp4" -%}
            <video style="height: 12rem; object-fit: contain;" controls>
              <source src="{{nft.img_url}}" type="video/mp4">
              Your browser does not support HTML video.
            </video>
          {%- else -%}
            <img data-src="{{nft.img_url}}" class="card-img-top mx-auto d-block lazyload" alt="..." style="height: 12rem; object-fit: contain;">
          {%- endif -%}
          <div class="card-body d-flex align-items-start flex-column">
            {%- if nft.type == "official" -%}
              <span class="badge rounded-pill bg-orange">Official</span>
            {%- else -%}
              <span class="badge rounded-pill bg-warning">Community</span>
            {%- endif -%}
            {%- assign date_split = nft.date | split: "-" -%}
            {%- assign date_year = date_split[0] | split: "--" -%}
            {%- capture date_month_num -%}{{date_split[1] | split: "--"}}{%- endcapture -%}
            {%- assign date_month_data = months | where: "month_num", date_month_num -%}
            {%- capture date_month -%}{%- for month in date_month_data -%}{{ month.name_short }}{%- endfor -%}{%- endcapture -%}
            {%- assign date_day = date_split[2] | split: "--" -%}
            {%- capture date_readable -%}{{ date_day }}-{{ date_month }}-{{ date_year }}{%- endcapture -%}
            <p class="card-subtitle lh-1 mt-2 text-muted"><small>{{date_readable}}</small></p>
            <h6 class="card-title mt-2 pb-1">{{nft.title}}</h6>
            <p class="card-subtitle lh-1 text-muted mb-auto"><small>{{nft.creator}}</small></p>
            <div>
              <a href="{{nft.link}}" class="btn btn-sm btn-outline-dark mt-3">View</a>
            </div>
          </div>
        </div>
      </div>
    {%- endfor -%}
  </div>
</section>