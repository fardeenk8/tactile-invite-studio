<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep the opening controller, envelope object, ribbon artwork, and revealed invitation in separate browser-safe modules so physical animation and content can evolve independently.
- Coordinate the opening with one state machine and CSS animation timeline; this preserves layer relationships without a heavyweight animation dependency.
- Use generated photographic paper and seal assets with hinged masked envelope layers for tactile detail while keeping the object interactive.
