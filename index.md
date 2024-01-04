---
layout: basic-layout.njk
---

<section class="home-hero">
	<section class="home-cta">
		<div class="content">
			<div class="home-cta-description">
				<h1>Approachable articles for all</h1>
				<p>Games are hard, but learning more about them shouldn’t be. Simplified, friendly articles, accessible whenever you need.</p>
				<a class="home-cta-link" href="https://hrothmar.com/guides/">Check out all Guides</a>
			</div>
		</div>
	</section>
	<section class="home-recent-guides">
		<div class="content">
			<h2>Recent Guides</h2>
				<div class="archive-grid">
					{% for guide in collections.guideCollection %}
						<div class="post-summary">
							<p class="post-date">{{ guide.data.dateReadable }}</p>
							<div class="preview-image">
								<a href="{{ guide.url }}">
									<img width="700" height="300" src="https://placehold.co/700x300/ededed/333333" alt="{{ guide.data.imgName }}" decoding="async" fetchpriority="high">
								</a>
							</div>
							<h4 class="post-headline"><a href="{{ guide.url }}">{{ guide.data.title }}</a></h4>
							<p class="post-excerpt">Excerpt will go here eventually.</p>
							<a class="button" href="{{ guide.url }}">Read More</a>
						</div>
					{% endfor %}
				</div>
			</div>
		</section>
	</section>
	<section class="home-variety">
		<div class="content">
			<div class="variety-description">
				<h3>Hroth-who? Hrothmar?</h3>
				<p>A wholesome and positive human who wants to connect with new friends while playing games together. As a member of the esteemed Variety Pack Team, my goal to provide high-quality, engaging, and chat-focused content– whether that means outlining mechanics within MMOs or stirring up shenanigans in RPGs. I’m more than a nice voice and a pretty face.</p>
				<h4 class="home-variety-callout">I enjoy playing a variety of video games.</h4>
				<a class="home-variety-link" href="https://twitch.com/hrothmar"> Stop by the stream </a>
			</div>
			<div class="variety-imagery">
				<div class="variety-top-image">
					<img width="500" height="280" src="https://hrothmar.com/wp-content/uploads/2019/12/Screen-Shot-2019-11-21-at-8.52.31-PM-500x280.png" class="attachment-medium size-medium" alt="Hrothmar covers his face in excitement as he places Grand Champion in Rocket League" decoding="async" srcset="https://hrothmar.com/wp-content/uploads/2019/12/Screen-Shot-2019-11-21-at-8.52.31-PM-500x280.png 500w, https://hrothmar.com/wp-content/uploads/2019/12/Screen-Shot-2019-11-21-at-8.52.31-PM-1024x574.png 1024w, https://hrothmar.com/wp-content/uploads/2019/12/Screen-Shot-2019-11-21-at-8.52.31-PM-768x430.png 768w, https://hrothmar.com/wp-content/uploads/2019/12/Screen-Shot-2019-11-21-at-8.52.31-PM-1536x860.png 1536w, https://hrothmar.com/wp-content/uploads/2019/12/Screen-Shot-2019-11-21-at-8.52.31-PM.png 1928w" sizes="(max-width: 500px) 100vw, 500px">
				</div>
				<div class="variety-bottom-image">
					<img width="500" height="281" src="https://hrothmar.com/wp-content/uploads/2019/12/Screen-Shot-2019-11-21-at-9.12.21-PM-500x281.png" class="attachment-medium size-medium" alt="Hrothmar is playing Zelda: Breath of the Wild and is accomplishing a Speed Run technique, bouncing off of an enemy's head to gain speed." decoding="async" srcset="https://hrothmar.com/wp-content/uploads/2019/12/Screen-Shot-2019-11-21-at-9.12.21-PM-500x281.png 500w, https://hrothmar.com/wp-content/uploads/2019/12/Screen-Shot-2019-11-21-at-9.12.21-PM-1024x576.png 1024w, https://hrothmar.com/wp-content/uploads/2019/12/Screen-Shot-2019-11-21-at-9.12.21-PM-768x432.png 768w, https://hrothmar.com/wp-content/uploads/2019/12/Screen-Shot-2019-11-21-at-9.12.21-PM-1536x864.png 1536w, https://hrothmar.com/wp-content/uploads/2019/12/Screen-Shot-2019-11-21-at-9.12.21-PM-2048x1152.png 2048w" sizes="(max-width: 500px) 100vw, 500px">
				</div>
			</div>
		</div>
	</section>
</section>