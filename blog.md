---
layout: basic-layout.njk
pagination:
  data: collections.post
  size: 6
  reverse: true
  alias: posts
---

<h1 class="section-headline">Latest Blog Posts</h1>

<div class="archive-grid">
	{# Output {pagination.size} number of blog posts #}
	{% for post in posts %}
	<div class="post-summary">
		<p class="post-date">{{ post.date | dateReadable }}</p>
		<div class="preview-image">
			<a href="{{ post.url }}">
				<img width="700" height="300" src="https://placehold.co/700x300/ededed/333333">
			</a>
		</div>
		<p class="post-title"><a href="{{ post.url }}">{{ post.data.title }}</a></p>
		<p class="post-excerpt">Excerpt will go here eventually.</p>
		<a class="button" href="{{ post.url }}">Read More</a>
	</div>
	{% endfor %}
</div>