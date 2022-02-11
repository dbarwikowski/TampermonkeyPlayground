# Idea
I wanted to check how deep you can nest `// @require <URI>` in required dependecies.

# Setup
I've created 3 scripts so that:
- `level-1` has `// @require level-2`
- `level-2` has `// @require level-3`

This is the dependency graph:
  - `level-1` `@require level-2`
    - `level-2` `@require level-3`
      - `level-3`

In Tampermonkey extension you install only `level-1` script.

# Results
`level-3` script is not downloaded.

`level-2` has following implementation
```js
level2_config.prototype = {
    foo: function() {
        console.log("foo");
        level3.bar();
    }
}
```

`level3.bar();` fails to execute because `level3` is not defined.
In dashboard you can check script external dependencies.
Only `level-2` is shown there.
This proves that you can only `@require` scripts in top level script (`level-1`).
