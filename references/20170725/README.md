## --harmony

All ECMAScript 2015 (ES6) features are split into three groups for shipping, staged, and in progress features:

* All shipping features, which V8 considers stable, are turned on by default on Node.js and do NOT require any kind of runtime flag.
* Staged features, which are almost-completed features that are not considered stable by the V8 team, require a runtime flag: --harmony.
* In progress features can be activated individually by their respective harmony flag, although this is highly discouraged unless for testing purposes. Note: these flags are exposed by V8 and will potentially change without any deprecation notice.
