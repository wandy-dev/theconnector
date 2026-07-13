# theconnector
A mod for Mastodon that add federation policy to statuses

per post federation policies is something Mastodon does not want, so I've added
it in a easy to install and reversible way.

This project structure is created based on the conventions of
[lappverk](https://codeberg.org/natkr/lappverk/) which is used to manage patches
and provides a workflow for generating them.

Patches are contained in the `mastodon/<version>` directories. Expect
directories to be added and removed as Mastodon releases new versions.

### Install
theconnector can be installed in two ways:
- Using lappverk as defined in lappverk's [usage example](https://codeberg.org/natkr/lappverk/#usage)
- simply running `git am <patch-file>` for the patch files in ascending order.

### Features
- Local only posts
    - Federation option to visibility modal
    - User setting in posting defaults to set user's preferred default
    - Icons on statuses in timeline displaying a status's federation policy
    - Status federation info exposed via API
