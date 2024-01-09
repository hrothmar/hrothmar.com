---
title: Shadowlands - Advanced Arms Warrior Tips & Tricks
depreciated: true
date: 2021-06-10
excerpt: Additional tips & tricks for folks looking to improve their general Arms Warrior gameplay, along with class-wide advice regardless of which spec you're currently playing.
tags:
  - guide
  - World of Warcraft
---

This guide is focused on offering additional learning for folks looking to improve their general Arms Warrior gameplay, along with class-wide advice regardless of which spec you're currently playing.

<h2>Mastering Arms Offensive Abilities</h2>
Arms Warriors are prone to overlooking very small, but impactful, alterations to gameplay which can make a significant impact on overall DPS capabilities over the course of a fight.
<h4>1. Improved Rage Management</h4>
Avoid casting <strong>Slam</strong> if you have less than 50 rage. This is because you want to always have 30 rage on hand in order to immediately use <strong>Mortal Strike</strong> afterwards when it is off cooldown (especially if you are about to run out of <strong>Deep Wounds</strong>). By casting <strong>Slam</strong> solely above 50 rage, you'll have enough Rage banked to cast <strong>Slam</strong> (20 rage) and still have enough Rage leftover afterwards to immediately cast a cast <strong>Mortal Strike</strong> (30 rage). To put this all into math, 20+30=50 Rage banked before casting <strong>Slam</strong>.

During execute/condemn windows this mentality still applies, though you won't be casting <strong>Slam</strong> ever. During execute windows you solely want to be spending Rage on <strong>Execute</strong> and <strong>Mortal Strike</strong>. Since <strong>Execute/Condemn</strong> consumes a large amount of Rage, potentially all of your Rage, you want to bank Rage briefly before your <strong>Deep Wounds</strong> expires, allowing you to instantly reapply it via <strong>Mortal Strike</strong> with your saved rage, then go back to spending all excess Rage on <strong>Execute/</strong><strong>Condemn</strong>.
<h4>2. Advanced Rage Generation</h4>
<strong>Charge</strong> is often overlooked as a significant source of Rage. It has a relatively brief cooldown of 20 seconds and will have two uses available if you take the <em>Double Time</em> talent. Every time you use <strong>Charge</strong> you gain 20 rage, essentially making it an on-demand rage generator. This rage generation is leveraged in a technique called "Charge Weaving" to generate additional Rage throughout a fight.

Since <strong>Charge</strong> cannot be used while in melee range, the idea is to stand near the maximum melee range of your target when you are about to charge. You then wait for your auto-attack to go happen (giving you normal rage amount), step out of melee range, use <strong>Charge</strong> to re-enter melee range, and follow it up with another auto-attack. The goal is to <strong>Charge</strong> <em>between</em> your auto-attacks so that you are not sacrificing any auto-attacks. In order to help with this, you can install a "swing timer" addon or WeakAura to better gauge when a good time to Charge Weave will be.
<h4>3. Simplified Burst Windows with Macros</h4>
One of the biggest improvements you can make for higher overall damage is to work on optimizing your burst windows. A simple adjustment that often has high-impact on damage is to leverage macros, which helps to ensure you have the highest damage possible without missing out on global cooldown timers. The most notable macro is to bind your On Use trinkets to activate whenever you press your largest DPS cooldown, <strong>Avatar</strong>. Since <strong>Avatar</strong> is your largest DPS window, casting trinkets alongside <strong>Avatar</strong> will get the most bang for your buck from them.

Not all trinkets are good candidates for this, especially if the trinket's cooldown doesn't align with <strong>Avatar</strong>'s 1.5min cooldown, but it's an overall safe macro most trinkets because it's one less thing to worry about on your openers while ensuring your on-use trinkets are getting used during high damage windows. You can also include some racial abilities alongside this, though not all racials are good to bind to macros due to secondary benefits (such as <strong>Fireblood</strong> removing negative status effects).

This is the macro I use to accomplish this:
<blockquote>#showtooltip Avatar
/use 13
/cast Avatar</blockquote>
<h4>4. Utilize @cursor macros</h4>
Alongside macros for trinkets, making one for "placeable" spells is extremely beneficial as well. For warrior, an example of this is the <strong>Ravager</strong> talent, which requires you to use an aiming reticle before casting the ability. Needing to click--&gt;aim--&gt;place an ability can eat up one or more seconds, which is time better spent casting direct DPS abilities instead, so avoiding the "placement" of the spell is a direct DPS increase. The way to get around the placement issue is through the usage of the <code>@cursor</code> macro, which allows you to instantly cast a placeable spell wherever your mouse pointer is with a single button press. You can accomplish this with the following macro:
<blockquote>#showtooltip
/cast [@cursor] Bladestorm</blockquote>
WoW is smart enough to know that <strong>Ravager</strong> = <strong>Bladestorm</strong>, so you simply say "<strong>Bladestorm</strong>" and the game will automatically cast whichever one you have talented without the need for complex conditional logic.

<h2>Mastering Arms Defensive Skills</h2>
Though far less sexy than your offensive abilities, Arms comes jam-packed with powerful defensive abilities which allow it to prevent party wipes when played correctly. From mitigating party/raid-wide damage, to saving your tank from death, to mitigating/skipping entire mechanics, warrior has a lot of tools in its belt to reach for to handle various circumstances.
<h4>1. Pre-cast Rallying Cry</h4>
If possible, be sure to cast <strong>Rallying Cry</strong> <em>before damage comes out</em> to gain maximum potential. <strong>Rallying Cry</strong> has two major features: it increases everyone's maximum health by 15% (effectively a heal), as well as grants everyone 15% temporary health for 10 seconds. When combined, thats  30% health added to the whole party, however, if you cast this <em>after</em> the damage has already been done, then you're losing out on a significant amount of temporary health since the damage will have already taken place. If used reactively it is less effective, but can still save lives nonetheless.
<h4>2. Indirectly give your tank a break</h4>
You can save your tank from getting pummeled to death by using two abilities combined together, <strong>Die by the Sword</strong> and <strong>Intervene</strong>. This is possible because our main defensive cooldown, <strong>Die By The Sword</strong>, grants 100% parry chance lasts for 8 seconds, while <strong>Intervene</strong> makes you intercept all melee/ranged hits for the next 6 seconds. This gives you a 2 second buffer to entirely negate all physical damage your <strong>Intervene</strong> target would have received for six seconds, buying your healer time to top them off, or bypassing entire mechanics.
<h4>3. Leverage infinite-length survivability increases</h4>
The <strong>Defensive Stance</strong> talent is extremely powerful. While active it grants a 20% reduction in damage taken can save your life. It does reduce the damage you do by 10%, but your healers will thank you and it's best to be alive at 90% of your power than dead at 0% of your power. The best part about <strong>Defensive Stance</strong> is that it has no duration as it is a toggle ability. This means you can enable<strong> Defensive Stance</strong> during high inbound damage and it does not matter how long the damage persists, you can get significant damage reduction through it for the entirety.
<h4>4. Make use of Spell Reflect often.</h4>
<strong>Spell Reflect</strong> is your best friend and can be used to mitigate and/or ignore a large number of mechanics, or even directly redirecting them back onto the attacker to increase your own DPS. A full spreadsheet of all current content can be found on the <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQgrszRE22Brb0f5k761vUXVe7MD1-qHThpalxzn0zWFRdQqrh0hM5LcQNoa-lLz4781S5rH2e9tRXG/pubhtml">Shadowlands Spell Reflect &amp; Shield Block spreadsheet</a>. There is a <em>significant</em> amount of mechanics which are entirely ignorable due to this ability, and learning to make proper use of it will make your life much easier in all content.

<h2>Mastering Arms Utility Skills</h2>
While neither offensive or defensive, there are some additional tools I wanted to mention which can help to improve your life as an Arms Warrior I wanted to touch on as well. This is not a comprehensive list of all the
<h4>1. Don't break your knees</h4>
Casting <strong>Charge</strong>, <strong>Intervene</strong>, or <strong>Heroic Leap</strong> right before you hit the ground will cancel fall damage entirely.
<h4>2. Remember to re-read your tooltips</h4>
It's easy to forget small things, like how <strong>Avatar</strong> also removes roots and snares, or how <strong>Bladestorm </strong>makes you immune to movement impairing and loss of control effects. These might seem like small things, but can come in handy during clutch moments. For example, <strong>Bladestorm</strong> can be used to ignore any knockback effects (such as Sire Phase 3) to avoid getting thrown from ledges in sticky situations.
<h4>3. Raid Smart, not Hard</h4>
<ul>
 	<li>When fighting Huntsman Altimore, it is possible to maintain <strong>Deep Wounds</strong> on both Altimore + the current dog at all times if they are grouped together. Use<strong> Sweeping Strikes</strong> to maintain it easiest and upon expiration manually apply <strong>Mortal Strikes</strong> inbetween the cooldowns of <strong>Sweeping Strikes.</strong></li>
 	<li>Take the <em>Bounding Stride</em> talent for Artificer Xy'mox, since the cooldown reduction on <strong>Heroic Leap</strong> allows us to jump out of Annihilation every time it is cast.</li>
 	<li>During The Council of Blood fight, you can leverage <strong>Sweeping Strikes</strong> to cleave <strong>Condemn</strong> off of high-health targets onto your desired target. You can also leverage the <em>Dreadnaught</em> talent + <strong>Sweeping Strikes</strong> to generate additional waves of damage onto your primary target since it will spawn two waves instead of one. Non-Primary-Target damage is removed in this fight, but you can circumvent this to maintain high damage on your main target regardless through the use of smart cleaving.</li>
 	<li>Take the <em>Double Time</em> talent for Sire Denathrius in order to leverage <strong>Charge</strong>'s fall-damage avoidance for every single cast of Blood Price.</li>
</ul>
<h4>4. Turn Dungeons into Fungeons</h4>
<ul>
 	<li>Within Sanguine Depths, Executor Tarvold's <em>Castigate</em> ability can be entirely ignored if you pre-cast <strong>Spell Reflect</strong>, preventing it from doing any damage to you or your party.</li>
 	<li>Also within Sanguine Depths, you can heavily reduce the damage from Grand Proctor Beryllia's <em>Rite of</em> <em>Supremacy</em> through <strong>Spell Reflect</strong>.</li>
 	<li>Inside of Necrotic Wake you can prevent Nalthor's <em>Frozen Binds</em> from being applied to you through pre-casting <strong>Spell Reflect</strong>.</li>
 	<li>Within Mists of Tirna Scithe you can <strong>Spell Reflect</strong> the Tirnenn Villager's <em>Overgrowth</em>, preventing you from getting imprisoned.</li>
 	<li>In De Other Side, you can <strong>Spell Reflect</strong> the horizontal cast of Mueh'zala's <em>Master of Death</em> while side-stepping the other two, meaning 100% uptime on DPS during this phase.</li>
 	<li>In De Other Side, <strong>Spell Reflect</strong> can also be used to ignore every one of Dealer Xy'exa's <em>Explosive Contrivance</em> casts. Just be sure to use <strong>Spell Reflect</strong> <em>after</em> the Arcane Lightning debuff has swapped targets (happens about 1.5 seconds before the <em>Explosive Contrivance</em> cast) or else you'll reflect 1 tick of Arcane Lightning and then get slapped in the face with a bomb. Timing is key here, but if you're paying attention you can upkeep DPS through this phase and speed through it smoother.</li>
</ul>