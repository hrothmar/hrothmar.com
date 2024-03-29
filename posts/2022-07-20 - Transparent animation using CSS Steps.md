---
title: Transparent animation using CSS Steps()
date: 2022-07-20
excerpt: Leveraging choppy animations and wide images to create interesting visual illusions using very old animation techniques.
tags:
  - blog
  - behind the scenes
---

I’ve recently started messing around with the `steps()` timing property for CSS animation, it’s pretty slick. By default, CSS will animate an element from its initial state to the final state continuously in a smooth fashion called "ease". One of the alternatives to "ease" is a timing property called `steps()` which allows us to specify the number of checkpoints the animation should create between the start and end points, breaking the smooth animation into smaller, choppier chunks.

[codepen_embed height="373" default_tab="result" slug_hash="wvmdmqv" user="hrothmar_tv"]See the Pen &lt;a href="https://codepen.io/hrothmar_tv/pen/wvmdmqv"&gt;
CSS Step Animation (Easing Comparison)&lt;/a&gt; by Hrothmar (&lt;a href="https://codepen.io/hrothmar_tv"&gt;@hrothmar_tv&lt;/a&gt;)
on &lt;a href="https://codepen.io"&gt;CodePen&lt;/a&gt;.[/codepen_embed]

In the above example, the animation widens an element from `width: 0;` to `width: 100%;`. The first green bar is using the default "ease" animation while the second green bar is using `steps(5)`. The steps property causes the animation's progress to get divided into five equal parts, jumping along in the following method:

**0% -&gt; 20% -&gt; 40% -&gt; 60% -&gt; 80% -&gt; 100%**

As you can see, step animation is quick and choppy, which is not a quality normally desired for animation, but we can leverage this choppiness to create some interesting visual illusions using very old animation techniques.

## Using Step Animations
We can use the choppiness of the Steps property to our advantage by speeding up the animation length and creating the illusion of motion. You might recognize this effect from old [zoetropes](https://en.wikipedia.org/wiki/Zoetrope) (or any reel-based movie!). By creating a long image that contains a sequence of individual frames from an animation, we can recreate the illusion motion with the help of the `steps()` animation timing property. To do this, find the number of frames in your animation, then use the number of frames as your `steps()` value. If your animation has 13 frames, you'd enter `steps(13)`!

There is another optional value that we can to pass into the `steps()` function which affects the animation’s direction.
- `start` makes it so the first step happens when the animation begins.
- `end` makes it so the last step happens when the animation finishes.
*This is the default value*.


In the example below, our film strip has 13 frames of animation so we’ll set our value to `steps(13)`. We want the last frame to show when the animation finishes, which means we would pass through the `end` value, but since it is the default value, there’s no need to declare it when creating our animation. This means `steps(13, end)` is the same as `steps(13)`.

*Press the "Start Animation" in the embedded CodePen below to see CSS Steps in action!*

[codepen_embed height="518.484375" default_tab="result" slug_hash="MWVmVpb" user="hrothmar_tv"]See the Pen &lt;a href="https://codepen.io/hrothmar_tv/pen/MWVmVpb"&gt;
CSS Step() Animation via Zoetrope illusion&lt;/a&gt; by Hrothmar (&lt;a href="https://codepen.io/hrothmar_tv"&gt;@hrothmar_tv&lt;/a&gt;)
on &lt;a href="https://codepen.io"&gt;CodePen&lt;/a&gt;.[/codepen_embed]

## Why use CSS Steps?
Step animation is a versatile option for bringing motion to your site or app. It should *not* be used as a solution for all animations but can provide features other animation options can’t such as:
- Autoplay on mobile devices
- Upwards of 60 frames per second (depending on your animation frame count)
- Transparency support
- Relatively smaller file size for animation


[aside]
Note: while 60 frames per second is achievable with step-based animation, it is not recommended due to increased file size
[/aside]

High frames-per-second and retina images work great for short-duration animations, such as the [Twitter Heart Explosion](https://medium.com/@chrismabry/how-did-they-do-that-the-twitter-like-animation-2a473b658e43), but step-based animation does not scale very well into complex animations which require high resolution, or lengthy animations.

<img src="https://miro.medium.com/max/1400/1*MTZW1G1mE7LSX1CnhTYeHA.png" />

### When not to use CSS Steps
If you need large or complex animations, be warned that while step animation is a viable option, you might want to also explore other implementations to make sure you’re getting the most performant method. Other options include non-step CSS animation, SVG animation, embedded video, and HTML canvas.
### CSS Steps in the wild
The best use of a CSS step animation I’ve seen has come from Blizzard Entertainment’s promotional World of Warcraft: Legion website (*note: no longer publicly visible*)*.* A section of the site illustrates an in-game character holding a weapon at their side while lightly swaying back and forth. The animation is three seconds long and consists of 54 frames. The fascinating part of the animation is that it is powered by a 14,000px by 300px `.png` file that only weighs 846kb. By all means, this is a large file, but the quality of animation combined with *mobile auto-playing and transparency support* is astonishing.

When the source image is viewed in its entirety, without CSS step animations, the entire "film strip" of the image seems like quite an odd approach when it comes to designing animation for the web. The source image is extremely wide with no way of seeing the animation with your eyes, unassisted. The image also seems quite daunting to create from a production perspective since updating the image would require replacing animation frames in the correct location with the correct spacing. You can see the image in its raw form below:

<img src="https://hrothmar.com/wp-content/uploads/2022/07/warlock-zoetrope.png" alt="A short, but wide image shows tens of copies of the same purple-clad character standing next to each other. Each copy of the person changes slightly, showing one frame of animation's difference between each other." width="14040" height="300" />

However, when the image has CSS Step animations applied to it, it springs to life, with native mobile auto-playing, transparent backgrounds, high fidelity image quality, and relatively smooth animations for running at only 18 frames per second. I cannot speak to the amount of behind-the-scenes work that it would take for an animator to produce frame-by-frame captures of an object in motion, let alone arrange them into a sequence for a single png file, but the results are breathtaking and surprising nonetheless. You can view the animation in its final, intended viewing model here:

[codepen_embed height="500" default_tab="result" slug_hash="KKomoNz" user="hrothmar_tv"]See the Pen &lt;a href="https://codepen.io/hrothmar_tv/pen/KKomoNz"&gt;
Untitled&lt;/a&gt; by Hrothmar (&lt;a href="https://codepen.io/hrothmar_tv"&gt;@hrothmar_tv&lt;/a&gt;)
on &lt;a href="https://codepen.io"&gt;CodePen&lt;/a&gt;.[/codepen_embed]