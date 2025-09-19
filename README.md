# angular-change-detection
Change detection is a feature that we usually don't interact with directly, because this process happens automatically behind the scenes, so we don't use the feature directly, but we can improve how angular performs the change detection cycle.
So whenever there is a change in component data, for example due to user interactions, HTTP requests, or event listeners, Angular's change detection mechanism automatically checks for updates and renders the view if necessary.

## Change Detection Strategies
⚡ Default → Runs on every event, async call, or data mutation.
🎯 OnPush → Runs only when input references change → boosts performance.

## Pro-Level Insights
✨ Angular's Change Detection is tree-based → starts at the root and checks each component.
✨ Using trackBy with *ngFor can prevent unnecessary re-renders.
✨ ChangeDetectorRef allows fine-grained control → you can detach, reattach, or manually trigger detection.
