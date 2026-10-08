# Digital Keepsake Invitation

I want you to build an interactive wedding invitation website from scratch.

IMPORTANT: Before writing or changing any code, read this entire prompt carefully. Treat the requirements below as the source of truth. Do not start by making a generic wedding invitation template. The visual quality, mobile-first composition, physical-feeling animation, and interaction flow are the most important parts of this project.

==================================================
1. PRODUCT
==================================================

Build a premium, interactive digital wedding invitation.

The experience should feel like opening a beautifully designed physical wedding invitation on a phone.

This is NOT a normal wedding website with a hero section, navbar, cards, buttons, and generic wedding illustrations.

It should feel like a piece of luxury editorial stationery brought to life digitally.

The user should feel:

"Something beautiful was delivered to me, and I am physically opening it."

The website should contain dummy wedding/event information for now.

Do not use real personal information.

No Instagram Reel or video integration is needed.

==================================================
2. MOST IMPORTANT REQUIREMENT: NATIVE MOBILE FIRST
==================================================

Design the experience for a mobile phone FIRST.

The primary canvas is:

390 × 844 px portrait.

Also test the layout mentally and structurally at:

375 × 812
393 × 852
430 × 932
320 × 568

DO NOT design a desktop website and then squeeze it into a phone.

DO NOT create a desktop composition and place a phone-shaped frame around it.

DO NOT make the mobile version look like a miniature desktop website.

The mobile viewport itself IS the invitation.

There must be NO fake phone frame, outer device frame, browser frame, or dark container surrounding the invitation.

The invitation should naturally occupy the entire mobile viewport.

Every element should be positioned and sized specifically for portrait mobile.

Desktop should be treated only as a secondary responsive adaptation.

==================================================
3. CORE OPENING EXPERIENCE
==================================================

The opening experience is the most important part of the entire website.

The initial screen should show a physical-looking luxury envelope.

The envelope should be centered naturally within the mobile composition.

It should NOT look like a flat rectangle or a generic CSS card.

The visual hierarchy should be:

1. Beautiful stationery/background
2. Envelope
3. Central seal/stamp
4. Subtle invitation details around it

The central stamp/seal is the primary interactive element.

The user taps the central stamp/seal.

That interaction begins the opening sequence.

The sequence should feel physical and deliberate:

STEP 1:
User sees the closed envelope.

STEP 2:
User taps the central stamp/seal.

STEP 3:
The seal responds naturally to the interaction.

STEP 4:
The envelope opens.

STEP 5:
The knot/ribbon element visibly unties/release naturally.

STEP 6:
The envelope/panels open.

STEP 7:
The invitation inside is revealed.

STEP 8:
The user can then scroll through the invitation to discover the wedding/event information.

The animation should feel like a physical object being opened rather than multiple unrelated DOM elements moving around.

Use coordinated animation timing and easing.

Avoid excessive bouncing, spinning, scaling, or flashy transitions.

==================================================
4. PHYSICAL OBJECT QUALITY
==================================================

The biggest problem with previous attempts was that the envelope, seal, ribbon, and floral elements looked like disconnected fake UI graphics.

Do NOT repeat this.

The envelope must visually read as an envelope.

Use:

- believable paper layering
- envelope flap geometry
- subtle paper texture
- realistic shadows
- subtle depth
- carefully controlled folds
- restrained highlights
- believable seal placement
- believable ribbon/knot positioning

The seal should look like it belongs physically on the envelope.

The ribbon/knot should look attached to the invitation rather than floating independently.

When the envelope opens, the layers should move according to their physical relationship.

Do not simply animate several rectangles in different directions.

==================================================
5. VISUAL DIRECTION
==================================================

Overall aesthetic:

LUXURY EDITORIAL STATIONERY.

Think:

- premium wedding invitation
- refined stationery
- editorial art direction
- sophisticated paper goods
- elegant typography
- restrained romantic details
- premium print design
- subtle craftsmanship

The design should feel expensive without becoming visually busy.

Use a restrained palette around:

- warm ivory
- soft cream
- blush
- muted rose
- subtle dusty pink
- warm neutral tones

Do not make everything pink.

Do not use loud gradients.

Do not use neon colors.

Do not use excessive gold effects.

Do not use generic "wedding website" styling.

==================================================
6. FLORAL DESIGN
==================================================

Previous versions used huge repetitive flowers that overwhelmed the composition.

Do NOT do that.

Flowers should be secondary decorative elements.

They should support the stationery composition rather than dominate it.

Use restrained botanical/floral details around edges, corners, borders, or selected transitions.

Avoid:

- giant flowers
- repetitive flower patterns
- floral wallpaper
- flowers covering the invitation
- identical flowers repeated everywhere

The invitation should still look elegant if the floral elements were removed.

==================================================
7. TYPOGRAPHY
==================================================

Typography is extremely important.

Use a sophisticated combination of:

- elegant editorial serif for names/headlines
- restrained sans-serif for supporting information

Typography must feel intentional and premium.

Avoid:

- excessive script fonts
- childish wedding fonts
- overly decorative typography
- too many font families
- huge text that breaks the physical invitation illusion

Names should feel like printed invitation typography.

Supporting information should remain highly readable on mobile.

Maintain strong hierarchy and generous spacing.

==================================================
8. OPENING SCREEN COMPOSITION
==================================================

Do NOT fill every part of the screen.

The opening should have breathing room.

The envelope should have enough surrounding negative space to feel like a photographed/designed stationery object.

Do not force every decorative element into the first viewport.

Do not overcrowd the screen.

The first screen should communicate one thing clearly:

"Open the invitation."

The interaction should be obvious without requiring instructions such as:

"Click here"
"Tap to open"
"Open invitation"

If a subtle cue is needed, use a very refined visual affordance rather than a large button.

==================================================
9. AFTER THE ENVELOPE OPENS
==================================================

Once the invitation is revealed, transition naturally into the actual invitation content.

The invitation should continue feeling like the same physical stationery system.

Do NOT suddenly transition into a completely different generic website.

The revealed invitation should contain sections such as:

- Couple names
- Wedding announcement
- Date
- Venue
- Event details
- Location
- Schedule
- RSVP
- Additional information

Use dummy information.

The content should be structured for comfortable mobile scrolling.

The user should feel like they are moving through an elegant digital invitation rather than browsing a SaaS landing page.

==================================================
10. MOBILE SCROLLING
==================================================

Scrolling begins naturally after the opening interaction.

Do not create weird scroll-jacking behavior.

Do not make the page fight the user's natural touch gestures.

Touch interactions should feel native to a mobile device.

Avoid hover-dependent interactions.

Every important interaction must work with touch.

Buttons and interactive elements must have comfortable touch targets.

==================================================
11. RESPONSIVE BEHAVIOR
==================================================

Mobile is the source of truth.

Do not simply use:

width: 100%;
max-width: ...
margin: auto;

and assume the mobile version is finished.

Actually design the geometry for mobile.

The composition must remain intentional at:

320px
375px
390px
393px
430px

Avoid:

- text overflow
- elements touching screen edges unintentionally
- broken absolute positioning
- cropped envelope
- floating decorations
- overlapping typography
- distorted proportions
- excessive vertical whitespace
- tiny desktop-like UI elements

On larger screens, the invitation may adapt gracefully, but the mobile experience must remain the priority.

==================================================
12. ANIMATION PRINCIPLES
==================================================

Animation should communicate physical movement.

Use:

- subtle easing
- natural timing
- coordinated sequencing
- realistic layering
- restrained motion

Avoid:

- excessive spring effects
- random rotations
- dramatic zooms
- spinning objects
- bouncing UI
- arbitrary fade-ins
- elements flying in from random directions

Every animation should answer:

"What physical action is happening?"

For example:

Envelope flap → rotates/opening around a believable hinge.

Ribbon → loosens/releases.

Seal → reacts to being pressed/released.

Invitation → emerges from envelope.

Panels → unfold/open.

==================================================
13. TECHNICAL APPROACH
==================================================

Build this as a real production-quality web application.

Use a clean component architecture.

Separate:

- opening/envelope experience
- invitation content
- event information
- RSVP
- reusable decorative elements
- animation logic

Do not create one giant component containing everything.

Keep the implementation maintainable.

Use CSS transforms and appropriate animation techniques rather than unnecessarily heavy animation libraries.

Performance matters.

The initial experience should load quickly.

Do not add unnecessary dependencies.

==================================================
14. IMPORTANT DESIGN RULE
==================================================

DO NOT start coding immediately with a generic interpretation.

First reason through the visual hierarchy and interaction sequence.

Then implement the foundation.

After implementation, inspect the result against this prompt.

If something looks like:

- a generic website
- a CSS mockup
- a desktop website squeezed into mobile
- fake floating stationery
- disconnected decorative elements
- oversized flowers
- cheap gradients
- generic wedding UI
- an artificial phone frame

then redesign that part instead of trying to patch it with small CSS adjustments.

==================================================
15. WHAT FAILED IN PREVIOUS ATTEMPTS
==================================================

These mistakes have already happened and MUST NOT happen again:

1. The mobile view looked like a desktop website squeezed into a phone.

2. The envelope looked flat and artificial.

3. The seal/stamp looked like a generic circular UI element rather than a physical wax/stationery seal.

4. The ribbon/knot looked disconnected from the envelope.

5. Floral decorations became huge and repetitive.

6. The screen became visually crowded.

7. Typography did not feel premium.

8. There was a dark outer frame/container that made it feel like the invitation was sitting inside another interface.

9. Elements looked like separate graphics rather than one cohesive physical invitation.

10. The design relied too much on generic CSS shapes instead of creating convincing physical stationery geometry.

11. The animation felt like UI elements moving around rather than a physical invitation being opened.

12. The mobile composition was not designed specifically for a portrait viewport.

13. The result looked like a concept/demo rather than a polished product.

Do not repeat these approaches.

==================================================
16. QUALITY BAR
==================================================

The final result should feel closer to:

a premium digital wedding invitation / luxury stationery experience

and NOT:

a wedding landing page
a SaaS landing page
a generic React template
a Dribbble-style concept with no physical realism
a desktop website inside a phone
a collection of animated rectangles

The first few seconds of interaction are especially important.

Someone should be able to open the site on their phone and immediately understand that they are supposed to interact with the envelope.

==================================================
17. DEVELOPMENT PROCESS
==================================================

Build in stages.

PHASE 1:
Create only the mobile opening experience.

Do not build the entire website first.

Get the envelope, seal, ribbon/knot, layering, proportions, typography, background, and opening animation correct.

PHASE 2:
Test the opening experience across 320px, 375px, 390px, 393px, and 430px widths.

PHASE 3:
Build the revealed invitation.

PHASE 4:
Add the event details and scrolling experience.

PHASE 5:
Add RSVP and remaining interactions.

PHASE 6:
Polish typography, spacing, transitions, shadows, paper texture, and responsive behavior.

At each phase, preserve the established visual language.

==================================================
18. DO NOT ASK ME TO MAKE BASIC DESIGN DECISIONS
==================================================

Use the requirements above as the design direction.

You can make reasonable implementation decisions yourself, but do not change the fundamental product experience.

Do not replace the envelope opening concept.

Do not replace the central stamp interaction.

Do not turn this into a conventional wedding landing page.

Do not prioritize desktop over mobile.

Do not simplify the experience into static sections just because they are easier to implement.

==================================================
FINAL INSTRUCTION
==================================================

Start by creating the mobile-first foundation and the closed-envelope opening screen.

Do NOT build the entire website in one pass.

The first milestone is a polished, premium, native-mobile envelope experience with:

- physical-looking envelope
- central stamp/seal
- tap interaction
- seal response
- knot/ribbon release
- envelope opening
- invitation reveal
- smooth transition into the invitation

Do not proceed to the rest of the website until this foundation feels visually cohesive and premium.

The most important goal is:

MAKE IT FEEL LIKE A REAL LUXURY WEDDING INVITATION THAT HAPPENS TO BE INTERACTIVE.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://tactile-invite-studio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/105456ea-e702-45b7-b93d-80fe6254d846).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
