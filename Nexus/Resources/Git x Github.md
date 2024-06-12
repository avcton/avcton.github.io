---
title: Git | Github
description: Resources to make your way through Git / Github
date: 2024-01-13T19:01:12Z
tags:
  - git
  - github
  - resource
publish: true
---

# Tutorial / Setting Up

[Complete and Concise Git / Github Tutorial](https://kbroman.org/github_tutorial/)

* [Why git and github?](https://kbroman.org/github_tutorial/pages/why.html)
* [Your first time with git and github](https://kbroman.org/github_tutorial/pages/first_time.html)
* [Typical use](https://kbroman.org/github_tutorial/pages/routine.html): add, commit, push, status, and diff.
* [Start a new repository](https://kbroman.org/github_tutorial/pages/init.html): from scratch, or with an existing project.
* [Contribute to someone’s repository](https://kbroman.org/github_tutorial/pages/fork.html): fork.
* [Handling merge conflicts](https://kbroman.org/github_tutorial/pages/merge_conflicts.html).
* [Oops; that last commit message was wrong](https://kbroman.org/github_tutorial/pages/amend_commit_msg.html).
* [Exploring the code and its history](https://kbroman.org/github_tutorial/pages/exploring_code.html): tag, diff
* [Branching and merging](https://kbroman.org/github_tutorial/pages/branching.html).
* [Delete a repository](https://kbroman.org/github_tutorial/pages/delete.html).
* [Git/github with RStudio](https://kbroman.org/github_tutorial/pages/rstudio.html)
* [Other (much more thorough) resources](https://kbroman.org/github_tutorial/pages/resources.html).

# Discord Webhook Integration

1. Fetch the target Discord channel Webhook
    * Navigate to the Discord server and then to the target text channel settings
    * Go to <u>Integrations</u> and create a new Webhook, customize it and copy the Webhook URL
2. Modify the URL by appending it with `/github`​
    * Example:
      **From:**  `https://discord.com/api/webhooks/X/Y`​  
      **To:**  `https://discord.com/api/webhooks/X/Y/github`​
      Where `X`​ = Webhook id and `Y`​ = Webhook token
3. **Optional:**  Fetch the thread id, if target channel is a forum
    * Make sure Discord Developer Mode is turned on
    * Right click the target thread and select <u>Copy Thread ID</u>
    * Modify the URL by appending it with `?thread_id=Z`​
      **From:**  `https://discord.com/api/webhooks/X/Y/github`​  
      **To:**  `https://discord.com/api/webhooks/X/Y/github?thread_id=Z`​
      Where `X`​ = Webhook id, `Y`​ = Webhook token and `Z`​ = channel thread id fetched
4. Insert the Webhook to target Discord repo
    * Navigate to Github and then to the target repo settings
    * Go to <u>Webhooks</u> and then create a new Webhook
    * Insert the modified Webhook URL and select the <u>Content type</u> to be <u>application/json</u>​
    * Customize the events you want to receive and Add the Webhook

## Resources:

* [Where can I find my User Server Message ID? - Discord](https://support.discord.com/hc/en-us/articles/206346498#h_01HRSTXPS5H1KKPQWG4YCWBJVA)
* [Integrate GitHub and Discord with Webhooks | Blog](https://ardalis.com/integrate-github-and-discord-with-webhooks/)
* [GitHub: Sync Notifications with Discord Chat! - YouTube](https://www.youtube.com/watch?v=-KDQqWNK3Tw "GitHub: Sync Notifications with Discord Chat! Commits, Releases &amp; More! Webhooks, no bot! - YouTube")
* [json - Discord webhook post to channel thread - Stack Overflow](https://stackoverflow.com/a/72089643 "json - Discord webhook post to channel thread - Stack Overflow")
