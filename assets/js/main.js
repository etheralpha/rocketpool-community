---
---

{% include js/main.js %}
{%- if site.enableNotification == true -%}
  {% include js/notificationBar.js %}
{%- endif -%}
{%- if site.enableToast == true -%}
  {% include js/toast.js %}
{%- endif -%}
{% include js/lazysizes.min.js %}

// Must be last due to error
{% include js/updateLinkTargets.js %}